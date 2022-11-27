import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FadeReveal } from "../components/Reveal";
import { ShowMore } from "../components/Buttons";

import Header from "../components/Header";
import data from "../data";
import { toDesignRatio } from "../utilities";

const Landing: React.FC = () => {
    return (
        <StyledDiv>
            <FadeReveal>
                <div className="column">
                    <div className="intro">Hi There, my name is</div>
                    <div className="name">{data.name}.</div>
                    <div className="job">{data.role}.</div>
                    <div className="desc">{data.shortAbout}.</div>
                    <ShowMore href={data.resumeLink} className="resume">
                        Resume
                    </ShowMore>
                </div>
            </FadeReveal>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    min-height: calc(100vh - 4.25rem);

    .column {
        display: flex;
        flex-direction: column;
        margin: calc(7.438rem * 0.8) calc(9.438rem * 0.8);

        @media (max-width: 768px) {
            /* smartphones, iPhone, portrait 480x320 phones */
            margin: 1.125rem;
        }
    }

    .intro {
        font-size: calc(1.125rem * 0.8);
        line-height: calc(1.688rem * 0.8);
        color: #64d0ff;
        margin-bottom: ${toDesignRatio(30)};

        @media (max-width: 768px) {
            margin-top: 1rem;
        }
    }

    .name {
        font-weight: 700;
        font-size: calc(5rem * 0.8);
        line-height: calc(7.5rem * 0.8);
        color: #ccd6f6;
        margin-bottom: ${toDesignRatio(10)};

        @media (max-width: 1048px) {
            font-size: 3rem;
            line-height: unset;
        }

        @media (max-height: 668px) {
            font-size: 2rem !important;
        }

        @media (min-height: 1274px) {
            font-size: 9rem !important;
            line-height: calc(15.5rem * 0.8);
        }
    }

    .job {
        font-weight: 700;
        font-size: calc(4.5rem * 0.8);
        line-height: calc(6.75rem * 0.8);
        color: #8892b0;
        margin-bottom: ${toDesignRatio(20)};

        @media (max-width: 1048px) {
            font-size: 1.5rem;
            line-height: unset;
            margin-top: 4%;
        }

        @media (max-height: 668px) {
            font-size: 1rem !important;
        }
    }

    .desc {
        width: calc(44.063rem * 0.8);
        height: calc(6.188rem * 0.8);
        font-weight: 600;
        font-size: calc(1.25rem * 0.8);
        line-height: calc(1.875rem * 0.8);
        color: #8892b0;
        margin-bottom: calc(3.125rem * 0.8);

        @media (max-width: 1048px) {
            width: unset;
            height: unset;
            margin-top: 7%;
            font-size: 0.775rem;
        }

        @media (min-height: 1274px) {
            font-size: 1.2rem !important;
            line-height: 3rem;
            height: unset;
            width: 50%;
        }
    }

    .desc span {
        color: #64d0ff;
    }

    .resume {
        width: calc(14.435rem * 0.8);
        height: calc(3.498rem * 0.8);
        border: 1px solid rgba(100, 208, 255, 1);
        background: transparent;
        font-size: calc(0.875rem * 0.8);
        line-height: calc(1.313rem * 0.8);
        color: #64d0ff;
        margin-top: 0;
        border-radius: 5px;
        margin: unset;

        @media (max-width: 768px) {
            /* smartphones, iPhone, portrait 480x320 phones */
            align-self: center;
        }
    }
`;

export default Landing;
