import React from "react";
import styled from "styled-components";
import { toDesignRatio } from "../utilities";

interface SectionProps {
    number?: string;
    title: string;
    noDivider?: boolean;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, number, noDivider, className }) => {
    return (
        <StyledDiv className={className}>
            {!!number && <span>{number}</span>}
            {title}
            {!noDivider && <div className="line" />}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    font-weight: 700;
    font-size: ${toDesignRatio(32)};
    line-height: ${toDesignRatio(48)};
    color: #ccd6f6;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${toDesignRatio(40)};
    text-align: center;
    span {
        color: #64d0ff;
        margin-right: 0.875rem;
    }

    @media (max-width: 480px) {
        font-size: ${toDesignRatio(24)};
    }

    .line {
        min-width: 30%;
        height: 0px;

        margin-left: ${toDesignRatio(19)};
        border: ${toDesignRatio(1)} solid #233554;

        @media (min-width: 992px) {
            max-width: 100%;
        }

        @media (max-width: 480px) {
            display: none;
        }
    }
`;
export default Section;
