import React from "react";
import styled from "styled-components";
import { AppearReveal, FadeReveal } from "../components/Reveal";
import { ShowMore } from "../components/Buttons";
import Center from "../components/Center";
import Section from "../components/Section";
import data from "../data";
import { toDesignRatio } from "../utilities";

const Contact: React.FC = () => {
    function openMail() {
        window.open("mailto:" + data.email, "_blank");
    }
    return (
        <StyledDiv id="contact">
            <div className="center-content">
                <FadeReveal>
                    <Section number="06." title="Contact" noDivider />
                </FadeReveal>

                <FadeReveal>
                    <div className="getInTouch">Get In Touch</div>
                </FadeReveal>
                <FadeReveal>
                    <div className="caption">{data.contact.txt}</div>
                </FadeReveal>

                <AppearReveal>
                    <ShowMore className="hello" onClick={openMail}>
                        Say Hello
                    </ShowMore>
                </AppearReveal>
            </div>
        </StyledDiv>
    );
};

const StyledDiv = styled(Center)`
    color: #8892b0;

    .center-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .getInTouch {
        font-weight: 700;
        font-size: ${toDesignRatio(60)};
        line-height: ${toDesignRatio(90)};
        color: #64d0ff;
        margin-top: ${toDesignRatio(82)};
        margin-bottom: ${toDesignRatio(82)};
        text-align: center;
    }

    .caption {
        width: ${toDesignRatio(662)};
        font-weight: 600;
        font-size: ${toDesignRatio(22)};
        line-height: ${toDesignRatio(33)};
        text-align: center;
        color: #869dbf;

        @media (max-width: 768px) {
            width: 100%;
        }

        div {
            margin-top: 0.5rem;
        }
    }

    .hello {
        width: calc(14.435rem * 0.8);
        height: calc(3.498rem * 0.8);
        border: 1px solid rgba(100, 208, 255, 1);
        background: transparent;
        font-size: calc(0.875rem * 0.8);
        line-height: calc(1.313rem * 0.8);
        color: #64d0ff;
        border-radius: 5px;
        margin-top: ${toDesignRatio(37)};
    }
`;

export default Contact;
