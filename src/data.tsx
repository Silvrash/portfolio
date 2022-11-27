import PigeonUltra from "./assets/pigeonultra.png";
import Omniscio from "./assets/omniscio.png";
import PMT from "./assets/pmt.png";
import TJF from "./assets/tjf.png";

const data = {
    name: "Benjamin Arko Afrasah",
    role: "A full stack software engineer",
    email: "barkoafrasah@gmail.com",
    github: "https://github.com/Silvrash",
    linkedIn: "https://www.linkedin.com/in/benjamin-arko-afrasah-0452a0148/",
    instagram: "https://www.instagram.com/djinofcode",
    shortAbout: (
        <>
            High-level software engineer with innovative and well designed models in the software
            development arena. Committed to meeting project milestones in a timely fashion. Loves{" "}
            <span>architecting codebases</span> and <span>code optimizations</span>.
        </>
    ),
    resumeLink: "https://github.com/Silvrash/cv/raw/main/example/cv.pdf",
    skills: {
        g1: ["Typescript", "Python", "NodeJS", "ReactJS", "GraphQL"],
        g2: ["Javascript", "Flask", "Express", "React-Native", "MySQL"],
        g3: ["Flutter", "Go", "NextJS", "Electron", "PostgreSQL"],
    },
    experience: [
        {
            name: "Nyeova Systems",
            role: "Senior Software Engineer",
            period: "May 2020 - Present",
            responsibilities: [
                <div>
                    <span className="title">Lead Engineer in PigeonUltra Project:</span>
                    Modelled, designed and implemented an application for online food delivery
                    tracking and shop management built with React-Native, ReactJS and Electron with
                    over 200+ clients.
                </div>,

                <div>
                    <span className="title">API Optimization:</span>
                    Converted REST API to super optimised GraphQL APIs with an average response time
                    of 86ms for 27, 625 http requests by 50 virtual users all in span of 12min 30s
                </div>,
                <div>
                    <span className="title">Project Organization:</span>
                    Constructed a more efficient and easy-to-understand scalable code bases with a
                    40% increase in productivity.
                </div>,
                <div>
                    <span className="title">Mentor:</span>
                    Guided and supported 3 trainees in honing their skills.
                </div>,
                <div>
                    <span className="title">Cloud Management:</span>
                    Architected company's servers on Linode and Google Cloud making deployment
                    seamless with 0% human interaction.
                </div>,
                <div>
                    <span className="title">Effective Feed backs:</span>
                    Provided time-saving and effective insights and feedback on company’s workflows,
                    projects and models, achieving a 56% reduction in preparation of the software.
                </div>,
            ],
        },
        {
            name: "JLS Trading Co.",
            role: "Senior Software Engineer",
            period: "November 2020 - Present",
            responsibilities: [
                <div>
                    <span className="title">DevOps:</span>
                    Setup company's DevOps and cloud based systems making deployment seamless with
                    0% human interaction.
                </div>,
                <div>
                    <span className="title">Amazon Ads Integration:</span>
                    Bulk data processing of amazon campaigns and bidding algorithm to provide an
                    effective cost analysis of how well campaigns are faring. Optimize databases to
                    scale and handle processing of more than a million records per organization.
                </div>,
                <div>
                    <span className="title">Inventory Management System:</span>
                    Bulk data processing of amazon campaigns and bidding algorithm to provide an
                    effective cost analysis of how well campaigns are faring. Optimize databases to
                    scale and handle processing of more than a million records per organization.
                </div>,
                <div>
                    <span className="title">Cost Optimization on Google Cloud:</span>
                    Came up with cost efficient workflow algorithms which saved us 96.67% of the
                    cost on Google cloud.
                </div>,
            ],
        },

        {
            name: "Asqii LLC.",
            period: "June 2018 – October 2020",
            role: "Back-end Developer",
            responsibilities: [
                <div>
                    <span className="title">School Management Platform:</span>
                    Conducted workload assessments and devised new operational processes that led to
                    a 40% increase in productivity in the development and maintenance of SchoolDesk,
                    a school management platform.
                </div>,
                <div>
                    <span className="title">Examination Room Assignment Project:</span>
                    Implemented an examination room assignment system for KNUST with over more than
                    40,000 students.
                </div>,
            ],
        },
        {
            name: "KNUST",
            period: "September 2019 - September 2020",
            role: "Teaching Assistant",
            responsibilities: [
                "Assisted lecturers in the following courses ; C programming, Classical Control Systems, Software Engineering 1 and 2, Basic Electronics.",
                "Marking quizzes, lab reports, assignments and preparing continuous assessment for students.",
                "Organized tutorial sessions to help students have a deeper understanding of the course.",
            ],
        },
        {
            name: "MITWORKS",
            period: "March 2019 - December 2019",
            role: "Freelance Full-stack Developer",
            responsibilities: [
                "Implemented a full-stack mobile application, Votebook ; A voting based mobile application.",
            ],
        },
        {
            name: "Remotech LLC",
            period: "December 2019 - January 2020",
            role: "Freelance Full-stack Developer",
            responsibilities: [
                "Developed a full-stack mobile application, Automote ; An IoT based mobile application for controlling the lightening system of homes, offices and street lights.",
            ],
        },
        {
            name: "Millennium Promise",
            period: "January 2019 - August 2019",
            role: "Full-stack Developer",
            responsibilities: [
                "Implemented the back-end service for a software called RDLS which helped midwives to contact labora- tories and send samples to request a lab test.",
                "Developed the mobile app for cRDLS.",
            ],
        },
    ],
    projects: {
        featured: [
            {
                title: "PigeonUltra",
                desc: "PigeonUltra is a mobile and online product that delivers quality e-commerce essentials from restaurants, groceries, bakeries, marketplace shops, and pet-care services in Ghana, West Africa.",
                link: "https://pigeonultra.com",
                image: PigeonUltra,
                skills: ["ReactJS", "React-Native", "Typescript", "Express", "GraphQL", "Docker"],
            },
            {
                title: "Omniscio",
                desc: "An all-in-one SaaS product for Amazon Sellers that lets them operate their business as pain-free as possible with inventory management and seeing how products are performing. Having a platform with all the relevant data in one spot makes Product management 10x faster.",
                link: "https://omniscio.com",
                image: Omniscio,
                skills: ["ReactJS", "Typescript", "Express", "REST", "GCP"],
            },
            {
                title: "PPC Management Tool",
                desc: "Manages your amazon campaigns with a foolproof process that consistently generates big monthly profits.",
                image: PMT,
                link: "https://ppcfarm.com",
                skills: ["ReactJS", "Typescript", "Express", "GraphQL", "Docker"],
            },
        ],
        others: [
            {
                title: "SchoolDesk",
                desc: "A decentralized state-of-the-art cloud-based school management system with an offline-online architecture specifically designed for elite schools. SchoolDesk is not just a single school management application but a suite of applications that can be used for managing a school.",
                skills: [
                    "Typescript",
                    "Javascript",
                    "React-Native",
                    "NodeJS",
                    "ReactJS",
                    "Python",
                    "Flask",
                ],
                link: "https://schooldesk.cc",
            },
            {
                title: "iDoc",
                desc: "This project is to help clients to easily access and communicate with their doctors without the need of always going to the hospital. Project currently has 150+ clients and 10 doctors.",
                skills: ["Typescript", "Javascript", "React-Native", "NodeJS", "ReactJS"],
                link: "https://play.google.com/store/apps/details?id=com.arkdevs.jaatech.idoc",
            },
            {
                title: "Project Aquanaut",
                desc: "A Data Analytics Platform and sensor node for leakage detection and management in water distribution networks.",
                skills: ["Typescript", "Javascript", "NodeJS", "ReactJS", "Python", "Flask"],
                link: "https://aquanaut.netlify.com/",
            },
            {
                title: "Project BlackBook",
                desc: "A contractor-based contact application for finding the right contractors for the right job.",
                skills: ["Dart", "Flutter", "Python", "Flask"],
                link: "https://play.google.com/store/apps/details?id=com.nyeova.projectaid.blackbook",
            },
            {
                title: "Automote",
                desc: "An IoT based mobile application for controlling the lightening system of homes, offices and street lights effortlessly.",
                skills: ["Typescript", "Javascript", "NodeJS", "ReactJS"],
                link: "https://play.google.com/store/apps/details?id=com.remotech.automote",
            },
            {
                title: "Egg Collector",
                desc: "A computer vision-based project for egg detection and determining if an egg is viable or not, grouping the eggs into those which are good and the spoilt ones.",
                skills: ["Python", "OpenCV", "Arduino"],
                link: "https://gitlab.com/benjin/egg-collector",
            },
            {
                title: "Votebook",
                desc: "A generic voting based mobile application.",
                skills: ["Typescript", "Javascript", "NodeJS", "ReactJS"],
                link: "https://play.google.com/store/apps/details?id=com.mitworks.votebook",
            },

            {
                title: "Erranda",
                desc: "This project presents a system that allows users post errands they want to be run so errand guys can bid and run the errands for a fee.",
                skills: [
                    "Typescript",
                    "Javascript",
                    "NodeJS",
                    "ReactJS",
                    "React-Native",
                    "Python",
                    "Flask",
                ],
                link: "https://gitlab.com/ACESIV/back-end/errand-boy-main-backend",
            },
            {
                title: "CodeForMe",
                desc: "This project used AI to convert speech to python code. (Natural language to code platform using semantic parsing and artificial neural networks).",
                skills: ["Typescript", "Javascript", "ReactJS", "Python", "Tensorflow", "Flask"],
                link: "https://codeforme.herokuapp.com/",
            },
            {
                title: "BookIT",
                desc: "This project helps students to book buses to convey them to their destinations during school breaks and vacations.",
                skills: ["Java Android", "Python", "Flask"],
                link: "https://gitlab.com/facta01/BookIT",
            },
        ],
    },
    involvements: [
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
        {
            name: "John H. Doe",
            email: "someone@gmail.com",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pharetra bibendum lorem amet felis quisque ornare urna et. Nunc, fermentum aliquam ut aliquam varius eu nec duis. Auctor erat tristique turpis libero cursus pellentesque habitasse. Morbi id a molestie eros in et. Erat duis neque commodo, gravida commodo. Sed tincidunt ut tempor sit semper donec eget semper.",
        },
    ],
    news: [
        {
            title: "PigeonUltra Participates in TJF '22",
            desc: "The event seeked to expose young Ghanaians to some emerging technologies in the tech industry saw in attendance about 2000 participants including development partners and stakeholders, ICT professionals, students, graduates and job seekers.",
            link: "https://justicaanima.com/pigeonultra-participates-in-tjf-22-to-bridge-unemployment-gap-in-the-country/",
            image: TJF,
        },
    ],
    contact: {
        txt: (
            <>
                <div>What are you waiting for? </div>
                <div>Hit me up. I promise I'm not a scary person.</div>
                <div>Just your everyday friendly developer.</div>
            </>
        ),
    },
};

export default data;
