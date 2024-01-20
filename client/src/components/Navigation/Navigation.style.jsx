import styled from "styled-components";
import * as palette from "../../utils/style-constants"
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }

    nav ul {
        list-style: none;
        display: flex;
        align-items: flex-start;
        gap: 30px;

        li .active {
            color: ${palette.PRIMARY_COLOR};
        }
    }

    .account-btn {
        padding: 12px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        border-radius: 12px;
        background: rgba(70, 107, 243, 0.10);
        border: 0px;
        cursor: pointer;
        
        color: ${palette.PRIMARY_COLOR};
        font-size: 16px;
        font-weight: 500;
        text-align: right;

        &:hover {
            background: rgba(70, 107, 243, 0.15);
        }
    }

    .side-menu-toggle-wrapper {
        display: none;
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .side-menu-toggle-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        nav ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: fixed;
            top: 120px;
            right: 45px;
            width: fit-content;
            height: fit-content;
            background-color: black;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 40px;
            z-index: 3;
        }
        
        .account-btn {
            position: fixed;
            top: 400px;
            right: 70px;
            z-index: 2;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .menu-close {
            top: -500px;
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .logo {
            height: 45px;
        }

        nav ul {
            right: 35px;
        }

        .account-btn {
            right: 50px;
        }

        .menu-toggle {
            width: 32px;
        }
    }
    
    @media (max-width: ${(props) => props.theme.smallDevice.width}) {
        .logo {
            height: 40px;
        }

        nav ul {
            right: 0px;
        }

        .account-btn {
            right: 15px;
        }

        .menu-toggle {
            width: 28px;
        }
    }
`

export const StyledNavLink = styled(NavLink)`
    color: ${palette.NAV_LINKS_COLOR};
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        color: ${palette.PRIMARY_COLOR};
    }
`