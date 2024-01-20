import styled from "styled-components"
import * as palette from "../../utils/style-constants"
import { Link } from "react-router-dom"

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: max(80vh, 500px);

    .bg-video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;

        video {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 25px;
        }
    }

    .hero-content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 100%;

        .hero-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60%;

            h1 {
                color: ${palette.PRIMARY_LIGHT_TEXT_COLOR};
                font-size: 52px;
                font-weight: 700;
                text-align: center;
                text-shadow: 0px 0px 100px black;
            }

            p {
                width: 60%;
                color: ${palette.SECONDARY_LIGHT_TEXT_COLOR};
                font-size: 16;
                font-weight: 400;
                line-height: 30px;
                text-align: center;
                text-shadow: 0px 0px 50px black;
            }

        }

        hr {
            display: block;
            width: 30%;
            border: 0;
            border-top: 1px solid ${palette.PRIMARY_LIGHT_TEXT_COLOR};
            margin: 1em 0;
            padding: 0;
            box-shadow: 0px 0px 50px black;
        }

    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .hero-content-container {
            .hero-content {
                width: 80%;
                h1 {
                    width: 100%;
                }

                p {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .hero-content-container {
            .hero-content {
                width: 100%;
                h1 {
                    width: 100%;
                    font-size: 48px;
                }

                p {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: ${(props) => props.theme.smallDevice.width}) {
        height: 500px;
        .hero-content-container {
            .hero-content {
                h1 {
                    font-size: 36px;
                }

                p {
                    line-height: normal;
                }
            }
        }
    }
`

export const GetStartedButton = styled(Link)`
    padding: 14px 24px;
    border-radius: 12px;
    border: 0px;
    background-color: ${palette.PRIMARY_COLOR};
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        background-color: ${palette.PRIMARY_HOVER_COLOR};
    }
`