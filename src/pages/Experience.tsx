import React, { Children, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CaretRight } from "../assets/caret-right.svg";
import { ShowMore } from "../components/Buttons";
import Center from "../components/Center";
import { FadeReveal } from "../components/Reveal";
import Section from "../components/Section";
import data from "../data";
import { toDesignRatio } from "../utilities";

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeExperience = data.experience[activeIndex];

    function next() {
        const newIndex = activeIndex + 1;
        setActiveIndex(newIndex <= data.experience.length - 1 ? newIndex : 0);
    }

    function prev() {
        const newIndex = activeIndex - 1;
        setActiveIndex(newIndex < 0 ? data.experience.length - 1 : newIndex);
    }

    return (
        <StyledDiv id="experience">
            <FadeReveal>
                <Section number="02." title="Professional Experience" />

                <div className="row">
                    <div className="indicator-column">
                        <div className="space" />
                        <div
                            className="line"
                            style={{
                                top: toDesignRatio(45 * activeIndex),
                            }}
                        ></div>
                    </div>

                    <div className="tabs">
                        {Children.toArray(
                            data.experience.map((workplace, index) => (
                                <FadeReveal
                                    className={`workplace ${index === activeIndex ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {workplace.name}
                                </FadeReveal>
                            ))
                        )}
                    </div>

                    <div className="content">
                        <div className="column">
                            <div className="column">
                                <div className="title">
                                    {activeExperience.role}{" "}
                                    <span className="role">@{activeExperience.name}</span>
                                </div>
                                <div className="period">{activeExperience.period}</div>
                            </div>
                            <div className="large desc">
                                {Children.toArray(
                                    activeExperience.responsibilities.map((item) => (
                                        <FadeReveal
                                            duration={0.5}
                                            className="item row"
                                            // key={item + activeIndex.toString()}
                                        >
                                            <div>
                                                <CaretRight
                                                    width={toDesignRatio(18)}
                                                    height={toDesignRatio(18)}
                                                />
                                            </div>
                                            <div className="content">{item}</div>
                                        </FadeReveal>
                                    ))
                                )}
                            </div>

                            <div className="mobile desc" style={{ marginTop: "1rem" }}>
                                <ShowMore onClick={prev} style={{ width: 70 }}>
                                    Previous
                                </ShowMore>

                                <ShowMore onClick={next} style={{ width: 70 }}>
                                    Next
                                </ShowMore>
                            </div>
                        </div>
                    </div>
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

        @media (max-width: 992px) {
            flex-direction: column;
        }
    }
    .column {
        display: flex;
        flex-direction: column;

        @media (max-width: 784px) {
            width: 100%;
        }
    }

    .indicator-column {
        margin-right: ${toDesignRatio(12)};
        position: relative;

        .space {
            border: 2px solid #233554;
            border-radius: 5px;
            height: ${toDesignRatio(45 * data.experience.length)};
            width: 0px;
        }

        .line {
            border: 2px solid #64d0ff;
            border-radius: 5px;
            height: ${toDesignRatio(42)};
            width: 0px;
            position: absolute;
        }

        @media (max-width: 992px) {
            display: none;
        }
    }

    .content {
        width: 100%;
    }

    .title {
        font-weight: 600;
        font-size: ${toDesignRatio(22)};
        line-height: ${toDesignRatio(33)};
        color: #ccd6f6;

        .role {
            color: #64d0ff;
        }
    }

    .period {
        font-weight: 500;
        font-size: ${toDesignRatio(13)};
        line-height: ${toDesignRatio(20)};
        color: #8892b0;
        margin-bottom: ${toDesignRatio(15)};
    }

    .tabs {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: ${toDesignRatio(13)};
        line-height: ${toDesignRatio(20)};
        color: #8892b0;
        margin-right: ${toDesignRatio(107)};

        @media (max-width: 992px) {
            display: none;
        }
    }

    .workplace {
        width: ${toDesignRatio(127)};
        height: ${toDesignRatio(20)};
        margin: ${toDesignRatio(12.5)} 0;
        cursor: pointer;

        @media (max-width: 992px) {
            margin: 0 ${toDesignRatio(12.5)};
        }
    }

    .active {
        color: #64d0ff;
    }

    .mobile.desc {
        display: none;
        @media (max-width: 992px) {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    .desc .item {
        margin-bottom: ${toDesignRatio(10)};
        color: #8892b0;

        .content {
            margin-left: ${toDesignRatio(9)};
            font-weight: 400;
            font-size: ${toDesignRatio(18)};
            line-height: ${toDesignRatio(27)};
        }

        .title {
            color: #64d0ff;
            margin-right: 0.4rem;
            font-weight: 400;
            font-weight: 400;
            font-size: ${toDesignRatio(18)};
            line-height: ${toDesignRatio(27)};
        }

        @media (max-width: 992px) {
            flex-direction: row !important;
            display: flex;
        }
    }
`;

export default Experience;
