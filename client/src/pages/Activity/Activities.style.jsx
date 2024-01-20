import styled from "styled-components";
import SearchBackgroundImage from "../../assets/images/activities/activities-search-bg.jpg"
import * as palette from "../../utils/style-constants"

export const ActivitiesContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .search-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max(30vh, 300px);
        border-radius: 24px;
        background-image: url(${SearchBackgroundImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        input {
            width: 40%;
            padding: 15px 30px;
            border-radius: 24px;
            outline: 0px;
            border: 0px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    .activities-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        gap: 20px;

        .search-info-wrapper {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .total-activities {
                color: ${palette.SECONDARY_TEXT_COLOR};
                font-size: 16px;
                font-weight: 400;
            }

            .filter-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
        }

        .activity-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            row-gap: 50px;
            column-gap: 20px;
        }
    }



    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .search-background {
            input[type=search] {
                width: 70%;
            }
        }

        .activities-container {
            .search-info-wrapper {
                width: 100%;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {

    }
`