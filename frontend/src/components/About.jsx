import {
    Code2,
    Server,
    Database,
    Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import axios from "axios";

import "./About.css";


const technologies = [

    {
        icon: Code2,
        title: "Frontend",
        description: "React & Modern Interfaces",
    },

    {
        icon: Server,
        title: "Backend",
        description: "Python & Django",
    },

    {
        icon: Database,
        title: "Database",
        description: "PostgreSQL & SQL",
    },

    {
        icon: Sparkles,
        title: "Development",
        description: "Clean & Scalable Code",
    },

];


function About() {

    const [profile, setProfile] = useState(null);


    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/profile/")
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
            className="about-section"
            id="about"
        >

            <div className="about-container">


                <motion.div
                    className="about-heading"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.7
                    }}
                >

                    <span className="section-label">
                        ABOUT ME
                    </span>


                    <h2>

                        Building ideas into

                        <span>
                            {" "}digital experiences.
                        </span>

                    </h2>

                </motion.div>



                <div className="about-content">


                    <motion.div
                        className="about-text"
                        initial={{
                            opacity: 0,
                            x: -40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >


                        <p className="about-intro">

                            I'm{" "}

                            {profile?.full_name || "Amir"}

                            {", a "}

                            {profile?.job_title ||
                                "Python & Django developer"}

                            {" focused on building modern, scalable and high-performance web applications."}

                        </p>


                        <p>

                            {profile?.bio ||
                                "I create full-stack solutions by combining powerful backend architectures with beautiful and responsive frontend experiences."}

                        </p>


                        <p>

                            My goal is writing clean code,

                            building useful products and continuously

                            improving my skills through real projects.

                        </p>



                        <div className="about-stats">


                            <div className="about-stat">

                                <strong>
                                    10+
                                </strong>

                                <span>
                                    Projects
                                </span>

                            </div>


                            <div className="about-stat">

                                <strong>
                                    5+
                                </strong>

                                <span>
                                    Technologies
                                </span>

                            </div>


                            <div className="about-stat">

                                <strong>
                                    100%
                                </strong>

                                <span>
                                    Dedication
                                </span>

                            </div>


                        </div>


                    </motion.div>



                    <motion.div
                        className="about-tech-grid"
                        initial={{
                            opacity: 0,
                            x: 40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15
                        }}
                    >


                        {

                            technologies.map((technology, index) => {

                                const Icon = technology.icon;


                                return (

                                    <motion.div
                                        className="about-tech-card"
                                        key={technology.title}
                                        whileHover={{
                                            y: -8
                                        }}
                                    >

                                        <div className="about-tech-icon">

                                            <Icon size={26} />

                                        </div>


                                        <div>

                                            <h3>
                                                {technology.title}
                                            </h3>


                                            <p>
                                                {technology.description}
                                            </p>

                                        </div>


                                        <span className="about-tech-number">

                                            0{index + 1}

                                        </span>

                                    </motion.div>

                                );

                            })

                        }


                    </motion.div>


                </div>


            </div>


        </section>

    );

}


export default About;