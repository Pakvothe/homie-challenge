import React, { useContext, useEffect, useState } from 'react'
import { NavbarContainer, NavbarLink } from './navbar.styles';
import { Link, Redirect } from "react-router-dom";
import { Context } from '../../global-state/store';
import strings from './strings';
import Book from '../../assets/icons/book2';
import Portfolio from '../../assets/icons/portfolio2';
import Star from '../../assets/icons/star';
import Badge from '../../assets/icons/badge';


const Navbar = () => {
    const [state] = useContext(Context);
    const str = strings[state.language];
    const [pathname, setPathname] = useState(window.location.pathname);
    const [icons, setIcons] = useState();

    useEffect(() => {
        setIcons(window.innerWidth <= 700 ? true : false)
    }, [])

    return (
        <NavbarContainer>
            <Redirect from='/' to='/education' />
            <NavbarLink underline={pathname === '/education' && true} ><Link onClick={() => setPathname('/education')} to='/education'>{icons ? <Book/> : str?.education}</Link></NavbarLink>
            <NavbarLink underline={pathname === '/experience' && true}><Link onClick={() => setPathname('/experience')} to='/experience'>{icons ? <Portfolio/> : str?.experience} </Link></NavbarLink>
            <NavbarLink underline={pathname === '/portfolio' && true}><Link onClick={() => setPathname('/portfolio')} to='/portfolio'>{ icons ? <Badge/> : str?.portfolio}</Link></NavbarLink>
            <NavbarLink underline={pathname === '/skills' && true}><Link onClick={() => setPathname('/skills')} to='/skills'>{icons ? <Star/> : str?.skills}</Link></NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar
