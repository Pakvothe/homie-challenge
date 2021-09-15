import React, { useContext, useEffect, useState } from 'react';
import { SidebarContainer, Photo, SidebarContent, LanguageButton, SidebarName, About, Contact } from './sidebar.styles';
import Mobile from '../../assets/icons/mobile';
import Mail from '../../assets/icons/mail';
import Linkedin from '../../assets/icons/linkedin';
import Spain from '../../assets/icons/spain';
import Gb from '../../assets/icons/gb';

import { Context } from '../../global-state/store';
import strings from './strings';

const Sidebar = () => {
    const [state, dispatch] = useContext(Context);
    const str = strings[state.language];
    const [profile, setProfile] = useState();

    const handleLanguage = (prop) => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: prop });
    };

    useEffect(() => {
        getProfile();
        // eslint-disable-next-line
    }, []);

    const getProfile = async () => {
        const response = await fetch("http://localhost:3000/profile", {
            method: 'GET'
        });

        response.json().then(body => {
            const profileId = body[0].id;
            if (response.ok) {
                dispatch({ type: 'SET_PROFILE', payload: profileId });
                setProfile(body[0]);
            };
        });
    };

    return (
        <SidebarContainer>
            <Photo src={profile?.picture} />
            <SidebarContent>
                <LanguageButton onClick={() => handleLanguage(state.language === 'es' ? 'en' : 'es')}>
                    {state.language === 'es' ? <Spain /> : <Gb />}{state.language === 'es' ? 'ES' : 'EN'}
                </LanguageButton>
                <div className="overflow-cont">
                    <SidebarName>{profile?.name} {profile?.last_name}</SidebarName>
                    <About>
                        <h3>{str?.about}</h3>
                        <p>{profile?.about}</p>
                    </About>
                    <Contact>
                        <h3>{str?.contact}</h3>
                        <div>
                            <Mobile />
                            <p>{profile?.tel}</p>
                        </div>
                        <div>
                            <Mail />
                            <p>{profile?.mail}</p>
                        </div>
                        <div>
                            <Linkedin />
                            <p>{profile?.linkedin}</p>
                        </div>
                    </Contact>
                </div>
            </SidebarContent>
        </SidebarContainer>
    );
};

export default Sidebar;
