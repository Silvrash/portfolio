import styled from "styled-components";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Involvements from "./pages/Involvements";
import Landing from "./pages/Landing";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import { toDesignRatio } from "./utilities";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Hamburger } from "./assets/hamburger.svg";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import { FadeReveal } from "./components/Reveal";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
    const [loading, setLoading] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        window.onscroll = function () {
            myFunction();
        };

        var header = document.getElementById("header")!;
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }, []);

    return (
        <Root>
            {loading && <Loader />}
            <div className="header" id="header">
                <div className="row">
                    <Logo width={"calc(3.25rem*0.8)"} height="calc(3.75rem*0.8)" />
                    <Hamburger className="hamburger" onClick={() => setShowMenu(!showMenu)} />
                </div>
                {isMobile && showMenu && <Header />}
                {!isMobile && <Header />}
            </div>
            <div
                className="root-content"
                style={{ height: loading ? "0px" : "100%", overflowY: loading ? "hidden" : "auto" }}
            >
                <Social />
                <Landing />
                <About />
                <Experience />
                <Projects />
                {/* <Involvements /> */}
                <News />
                <Contact />
                <FadeReveal className="footer">Built By Benjamin Arko Afrasah</FadeReveal>
            </div>
        </Root>
    );
}

const Root = styled.div`
    width: 100%;
    width: calc(100% - 3.125rem * 2);
    padding: 2.125rem 3.125rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    position: relative;

    .root-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
    }

    @media (min-width: 2249px) {
        .root-content {
            padding: 0 16%;
        }
    }

    /* The sticky class is added to the header with JS when it reaches its scroll position */
    .sticky {
        position: fixed;
        top: 0;
        padding: 0.5rem 3.125rem 0.5rem;
        left: 0;
        right: 0;
        z-index: 11;
        background: #061422;
        -webkit-box-shadow: 0 0 10px rgb(0, 0, 0);
        -moz-box-shadow: 0 0 10px rgb(0, 0, 0);

        @media (max-width: 768px) {
            padding: 0.5rem 2.125rem 0.5rem;
        }
    }

    .hamburger {
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }

    /* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
    .sticky + .root-content {
        padding-top: 102px;
    }

    .header {
        height: auto;
        width: 93%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        transition: height 0.5s ease;

        .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 83%;
        }

        @media (max-width: 768px) {
            width: 92.5%;
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
        }
    }

    .footer {
        text-align: center;
        width: 100%;
        font-weight: 400;
        font-size: ${toDesignRatio(14)};
        line-height: ${toDesignRatio(21)};
        color: #869dbf;
        padding-bottom: ${toDesignRatio(35)};
    }

    @media (max-width: 480px) {
        /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    }
`;

export default App;
