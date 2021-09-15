import React, { useContext, useState } from 'react'
import { NavbarContainer, NavbarLink } from './navbar.styles';
import { Link } from "react-router-dom";
import { Context } from '../../global-state/store';
import strings from './strings';

const Navbar = () => {
    const [state] = useContext(Context);
    const str = strings[state.language];
    const [pathname, setPathname] = useState(window.location.pathname);

    return (
        <NavbarContainer>
                <NavbarLink underline={pathname === '/education' && true} ><Link onClick={() => setPathname('/education')} to='/education'>{str?.education}</Link></NavbarLink>
                <NavbarLink underline={pathname === '/experience' && true}><Link onClick={() => setPathname('/experience')} to='/experience'>{str?.experience} </Link></NavbarLink>
                <NavbarLink underline={pathname === '/portfolio' && true}><Link onClick={() => setPathname('/portfolio')} to='/portfolio'>{str?.portfolio}</Link></NavbarLink>
                <NavbarLink underline={pathname === '/skills' && true}><Link onClick={() => setPathname('/skills')} to='/skills'>{str?.skills}</Link></NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar
