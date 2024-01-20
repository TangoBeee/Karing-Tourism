import styled from "styled-components";
import * as palette from "../../utils/style-constants"
import ErrorBackground from "../../assets/images/PageNotFound/404-error-background.svg"
import { Link } from "react-router-dom";

export const PageNotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;

    .background-image {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 50px;
        background-image: url(${ErrorBackground});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 24px;
        overflow: hidden;

        .error-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;

            h1 {
                font-size: 96px;
                font-weight: 600;
                color: white;
                line-height: 100%;
                white-space: nowrap;
            }
        }

        .error-404 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 50%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }



    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .background-image {
            .error-content {
                h1 {
                    font-size: 46px;
                }
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        
    }
    
    @media (max-width: ${(props) => props.theme.smallDevice.width}) {
        
    }
`

export const HomeButton = styled(Link)`
    padding: 16px 64px;
    border-radius: 12px;
    border: 0px;
    background-color: ${palette.PRIMARY_COLOR};
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    z-index: 1;

    &:hover {
        background-color: ${palette.PRIMARY_HOVER_COLOR};
    }
`