import styled from "styled-components";

export const HeaderStyle = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 40;

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        gap: 40px;
        padding: 35px;
        border-bottom: 2px solid #353535;
        background: rgb(0, 0, 0);
        background: -moz-linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(23, 23, 23, 1) 50%,
            rgba(0, 0, 0, 1) 100%
        );
        background: -webkit-linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(23, 23, 23, 1) 50%,
            rgba(0, 0, 0, 1) 100%
        );
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(23, 23, 23, 1) 50%,
            rgba(0, 0, 0, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);

        .link {
            color: white;
            text-decoration: none;
            font-size: 22px;
            font-weight: 500;
            padding: 10px 60px;
            background-color: transparent;
            border-radius: 8px;
            transition: 0.5s;
            border: 2px solid #DFDFDF;
            text-shadow: 0px 0px 8px #DFDFDF;

            &:hover {
                color: #000000;
                background-color: #D9ABFF;
            }
        }

        @media screen and (max-width: 660px) {
            gap: 0;
            justify-content: space-evenly;

            .link {
                padding: 10px 20px;
                font-size: 16px;
            }
        }
    }
`;

export const FormStyle = styled.form`
    margin: 160px 0 80px;
    display: flex;
    justify-content: center;

    .search-input {
        width: 90%;
        border-radius: 10px;
        height: 40px;
        border: none;
        padding-left: 20px;
        box-shadow: 0px 0px 10px #DFDFDF;

        &:focus {
            box-shadow: 0px 0px 15px #D9ABFF;
        }

        @media screen and (max-width: 660px) {
            width: 70%;
        }
    }
`;
