import styled from "styled-components"
import * as palette from "../../utils/style-constants"

export const ServiceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    h6 {
        color: ${palette.PRIMARY_TEXT_COLOR};
        font-size: 36px;
        font-weight: 600;
        line-height: 140%;
    }

    h1 {
        color: ${palette.PRIMARY_TEXT_COLOR};
        font-size: 36px;
        font-weight: 600;
        line-height: 140%;
        width: 100%;
    }

    .services-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 100px;

        .service-item {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            gap: 10px;
            border-radius: 15px;
            background-color: #f6f6f6;
            padding: 30px;
            width: 350px;
            height: 300px;
            cursor: pointer;
            border: 1px solid transparent;

            .service-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;

                h4 {
                    color: ${palette.PRIMARY_TEXT_COLOR};
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 30px;
                    text-align: center;
                }

                p {
                    color: ${palette.SECONDARY_TEXT_COLOR};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 30px;
                    text-align: center;
                }
            }

            &:hover {
                box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
            }
        }

        
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .services-wrapper {
            .service-item {
                width: 80%;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .services-wrapper {
            .service-item {
                width: 100%;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.smallDevice.width}) {
        .services-wrapper {
            .service-item {
                padding: 0px;
            }
        }
    }
`