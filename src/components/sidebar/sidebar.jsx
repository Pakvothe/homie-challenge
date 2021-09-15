import React, { useContext, useEffect, useState } from 'react';
import {
    SidebarContainer,
    Photo,
    BurgerButton,
    SidebarContent,
    LanguageButton,
    SidebarName,
    About,
    Contact
} from './sidebar.styles';
import Mobile from '../../assets/icons/mobile';
import Mail from '../../assets/icons/mail';
import Linkedin from '../../assets/icons/linkedin';
import Spain from '../../assets/icons/spain';
import Gb from '../../assets/icons/gb';
import Right from '../../assets/icons/right';
import Left from '../../assets/icons/left';


import { Context } from '../../global-state/store';
import strings from './strings';

const Sidebar = () => {
    const [state, dispatch] = useContext(Context);
    const str = strings[state.language];
    const [profile, setProfile] = useState();
    const [sidebar, setSidebar] = useState();

    const handleLanguage = (prop) => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: prop });
    };

    useEffect(() => {
        getProfile();
        setSidebar(window.innerWidth <= 1024 ? false : true)
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

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <SidebarContainer sidebar={sidebar}>
            <BurgerButton sidebar={sidebar} onClick={() => toggleSidebar()}>{!sidebar ? <Right/> : <Left/>}</BurgerButton>
            <Photo sidebar={sidebar} src={profile?.picture} />
            <SidebarContent sidebar={sidebar}>
                <LanguageButton sidebar={sidebar} onClick={() => handleLanguage(state.language === 'es' ? 'en' : 'es')}>
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
                            <a href={
                                state.language === 'en'
                                    ? 'https://wa.me/541124089678?text=Send%20me%20a%20message'
                                    : 'https://wa.me/541124089678?text=Envíame%20un%20mensaje'
                            }
                                target="_blank"
                                rel="noreferrer"
                            >{profile?.tel}</a>
                        </div>
                        <div>
                            <Mail />
                            <a href={
                                state.language === 'en'
                                    ? 'mailto:ortiz.franco@yandex.com?Subject=Job%20Offer'
                                    : 'mailto:ortiz.franco@yandex.com?Subject=Oferta%20Laboral'
                            }
                                target="_blank"
                                rel="noreferrer"
                            >{profile?.mail}</a>
                        </div>
                        <div>
                            <Linkedin />
                            <a href={profile?.linkedin} target="_blank" rel="noreferrer">{profile?.linkedin}</a>
                        </div>
                    </Contact>
                </div>
            </SidebarContent>
        </SidebarContainer>
    );
};

export default Sidebar;
