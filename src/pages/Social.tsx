import React from "react";
import styled from "styled-components";
import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { toDesignRatio } from "../utilities";
import data from "../data";

const Social: React.FC = () => {
    function openMail() {
        window.open("mailto:" + data.email);
    }

    function openGithub() {
        window.open(data.github);
    }

    function openLinkedIn() {
        window.open(data.linkedIn);
    }

    function openInstagram() {
        window.open(data.instagram);
    }

    return (
        <>
            <Left className="social">
                <GitHub
                    className="link"
                    onClick={openGithub}
                    width={"calc(1.25rem*0.8)"}
                    height="calc(1.25rem*0.8)"
                />
                <Instagram
                    className="link"
                    onClick={openInstagram}
                    width={"calc(1.25rem*0.8)"}
                    height="calc(1.25rem*0.8)"
                />
                <LinkedIn
                    onClick={openLinkedIn}
                    width={"calc(1.25rem*0.8)"}
                    height="calc(1.25rem*0.8)"
                />

                <div className="line" />
            </Left>

            <Right className="social">
                <Email
                    className="link"
                    onClick={openMail}
                    width={toDesignRatio(21)}
                    height={toDesignRatio(190)}
                />

                <div className="line" />
            </Right>
        </>
    );
};

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    z-index: 1;
    bottom: ${toDesignRatio(40)};
    left: 1rem;

    svg {
        margin-bottom: ${toDesignRatio(20)};
    }

    .line {
        height: 10.313rem;
        width: 0px;

        border: ${toDesignRatio(1)} solid #ccd6f6;
    }

    .link {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        left: 6.5%;
    }
`;

const Right = styled(Left)`
    left: unset;
    right: 1rem;

    @media (min-width: 768px) {
        right: 6.5%;
    }
`;

export default Social;
