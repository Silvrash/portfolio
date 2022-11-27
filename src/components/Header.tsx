import React from "react";
import styled from "styled-components";
import { FadeReveal } from "./Reveal";

interface MenuItemProps {
    title: string;
    number: string;
    link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, number, link }) => {
    return (
        <FadeReveal className="menuItem">
            <a href={link}>
                <span>{number}. </span> {title}
            </a>
        </FadeReveal>
    );
};

const Header: React.FC = () => {
    return (
        <StyledDiv className="menu">
            <MenuItem number={"01"} link="#about" title="About" />
            <MenuItem number={"02"} link="#experience" title="Experience" />
            <MenuItem number={"03"} link="#projects" title="Projects" />
            <MenuItem number={"04"} link="#involvements" title="Involvements" />
            <MenuItem number={"05"} link="#news" title="News" />
            <MenuItem number={"06"} link="#contact" title="Contact" />
        </StyledDiv>
    );
};

export default Header;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;

    .menuItem {
        margin-right: calc(1rem * 0.8);
    }

    .menuItem a {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: #ffffff;
        font-size: calc(1rem * 0.8);
        line-height: calc(1.5rem * 0.8);
        font-weight: 500;
    }

    .menuItem span {
        color: #64d0ff;
        margin-right: 0.2rem;
    }

    @media (max-width: 768px) {
        /* smartphones, Android phones, landscape iPhone */
        flex-direction: column;
        width: 80%;
        .menuItem {
            border-bottom: 1px solid #08223c;
            padding: 1rem 0;
        }
    }
`;
