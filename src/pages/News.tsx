import React, { Children } from "react";
import styled from "styled-components";
import { ReactComponent as LinkIcon } from "../assets/link.svg";
import Center from "../components/Center";
import { AppearReveal, FadeReveal } from "../components/Reveal";
import Section from "../components/Section";
import data from "../data";
import { toDesignRatio } from "../utilities";

interface NewsItemProps {
    title: string;
    desc: string;
    image: string;
    link: string;
    rtl?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, desc, link, image, rtl }) => {
    return (
        <AppearReveal className={`newsItem row ${rtl ? "rtl" : "ltr"}`}>
            <img src={image} alt="pigeonUltra" className="p-img" />
            <div className="column">
                <div className="label">Featured</div>
                <div className="name">{title}</div>
                <div className="card">{desc}</div>
                <a href={link} className="link">
                    <LinkIcon
                        color="#64D0FF"
                        width={toDesignRatio(18)}
                        height={toDesignRatio(18)}
                    />
                </a>
            </div>
        </AppearReveal>
    );
};

const News: React.FC = () => {
    return (
        <StyledDiv id="news">
            <FadeReveal>
                <Section number="05." title="News" />

                {Children.toArray(data.news.slice(0, 6).map((item) => <NewsItem {...item} />))}
            </FadeReveal>
        </StyledDiv>
    );
};

const StyledDiv = styled(Center)`
    color: #8892b0;

    .newsItem {
        margin-bottom: ${toDesignRatio(111)};

        @media (max-width: 912px) {
            flex-direction: column !important;
        }
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
        right: 5%;

        @media (max-width: 912px) {
            position: unset;
            right: unset;
            margin-top: 1rem;
        }
    }

    .rtl .column {
        align-items: flex-start;
        right: unset;
    }

    .p-img {
        width: 50%;
        height: ${toDesignRatio(418)};
        border-radius: 5px;
        object-fit: contain;

        @media (max-width: 912px) {
            width: 100%;
            height: 100%;
        }
    }

    .rtl .p-img {
        order: 2;
        position: relative;
        left: -5%;

        @media (max-width: 912px) {
            order: 1 !important;
            left: unset;
        }
    }

    .rtl .column {
        @media (max-width: 912px) {
            order: 2 !important;
            left: unset;
        }
    }

    .label {
        font-weight: 400;
        font-size: ${toDesignRatio(13)};
        line-height: ${toDesignRatio(20)};
        color: #64d0ff;
        margin-bottom: ${toDesignRatio(5)};
        align-self: right;
    }

    .name {
        font-weight: 700;
        font-size: ${toDesignRatio(22)};
        line-height: ${toDesignRatio(33)};
        color: #ccd6f6;
        margin-bottom: ${toDesignRatio(37)};
        align-self: right;
    }

    .card {
        width: 100%;
        min-height: ${toDesignRatio(140)};
        background: #112240;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        padding: ${toDesignRatio(25)};
        margin-bottom: ${toDesignRatio(25)};
        margin-right: ${toDesignRatio(-8)};

        font-weight: 400;
        font-size: ${toDesignRatio(18)};
        line-height: ${toDesignRatio(27)};
        color: #ccd6f6;

        @media (max-width: 912px) {
            width: calc(100% - 2rem);
            align-self: center;
            margin-right: 0.5rem;
        }
    }

    .rtl .card {
        margin-left: ${toDesignRatio(-8)};
        margin-right: 0;
    }

    .skills {
        @media (max-width: 912px) {
            flex-wrap: wrap;
            align-self: flex-start;
        }
    }

    .skill {
        font-weight: 400;
        font-size: ${toDesignRatio(13)};
        line-height: ${toDesignRatio(20)};
        color: #ccd6f6;
        margin-right: ${toDesignRatio(16)};
    }

    .skill:last-child {
        margin-right: 0;
    }

    .link {
        margin-top: ${toDesignRatio(12)};
        @media (max-width: 912px) {
            align-self: flex-start;
        }
    }
`;

export default News;
