import React, { useContext } from 'react';
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

    return (
        <SkillsContainer>
            <SkillsContent>
                <div className="container">
                    <SkillsTitle>{str.language}</SkillsTitle>
                    <SkillsBar>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                    </SkillsBar>
                    <SkillsTitle>{str.skills}</SkillsTitle>
                    <SkillsBar>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                        <div>
                            <p>ingles</p>
                            <progress id="file" max="100" value="70"> 70% </progress>
                        </div>
                    </SkillsBar>
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

export default Skills
