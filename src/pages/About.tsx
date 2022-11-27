import React, { Children } from "react";
import styled from "styled-components";
import { ReactComponent as CaretRight } from "../assets/caret-right.svg";
import ProfilePicture from "../assets/profilePicture.png";
import Center from "../components/Center";
import {
    FadeReveal, PopFromRightReveal
} from "../components/Reveal";
import Section from "../components/Section";
import data from "../data";
import { toDesignRatio } from "../utilities";

interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    return (
        <PopFromRightReveal className="skill row">
            <CaretRight />
            {name}
        </PopFromRightReveal>
    );
};

const About: React.FC = () => {
    return (
        <StyledDiv id="about">
            <FadeReveal>
                <Section number="01." title="About Me" />
                <div className="row">
                    <div className="content">
                        <FadeReveal>
                            Hello! My name is Benjamin and I enjoy creating things that live on the
                            internet. My interest in web development started back in 2012 when I
                            decided to try editing custom Tumblr themes — turns out hacking together
                            a custom reblog button taught me a lot about HTML & CSS!
                        </FadeReveal>
                        <div className="space" />
                        <FadeReveal>
                            Fast-forward to today, and I’ve had the privilege of working at an
                            advertising agency, a start-up, a huge corporation, and a student-led
                            design studio. My main focus these days is building accessible,
                            inclusive products and digital experiences at Upstatement for a variety
                            of clients.
                        </FadeReveal>{" "}
                        <div className="space" />
                        <FadeReveal>
                            I also recently launched a course that covers everything you need to
                            build a web app with the Spotify API using Node & React.
                        </FadeReveal>
                        <div className="space" />
                        <FadeReveal>
                            Here are a few technologies I’ve been working with recently:
                        </FadeReveal>
                    </div>
                    <img className="pp" src={ProfilePicture} alt="ProfilePicture" />
                </div>

                <div className="skills">
                    {Children.toArray(
                        Object.keys(data.skills).map((group) => (
                            <div className="skill-group">
                                {Children.toArray(
                                    data.skills[group as keyof typeof data.skills].map((skill) => (
                                        <Skill name={skill} />
                                    ))
                                )}
                            </div>
                        ))
                    )}
                </div>
            </FadeReveal>
        </StyledDiv>
    );
};

const StyledDiv = styled(Center)`
    color: #8892b0;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media (max-width: 912px) {
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    .pp {
        margin-left: ${toDesignRatio(157)};
        width: ${toDesignRatio(345)};
        height: 100%;
        @media (max-width: 912px) {
            order: 1;
            width: ${toDesignRatio(200)};
            margin-left: unset;
        }
    }

    .content {
        width: 60%;
        font-weight: 400;
        font-size: ${toDesignRatio(20)};
        line-height: ${toDesignRatio(30)};
        text-align: justify;
        @media (max-width: 912px) {
            order: 2;
            width: 100%;
            margin-top: 3rem;
        }
    }

    .space {
        height: 2rem;
    }

    .skills {
        margin-top: ${toDesignRatio(27)};
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .skill-group {
        margin-right: ${toDesignRatio(140)};
        @media (max-width: 912px) {
            margin-right: 1rem;
        }
    }

    .skill {
        align-items: center;
        font-weight: 400;
        font-size: ${toDesignRatio(13)};
        line-height: ${toDesignRatio(20)};
        margin-bottom: ${toDesignRatio(14)};
        justify-content: flex-start;

        @media (max-width: 912px) {
            flex-direction: row;
        }
    }
`;

export default About;
