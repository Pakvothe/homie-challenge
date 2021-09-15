import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../global-state/store';
import strings from './strings';
import { SkillsContainer, SkillsContent, SkillsTitle, SkillsBar, InterestContent, InterestTitle, InterestIcons } from './skills.styles';
import Paint from '../../assets/icons/paint';
import Gamepad from '../../assets/icons/gamepad';
import Listening from '../../assets/icons/listening';
import Ball from '../../assets/icons/ball';
import Movies from '../../assets/icons/movies';

const Skills = () => {
    const [state] = useContext(Context);
    const str = strings[state.language];
    const [languages, setLanguages] = useState();
    const [skills, setSkills] = useState();

    useEffect(() => {
        getLanguages();
        getSkills();
        // eslint-disable-next-line
    }, [state.profileId]);

    const getLanguages = async () => {
        const response = await fetch(`http://localhost:3000/languages?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setLanguages(body);
            }
        });
    };

    const getSkills = async () => {
        const response = await fetch(`http://localhost:3000/skills?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setSkills(body);
            }
        });
    };

    return (
        <SkillsContainer>
            <SkillsContent>
                <div className="container">
                    <SkillsTitle>{str.language}</SkillsTitle>
                    {languages && languages.map((lang) => (
                        <SkillsBar key={lang.id}>
                            <div >
                                <p>{lang.name}</p>
                                <progress id="file" max="100" value={lang.percentage}>{lang.percentage}</progress>
                            </div>
                        </SkillsBar>
                    ))}
                    <SkillsTitle style={{ marginTop: '20px' }}>{str.skills}</SkillsTitle>
                    {skills && skills.map((skill) => (
                        <SkillsBar key={skill.id} >
                            <div >
                                <p>{skill.name}</p>
                                <progress id="file" max="100" value={skill.percentage}>{skill.percentage}</progress>
                            </div>
                        </SkillsBar>
                    ))}
                </div>
            </SkillsContent>
            <InterestContent>
                <InterestTitle>{str.interest}</InterestTitle>
                <InterestIcons>
                    <Paint />
                    <Gamepad />
                    <Listening />
                    <Ball />
                    <Movies />
                </InterestIcons>
            </InterestContent>
        </SkillsContainer>
    )
}

export default Skills;
