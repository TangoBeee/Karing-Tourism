import styled from "styled-components";
import * as palette from "../../utils/style-constants"

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 115px;
    background-color: ${palette.PRIMARY_TEXT_COLOR};
    color: ${palette.PRIMARY_LIGHT_TEXT_COLOR};
    padding: 105px 100px;
    margin-top: 80px;

    .branding {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 15px;

        .logo-wrapper {
            display: flex;
            gap: 12px;
            align-items: center;

            .logo {
                height: 40px;
                border-radius: 10px;
            }

            p {
                font-family: 'Lobster', 'Poppins', cursive;
                font-size: 30px;
                font-weight: 500;
                white-space: nowrap;
            }
        }

        .branding-content {
            p {
                font-size: 16px;
                color: ${palette.SECONDARY_LIGHT_TEXT_COLOR};
            }
        }
    }

    .footer-links-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 100px;

        .footer-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 16px;

            h3 {
                white-space: nowrap;
            }

            ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 14px;
                list-style: none;
                white-space: nowrap;

                li a {
                    text-decoration: none;
                    color: ${palette.FOOTER_LINKS_COLOR};

                    &:hover {
                        color: ${palette.FOOTER_LINKS_HOVER_COLOR}
                    }
                }
            }
        }

        .contact-container {
            ul {
                gap: 10px;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.tablet.width}) {
        gap: 30px;

        .branding {
            .logo-wrapper {
                p {
                    font-size: 24px;
                    white-space: wrap;
                }
            }
        }


    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;

        .branding {
            justify-content: center;
            align-items: center;
            
            .branding-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.smallDevice.width}) {
        .branding {
            justify-content: center;
            align-items: center;
            text-align: center;

            .logo-wrapper {
                flex-direction: column;
                text-align: center;
            }
        }
        
        .footer-links-container {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;

            .footer-section {
                justify-content: center;
                align-items: center;

                ul {
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
`