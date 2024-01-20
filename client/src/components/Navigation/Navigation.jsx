import React, { useState } from 'react'
import { StyledNavLink, NavigationContainer } from './Navigation.style'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { responsiveTheme } from '../../utils/style-constants'
import { MdMenu, MdClose } from "react-icons/md";

const Navigation = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    const menuToggleHandler = (event) => {
        setMenuToggle(!menuToggle)
    }

    return (
        <ThemeProvider theme={responsiveTheme}>
            <NavigationContainer className="container">
                <div className='logo-wrapper'>
                <Link to="/">
                        <img className='logo' src={Logo} alt="logo" />
                    </Link>
                </div>

                <nav>
                    <ul className={
                        menuToggle ? "" : "menu-close"
                    } >
                        <li>
                            <StyledNavLink onClick={menuToggleHandler} to="/">Home</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink onClick={menuToggleHandler} to="/about">About</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink onClick={menuToggleHandler} to="/activities">Activities</StyledNavLink>
                        </li>

                        <li>
                            <StyledNavLink onClick={menuToggleHandler} to="/contact">Contact Us</StyledNavLink>
                        </li>
                    </ul>
                </nav>

                <button className={`account-btn ${menuToggle ? "" : "menu-close"}`} >My Account</button>

                <div className="side-menu-toggle-wrapper">
                    {
                        menuToggle ? <MdClose className='close-menu-toggle menu-toggle' onClick={menuToggleHandler} size={48} /> : <MdMenu className='open-menu-toggle menu-toggle' onClick={menuToggleHandler} size={48} />
                    }
                    
                </div>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default Navigation