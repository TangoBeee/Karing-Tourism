import styled from "styled-components";
import * as palette from "../../utils/style-constants"
import { Link } from "react-router-dom";

export const ActivityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 50px;

    .activity-heading-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 36px;
            font-weight: 600;
            text-align: center;
            color: ${palette.PRIMARY_TEXT_COLOR};
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: ${palette.SECONDARY_TEXT_COLOR};
            line-height: 30px;
            width: 60%;
            text-align: center;
        }
    }

    .activities-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .carousel {
            display: grid;
            grid-auto-flow: column;
            gap: 30px;
            overflow-x: scroll;
            border-radius: 24px;
            padding-top: 10px;
            padding-bottom: 40px;

            &::-webkit-scrollbar {
                width: 0px;
            }
        }
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .activity-heading-container {
            p {
                width: 70%;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .activity-heading-container {
            p {
                width: 100%;
            }
        }
    }
`

export const ViewMore = styled(Link)`
    font-size: 18px;
    font-weight: 500;
    color: ${palette.SECONDARY_TEXT_COLOR};
    text-decoration: none;
    padding: 14px 24px;
    border-radius: 100px;
    border: 1.5px solid ${palette.SECONDARY_TEXT_COLOR};
    background-color: transparent;
    cursor: pointer;
    margin-top: -40px;
`