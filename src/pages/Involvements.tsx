import React, { Children, useEffect } from "react";
import styled from "styled-components";
import Center from "../components/Center";
import Section from "../components/Section";
import InvolvementPic from "../assets/involvement1.png";
import { toDesignRatio } from "../utilities";
import { ShowMore } from "../components/Buttons";
import data from "../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import  {AppearReveal, FadeReveal } from "../components/Reveal";

interface InvolvementProps {
    name: string;
    email: string;
    desc: string;
}

const Involvement: React.FC<InvolvementProps> = ({ name, email, desc }) => {
    return (
        <AppearReveal className="card">
            <div className="row">
                <img className="inv-pic" src={InvolvementPic} alt="inv-pic" />
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="email">{email}</div>
                </div>
            </div>
            <div className="text">{desc}</div>
        </AppearReveal>
    );
};

const Involvements: React.FC = () => {
    return (
        <StyledDiv id="involvements">
            <FadeReveal>
                <div>
                    <Section number="04." title="Involvements" />
                    <div className="group">
                        {Children.toArray(
                            data.involvements.slice(0, 6).map((item) => <Involvement {...item} />)
                        )}
                    </div>
                </div>
                <AppearReveal>
                    <ShowMore>Show More</ShowMore>
                </AppearReveal>
            </FadeReveal>
        </StyledDiv>
    );
};

const StyledDiv = styled(Center)`
    // min-height: calc(100vh - 4.25rem);
    color: #8892b0;

    .center-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .inv-pic {
        height: ${toDesignRatio(53.2)};
        width: ${toDesignRatio(53.2)};
        border-radius: 72px;
    }

    .info {
        margin-left: ${toDesignRatio(15.67)};
        margin-bottom: ${toDesignRatio(25.9)};
    }

    .name {
        font-weight: 700;
        font-size: ${toDesignRatio(18)};
        line-height: ${toDesignRatio(27)};
        margin-bottom: ${toDesignRatio(7.01)};

        color: #ccd6f6;
    }

    .email {
        font-weight: 400;
        font-size: ${toDesignRatio(14)};
        line-height: ${toDesignRatio(21)};

        color: #ccd6f6;
    }

    .text {
        font-weight: 400;
        font-size: ${toDesignRatio(14)};
        line-height: ${toDesignRatio(21)};

        color: #ccd6f6;
    }

    .card {
        background: #112240;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        width: 40%;
        padding: ${toDesignRatio(48)} ${toDesignRatio(28)};
        margin-bottom: ${toDesignRatio(36)};

        @media (max-width: 1100px) {
            width: 100%;
        }
    }
`;

export default Involvements;
