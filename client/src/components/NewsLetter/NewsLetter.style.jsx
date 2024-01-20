import styled from "styled-components";
import * as palette from "../../utils/style-constants"

export const NewsLetterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .newsletter-container {
        border-radius: 24px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border: 1px solid #D3D3D3;

        .newsletter-img {
            background-image: url("src/assets/images/home/newsletter/newsletter-img.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 650px;
            height: 440px;
        }
        
        .newsletter-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;

            h1 {
                width: 70%;
                text-align: center;
                font-weight: 600;
                color: ${palette.PRIMARY_TEXT_COLOR};
            }

            p {
                width: 50%;
                text-align: center;
                font-weight: 400;
                color: ${palette.SECONDARY_TEXT_COLOR};
            }

            .form-wrapper {
                position: relative;
                width: 60%;

                input {
                    width: 100%;
                    padding: 15px 20px;
                    border-radius: 24px;
                    border: 1px solid ${palette.SECONDARY_TEXT_COLOR};
                    font-size: 16px;
                    padding: 20px;
                    outline: none;
                }

                .subscribe-btn {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40%;
                    top: 5px;
                    right: 5px;
                    bottom: 5px;
                    font-size: 15px;
                    font-weight: 600;
                    border-radius: 24px;
                }
            }
        }
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .newsletter-container {
            .newsletter-content {

                h1 {
                    width: 80%;
                }

                p {
                    width: 60%;
                }

                .form-wrapper {
                    .subscribe-btn {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .newsletter-container {
            flex-direction: column;
            
            .newsletter-img {
                height: 300px;
            }

            .form-wrapper {
                input {
                    margin-bottom: 20px;
                }
                .subscribe-btn {
                    margin-bottom: 20px;
                }
            }
        }
    }
`