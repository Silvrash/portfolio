import styled from "styled-components";
import { toDesignRatio } from "../utilities";

const Loader: React.FC = () => {
    return (
        <StyledDiv>
            <svg
                width={toDesignRatio(58 * 2)}
                height={toDesignRatio(66 * 2)}
                viewBox="0 0 58 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M29.4671 24.761L22.5286 44.8905H18.3336L27.0745 21.6666H29.7542L29.4671 24.761ZM35.2731 44.8905L28.3187 24.761L28.0156 21.6666H30.7112L39.484 44.8905H35.2731ZM34.9381 36.2773V39.4514H22.3053V36.2773H34.9381Z"
                    // fill="#64D0FF"
                    className="letter"
                />

                <path
                    d="M29 3L3 17.6667V47.6667L29 63L55 48.3333V18.3333L29 3Z"
                    stroke="#64D0FF"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="path"
                />
            </svg>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #061421;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;

    .letter {
        animation: reveal 2s linear normal 1;
        animation-delay: 3s;
    }

    .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 3s linear normal 1;
        animation-delay: 2s;
    }

    @keyframes dash {
        from {
            stroke-dashoffset: 1000;
        }
        to {
            stroke-dashoffset: 500;
        }
    }

    @keyframes reveal {
        0% {
            fill: transparent;
        }
        60% {
            fill: #64d0ff;
        }
        100% {
            fill: #64d0ff;
        }
    }
`;

export default Loader;
