import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import "./Skills.css";


function Skills() {

    const [skills, setSkills] = useState([]);


    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/skills/")
            .then((response) => {

                setSkills(response.data);

            })
            .catch((error) => {

                console.log(
                    "Skills API Error:",
                    error
                );

            });

    }, []);


    return (

        <section
            className="skills-section"
            id="skills"
        >

            <div className="skills-container">


                <motion.div
                    className="skills-heading"
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
                        SKILLS
                    </span>


                    <h2>

                        My{" "}

                        <span>
                            Skills
                        </span>

                    </h2>


                    <p>

                        Technologies and tools I use
                        to build modern web applications.

                    </p>

                </motion.div>


                <div className="skills-grid">


                    {skills.map((skill, index) => (

                        <motion.div
                            className="skill-card"
                            key={skill.id}
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
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                        >


                            <div className="skill-top">

                                <h3>
                                    {skill.name}
                                </h3>


                                <span>
                                    {skill.percentage}%
                                </span>

                            </div>


                            <div className="skill-bar">

                                <motion.div
                                    className="skill-progress"
                                    initial={{
                                        width: 0
                                    }}
                                    whileInView={{
                                        width: `${skill.percentage}%`
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2
                                    }}
                                />

                            </div>


                        </motion.div>

                    ))}


                </div>


            </div>

        </section>

    );

}


export default Skills;