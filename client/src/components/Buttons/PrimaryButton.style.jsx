import styled from "styled-components"
import * as palette from "../../utils/style-constants"

export const PrimaryButtonContainer = styled.button`
    padding: 14px 24px;
    border-radius: 12px;
    border: 0px;
    background-color: ${palette.PRIMARY_COLOR};
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        background-color: ${palette.PRIMARY_HOVER_COLOR};
    }
`