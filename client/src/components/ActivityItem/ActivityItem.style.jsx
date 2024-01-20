import styled from "styled-components";
import * as palette from "../../utils/style-constants"

export const ActivityItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    width: 386px;
    height: 486px;
    box-shadow: 0px 14px 25px 0px #F2F2F2;

    .activity-img {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 300px;
        border-radius: 24px;
        cursor: pointer;
    }

    .activity-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 20px;
        gap: 30px;

        .activity-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .activity-type {
                font-size: 12px;
                font-weight: 300;
                font-style: italic;
                color: ${palette.PRIMARY_TEXT_COLOR};
                white-space: nowrap;
            }

            .activity-name {
                font-size: 18px;
                font-weight: 600;
                color: ${palette.PRIMARY_TEXT_COLOR};
                white-space: nowrap;
            }

            .activity-location-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;

                .activity-location {
                    font-size: 16px;
                    font-weight: 400;
                    color: ${palette.SECONDARY_TEXT_COLOR};
                    white-space: nowrap;
                }
            }
        }

        .activity-price-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 5px;
            
            .price-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-size: 18px;
                    font-weight: 600;
                    white-space: nowrap;
                }
            }
        }
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        flex: 1;
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        flex: 1;
    }
`