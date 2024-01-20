import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .about-img {
        width: 90%;
        height: 500px;
        background-image: url("src/assets/images/about/about-image.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .about-content {
        padding-inline: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;

        ol {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }


    @media (max-width: ${(props) => props.theme.tablet.width}) {
        .about-img {
            height: 300px;
        }

        .about-content {
            padding-inline: 50px;
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .about-img {
            width: 100%;
            height: 250px;
        }

        .about-content {
            padding-inline: 0px;
        }
    }
`