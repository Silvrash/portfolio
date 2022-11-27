import React, { Children, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FolderIcon } from "../assets/folder.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";
import { ShowMore } from "../components/Buttons";
import Center from "../components/Center";
import {
    AppearReveal,
    FadeReveal,
    PopFromLeftReveal,
    PopFromRightReveal,
} from "../components/Reveal";
import Section from "../components/Section";
import data from "../data";
import useMediaQuery from "../hooks/useMediaQuery";
import { toDesignRatio } from "../utilities";

interface ProjectProps {
    title: string;
    desc: string;
    skills: string[];
    image: string;
    link: string;
    rtl?: boolean;
}

const Project: React.FC<ProjectProps> = ({ title, desc, skills, link, image, rtl }) => {
    const isMobile = useMediaQuery("(max-width: 912px) ");
    let Reveal = !rtl ? PopFromRightReveal : PopFromLeftReveal;

    if (isMobile)
        return (
            <div className={`project row ${rtl ? "rtl" : "ltr"}`}>
                <AppearReveal>
                    <img src={image} alt="pigeonUltra" className="p-img" />
                </AppearReveal>
                <div className="column">
                    <AppearReveal>
                        <div className="label">Featured Project</div>
                    </AppearReveal>
                    <AppearReveal>
                        <div className="name">{title}</div>
                    </AppearReveal>
                    <AppearReveal>
                        <div className="card">{desc}</div>
                    </AppearReveal>
                    <div className="skills row">
                        {Children.toArray(
                            skills.map((skill) => (
                                <AppearReveal className="skill">{skill}</AppearReveal>
                            ))
                        )}
                    </div>
                    <FadeReveal>
                        <a href={link} className="link">
                            <LinkIcon
                                color="#64D0FF"
                                width={toDesignRatio(18)}
                                height={toDesignRatio(18)}
                            />
                        </a>
                    </FadeReveal>
                </div>
            </div>
        );

    return (
        <Reveal className={`project row ${rtl ? "rtl" : "ltr"}`}>
            <img src={image} alt="pigeonUltra" className="p-img" />
            <div className="column">
                <div className="label">Featured Project</div>
                <div className="name">{title}</div>
                <div className="card">{desc}</div>
                <div className="skills row">
                    {Children.toArray(skills.map((skill) => <div className="skill">{skill}</div>))}
                </div>
                <a href={link} className="link">
                    <LinkIcon
                        color="#CCD6F6"
                        width={toDesignRatio(18)}
                        height={toDesignRatio(18)}
                    />
                </a>
            </div>
        </Reveal>
    );
};

interface NoteworthyProjectProps {
    title: string;
    desc: string;
    skills: string[];
    link: string;
}

const NoteworthyProject: React.FC<NoteworthyProjectProps> = ({ title, desc, skills, link }) => {
    function openInNewTab() {
        window?.open(link, "_blank")?.focus();
    }

    return (
        <AppearReveal className={`card`} onClick={openInNewTab}>
            <div className="row">
                <FolderIcon width={toDesignRatio(40)} height={toDesignRatio(40)} />
                <div className="title">
                    {title}
                    <a href={link} className="link">
                        <LinkIcon
                            color="#64D0FF"
                            width={toDesignRatio(10)}
                            height={toDesignRatio(10)}
                        />
                    </a>
                </div>
            </div>
            <div className="desc">{desc}</div>
            <div className="skills row">
                {Children.toArray(skills.map((skill) => <div className="skill">{skill}</div>))}
            </div>
        </AppearReveal>
    );
};

const Projects: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <StyledDiv id="projects">
            <FadeReveal onAnimationComplete={() => setShowMore(false)}>
                <Section number="03." title="Projects I've built" />
                <div className="featured">
                    {Children.toArray(
                        data.projects.featured.map((project, i) => (
                            <Project
                                title={project.title}
                                desc={project.desc}
                                skills={project.skills}
                                link={project.link}
                                image={project.image}
                                rtl={i % 2 !== 0}
                            />
                        ))
                    )}
                </div>

                <div className="other-projects">
                    <div className="sect">
                        <Section title="Other Noteworthy  Projects" noDivider />
                        <div className="caption">view the archive</div>
                    </div>

                    <div className="noteworthy-projects">
                        {Children.toArray(
                            data.projects.others
                                .slice(0, !showMore ? 6 : data.projects.others.length)
                                .map((project) => (
                                    <NoteworthyProject
                                        title={project.title}
                                        desc={project.desc}
                                        skills={project.skills}
                                        link={project.link}
                                    />
                                ))
                        )}
                    </div>
                    <AppearReveal>
                        <ShowMore onClick={() => setShowMore(!showMore)}>
                            {!showMore ? "Show More" : "Show Less"}
                        </ShowMore>
                    </AppearReveal>
                </div>
            </FadeReveal>
        </StyledDiv>
    );
};

const StyledDiv = styled(Center)`
    color: #8892b0;
    justify-content: flex-start;

    .featured {
        margin-bottom: ${toDesignRatio(214)};
    }

    .project {
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

    .skills.row {
        justify-content: flex-start;
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

    .sect {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: ${toDesignRatio(82)};
    }
    .caption {
        font-weight: 400;
        font-size: ${toDesignRatio(14)};
        line-height: ${toDesignRatio(21)};
        color: #64d0ff;
        margin-top: ${toDesignRatio(-40)};
    }

    .other-projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: ${toDesignRatio(217)};

        .card {
            min-height: ${toDesignRatio(250)};
            width: ${toDesignRatio(323.32)};
            background: #112240;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
            border-radius: 14px;
            padding: ${toDesignRatio(32)};

            @media (max-width: 912px) {
                width: 100%;
                min-height: unset;
            }
        }

        .card .row {
            justify-content: flex-start;
        }

        .title {
            font-weight: 700;
            font-size: ${toDesignRatio(22)};
            line-height: ${toDesignRatio(33)};
            margin-top: ${toDesignRatio(21)};
            margin-bottom: ${toDesignRatio(19)};
            color: #ccd6f6;
            margin-left: 1rem;
        }

        .desc {
            font-weight: 400;
            font-size: ${toDesignRatio(14)};
            line-height: ${toDesignRatio(21)};
            color: #ccd6f6;
        }

        .noteworthy-projects {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: ${toDesignRatio(75.11)};

            .card {
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }

            .skills {
                justify-content: flex-start !important;
                flex-wrap: wrap !important;
                margin-top: auto;
            }
            .skill {
                margin-top: 0.5rem;
                background-color: #334c64;
                padding: 0 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
            }
            .title{
                position: relative;
            }
            .link {
                align-self: flex-start;
                margin-left: 0.5rem;
                position: absolute;
                top: -70%;
            
            }
        }
    }
`;

export default Projects;
