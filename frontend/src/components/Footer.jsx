import { Mail, ArrowUp } from "lucide-react";

import "./Footer.css";


function Footer() {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            Amir<span>.</span>
                        </a>

                        <p>
                            Python & Django Developer
                        </p>

                        <span>
                            Building modern and scalable web applications.
                        </span>

                    </div>


                    <div className="footer-links">

                        <a href="#home">
                            Home
                        </a>

                        <a href="#about">
                            About
                        </a>

                        <a href="#skills">
                            Skills
                        </a>

                        <a href="#projects">
                            Projects
                        </a>

                        <a href="#experience">
                            Experience
                        </a>

                        <a href="#education">
                            Education
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                    </div>


                    <div className="footer-socials">

                        <a
                            href="mailto:amirhosseinjadidiy@gmail.com"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>

                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Amir.
                        All rights reserved.
                    </p>


                    <button
                        type="button"
                        className="footer-top-button"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <ArrowUp size={18} />
                    </button>

                </div>

            </div>

        </footer>

    );

}


export default Footer;