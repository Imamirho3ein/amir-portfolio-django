import { ArrowDown, Mail, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../api";
import "./Hero.css";

function Hero() {

    const [profile, setProfile] = useState(null);


    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/api/profile/`)
            .then((response) => {
                if (response.data.length > 0) {
                    setProfile(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(
                    "Profile API Error:",
                    error
                );
            });
    }, []);

    return (

        <section
            className="hero"
            id="home"
        >

            <div className="hero-background">

                <div className="hero-glow hero-glow-one"></div>

                <div className="hero-glow hero-glow-two"></div>

                <div className="hero-grid"></div>

            </div>


            <div className="hero-container">


                <motion.div
                    className="hero-content"
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                >


                    <span className="hero-badge">

                        <span className="hero-badge-dot"></span>

                        Available for freelance

                    </span>


                    <h1>

                        Hi, I'm{" "}

                        <span className="hero-name">

                            {profile?.full_name || "Amir"}

                        </span>

                    </h1>


                    <h2>

                        {profile?.job_title || "Python Django Developer"}

                    </h2>


                    <p className="hero-description">

                        {profile?.bio ||
                            "I create modern, scalable and high-performance web applications."}

                    </p>


                    <div className="hero-buttons">


                        <a
                            href="#projects"
                            className="hero-primary-button"
                        >

                            View My Work

                            <ArrowDown size={18} />

                        </a>


                        <a
                            href="#contact"
                            className="hero-secondary-button"
                        >

                            <Mail size={18} />

                            Contact Me

                        </a>


                    </div>


                    <div className="hero-socials">


                        <a
                            href="https://github.com/Imamirho3ein"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <Code2 size={20} />

                        </a>


                    </div>


                </motion.div>


                <motion.div
                    className="hero-visual"
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}
                >


                    <div className="hero-card">


                        <div className="hero-card-top">

                            <span></span>

                            <span></span>

                            <span></span>

                        </div>


                        <div className="hero-code">


                            <p>

                                <span className="code-purple">
                                    class
                                </span>{" "}

                                <span className="code-blue">
                                    Developer
                                </span>:

                            </p>


                            <p className="code-indent">

                                <span className="code-purple">
                                    def
                                </span>{" "}

                                <span className="code-yellow">
                                    create
                                </span>():

                            </p>


                            <p className="code-indent-two">

                                <span className="code-green">
                                    return
                                </span>{" "}

                                <span className="code-string">
                                    "Great Projects"
                                </span>

                            </p>


                        </div>


                    </div>


                    <div className="hero-floating-card hero-floating-one">

                        Python

                    </div>


                    <div className="hero-floating-card hero-floating-two">

                        Django

                    </div>


                </motion.div>


            </div>


            <a
                href="#about"
                className="hero-scroll"
            >

                <span>
                    Scroll down
                </span>

                <ArrowDown size={16} />

            </a>


        </section>

    );

}


export default Hero;