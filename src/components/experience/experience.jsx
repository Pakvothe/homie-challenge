import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../global-state/store';

//Styles ===>
import {
    ExperienceContainer,
    ConnectedList,
    ConnectedListItem,
    ConnectedListContent,
    ConnectedListDate,
    ExperienceContent,
    ExperienceContentTitle,
    ExperienceContentText,
    ExperienceContentSubtitle,
} from './experience.styles';


const Experience = () => {
    const [state] = useContext(Context);
    const [jobs, setJobs] = useState();

    useEffect(() => {
        getJob();
        // eslint-disable-next-line
    }, [state.profileId]);

    const getJob = async () => {
        const response = await fetch(`http://localhost:3000/jobs?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setJobs(body);
            };
        });
    };


    return (
        <ExperienceContainer>
            <ConnectedList>
                {jobs && jobs.map((job) => (
                    <ConnectedListItem key={job.id}>
                        <ConnectedListContent>
                            <ConnectedListDate>
                                <p>{job.date}</p>
                                <p className="red-text">{job.month} meses</p>
                            </ConnectedListDate>
                            <ExperienceContent>
                                <ExperienceContentTitle>
                                    <h3>{job.title}</h3>
                                    <p>{job.city}, {job.country}</p>
                                </ExperienceContentTitle>
                                <ExperienceContentSubtitle>
                                    {job.company}
                                </ExperienceContentSubtitle>
                                <ExperienceContentText>
                                    {job.body}
                                </ExperienceContentText>
                            </ExperienceContent>
                        </ConnectedListContent>
                    </ConnectedListItem>
                ))}
            </ConnectedList>
        </ExperienceContainer>
    );
};

export default Experience;
