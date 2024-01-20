import styled from "styled-components";
import * as palette from "../../utils/style-constants"

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    width: 100%;
    gap: 200px;

    .contact-form-container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 50px;
        height: 100%;
        width: 100%;

        .form-container {
            display: flex;
            flex-direction: column;
            gap: 50px;
            width: 60%;

            .form-content {
                h1 {
                    color: ${palette.PRIMARY_TEXT_COLOR};
                    font-size: 36px;
                }

                p {
                    width: 70%;
                    color: ${palette.SECONDARY_TEXT_COLOR};
                    font-size: 16px;
                }
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 15px;

                input, textarea {
                    padding: 15px 20px;
                    resize: none;
                    font-size: 16px;
                    outline-color: black;
                }
                
                .contact-btn {
                    font-weight: 600;
                    font-size: 20px;
                    width: 30%;
                }
            }
        }

        .map-container {
            width: 100%;
            height: 500px;
            overflow: hidden;

            iframe {
                width: 100%;
                height: 100%;
                border: 0px;
                border-radius: 12px;
            }
        }
    }

    .other-contact-info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;

        .contact-item {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            .contact-info {
                h6 {
                    font-size: 16px;
                }

                a {
                    text-decoration: none;
                    color: ${palette.SECONDARY_TEXT_COLOR};
                    white-space: nowrap;
                }
            }
        }
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        gap: 80px;

        .contact-form-container {
            .form-container {
                width: 100%;
            }
        }
        .other-contact-info {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;

            .contact-item {
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        
    }
`