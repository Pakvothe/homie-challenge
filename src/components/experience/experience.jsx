import React  from 'react';

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
    return (
        <ExperienceContainer>
            <ConnectedList>
                <ConnectedListItem>
                    <ConnectedListContent>
                        <ConnectedListDate>
                            <p>2020 - actual</p>
                            <p className="red-text">8 meses</p>
                        </ConnectedListDate>
                        <ExperienceContent>
                            <ExperienceContentTitle>
                                <h3>Java Developer</h3>
                                <p>Merida, Yucatan</p>
                            </ExperienceContentTitle>
                            <ExperienceContentSubtitle>
                                Empresa numero 1
                            </ExperienceContentSubtitle>
                            <ExperienceContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur. Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis nisi eu justo interdum vestibulum. Nullam consectetur tristique pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue dui. Pellentesque felis enim, volutpat sed vulputate vel, efficitur vitae lacus. Quisque tempor eget lorem eget mattis. Vivamus molestie, velit eget suscipit sagittis, sapien lacus varius dolor, sed mattis sapien odio lobortis massa.
                            </ExperienceContentText>
                        </ExperienceContent>
                    </ConnectedListContent>
                </ConnectedListItem>
                <ConnectedListItem>
                    <ConnectedListContent>
                        <ConnectedListDate>
                            <p>2020 - actual</p>
                            <p className="red-text">8 meses</p>
                        </ConnectedListDate>
                        <ExperienceContent>
                            <ExperienceContentTitle>
                                <h3>Java Developer</h3>
                                <p>Merida, Yucatan</p>
                            </ExperienceContentTitle>
                            <ExperienceContentSubtitle>
                                Empresa numero 1
                            </ExperienceContentSubtitle>
                            <ExperienceContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur. Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis nisi eu justo interdum vestibulum. Nullam consectetur tristique pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue dui. Pellentesque felis enim, volutpat sed vulputate vel, efficitur vitae lacus. Quisque tempor eget lorem eget mattis. Vivamus molestie, velit eget suscipit sagittis, sapien lacus varius dolor, sed mattis sapien odio lobortis massa.
                            </ExperienceContentText>
                        </ExperienceContent>
                    </ConnectedListContent>
                </ConnectedListItem>
                <ConnectedListItem>
                    <ConnectedListContent>
                        <ConnectedListDate>
                            <p>2020 - actual</p>
                            <p className="red-text">8 meses</p>
                        </ConnectedListDate>
                        <ExperienceContent>
                            <ExperienceContentTitle>
                                <h3>Java Developer</h3>
                                <p>Merida, Yucatan</p>
                            </ExperienceContentTitle>
                            <ExperienceContentSubtitle>
                                Empresa numero 1
                            </ExperienceContentSubtitle>
                            <ExperienceContentText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur. Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis nisi eu justo interdum vestibulum. Nullam consectetur tristique pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue dui. Pellentesque felis enim, volutpat sed vulputate vel, efficitur vitae lacus. Quisque tempor eget lorem eget mattis. Vivamus molestie, velit eget suscipit sagittis, sapien lacus varius dolor, sed mattis sapien odio lobortis massa.
                            </ExperienceContentText>
                        </ExperienceContent>
                    </ConnectedListContent>
                </ConnectedListItem>
            </ConnectedList>
        </ExperienceContainer>
    )
}

export default Experience;
