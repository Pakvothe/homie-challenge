import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../global-state/store';
import strings from './strings';

//Styles ===>
import {
    EducationContainer,
    ConnectedList,
    ConnectedListItem,
    ConnectedListContent,
    ConnectedListDate,
    EducationContent,
    EducationContentTitle,
    EducationContentText,
    LicenceContainer,
    LicenceContent,
    LicenceTitle,
    LicenceSubtitle,
    LicenceDate,
    LicenceCredential
} from './education.styles';


const Education = () => {
    const [state] = useContext(Context);
    const str = strings[state.language];
    const [education, setEducation] = useState();
    const [certifications, setCertifications] = useState();

    useEffect(() => {
        getEducation()
        getCertifications()
        // eslint-disable-next-line
    }, [state.profileId])

    const getEducation = async () => {
        const response = await fetch(`http://localhost:3000/education?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setEducation(body)
            }
        })
    }

    const getCertifications = async () => {
        const response = await fetch(`http://localhost:3000/certifications?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setCertifications(body)
            }
        })
    }

    return (
        <EducationContainer>
            <ConnectedList>
                {education && education.map((edu) => (
                    <ConnectedListItem key={edu.id}>
                        <ConnectedListContent>
                            <ConnectedListDate>{edu.date}</ConnectedListDate>
                            <EducationContent>
                                <EducationContentTitle>
                                    <h3>{edu.title}</h3>
                                    <p>{edu.city}, {edu.country}</p>
                                </EducationContentTitle>
                                <EducationContentText>{edu.body}</EducationContentText>
                            </EducationContent>
                        </ConnectedListContent>
                    </ConnectedListItem>
                    ))}
            </ConnectedList>
           <LicenceContainer>
                <h2>{str?.licence}</h2>
           { certifications && certifications.map((cert) => (
                <LicenceContent key={cert.id}>
                    <img src={cert.image} alt="certificate" />
                    <div>
                        <LicenceTitle>{cert.title} </LicenceTitle>
                        <LicenceSubtitle>{cert.proof} </LicenceSubtitle>
                        <LicenceDate>Aplicado en {cert.month} {cert.year}</LicenceDate>
                        <LicenceCredential>ID Credencial {cert.credential}</LicenceCredential>
                    </div>
                </LicenceContent>
            ))}
            </LicenceContainer>
        </EducationContainer>
    )
}

export default Education;
