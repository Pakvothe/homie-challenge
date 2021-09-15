import React, { useContext } from 'react'
import { SidebarContainer, Photo, SidebarContent, LanguageButton, SidebarName, About, Contact} from './sidebar.styles';
import Mobile from '../../assets/icons/mobile';
import Mail from '../../assets/icons/mail';
import Linkedin from '../../assets/icons/linkedin';
import Spain from '../../assets/icons/spain';
import Gb from '../../assets/icons/gb';

import { Context } from '../../global-state/store';
import strings from './strings';

const Sidebar = () => {
    const [state, dispatch] = useContext(Context)
    const str = strings[state.language];

    const handleLanguage = (prop) => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: prop})
    }

    return (
        <SidebarContainer>
            <Photo src="https://franco-ortiz.com/static/media/paco.8c1922c9.png" />
            <SidebarContent>
                <LanguageButton onClick={() => handleLanguage(state.language === 'es' ? 'en' : 'es')}>
                    {state.language === 'es' ? <Spain/> : <Gb/> }{state.language === 'es' ? 'ES' : 'EN'}
                </LanguageButton>
                <div className="overflow-cont">
                    <SidebarName>El nombre del chabon</SidebarName>
                    <About>
                        <h3>{str?.about}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ullamcorper nisi. In a ornare felis. Suspendisse tempor nisi ac lacus suscipit, ut elementum magna ullamcorper. Integer ultrices sem a sodales tincidunt.</p>
                    </About>
                    <Contact>
                        <h3>{str?.contact}</h3>
                        <div>
                            <Mobile/>
                            <p>+54 1124089678</p>
                        </div>
                        <div>
                            <Mail />
                            <p>ortiz.franco@yandex.com</p>
                        </div>
                        <div>
                            <Linkedin/>
                            <p>http://www.linkedin.com/asdasdasdas</p>
                        </div>
                    </Contact>
                </div>
            </SidebarContent>
        </SidebarContainer>
    )
}

export default Sidebar
