import React, { useContext } from 'react'
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

    return (
        <EducationContainer>
            <ConnectedList>
                <ConnectedListItem>
                    <ConnectedListContent>
                        <ConnectedListDate>1024 -2018</ConnectedListDate>
                        <EducationContent>
                            <EducationContentTitle>
                                <h3>Instituto mexicano de tecnologia</h3>
                                <p>Merida, Yucatan</p>
                            </EducationContentTitle>
                            <EducationContentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur. Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis nisi eu justo interdum vestibulum. Nullam consectetur tristique pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue dui. Pellentesque felis enim, volutpat sed vulputate vel, efficitur vitae lacus. Quisque tempor eget lorem eget mattis. Vivamus molestie, velit eget suscipit sagittis, sapien lacus varius dolor, sed mattis sapien odio lobortis massa.</EducationContentText>
                        </EducationContent>
                    </ConnectedListContent>
                </ConnectedListItem>
                <ConnectedListItem>
                    <ConnectedListContent>
                        <ConnectedListDate>1024 -2018</ConnectedListDate>
                        <EducationContent>
                            <EducationContentTitle>
                                <h3>Instituto mexicano de tecnologia</h3>
                                <p>Merida, Yucatan</p>
                            </EducationContentTitle>
                            <EducationContentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur. Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis nisi eu justo interdum vestibulum. Nullam consectetur tristique pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue dui. Pellentesque felis enim, volutpat sed vulputate vel, efficitur vitae lacus. Quisque tempor eget lorem eget mattis. Vivamus molestie, velit eget suscipit sagittis, sapien lacus varius dolor, sed mattis sapien odio lobortis massa.</EducationContentText>

                        </EducationContent>
                    </ConnectedListContent>
                </ConnectedListItem>
            </ConnectedList>
            <LicenceContainer>
                <h2>{str?.licence}</h2>
                <LicenceContent>
                    <img src="https://franco-ortiz.com/static/media/CertfHenry.3507c0dd.jpg" alt="certificate" />
                    <div>
                        <LicenceTitle>Scrum Foundation Professional Certificate (SFPC)</LicenceTitle>
                        <LicenceSubtitle>CertiProf</LicenceSubtitle>
                        <LicenceDate>Aplicado en Agosto 2019</LicenceDate>
                        <LicenceCredential>ID Credencial 12345678920</LicenceCredential>
                    </div>
                </LicenceContent>
            </LicenceContainer>
        </EducationContainer>
    )
}

export default Education;
