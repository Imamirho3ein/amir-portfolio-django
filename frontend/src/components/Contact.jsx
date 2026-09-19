import {
    Mail,
    MapPin,
    Send,
    Code2,
    Users,
} from "lucide-react";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import axios from "axios";

import "./Contact.css";


function Contact() {

    const [profile, setProfile] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");


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


    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        setStatus("Sending...");


        try {

            await axios.post(
                "http://127.0.0.1:8000/contact/api/",
                formData
            );


            setStatus(
                "Message sent successfully."
            );


            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });


        } catch (error) {

            console.log(
                "Contact API Error:",
                error
            );


            setStatus(
                "Something went wrong. Please try again."
            );

        }

    };


    return (

        <section
            className="contact-section"
            id="contact"
        >

            <div className="contact-container">


                <motion.div
                    className="contact-heading"
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
                        CONTACT
                    </span>


                    <h2>

                        Let's build something

                        <span>
                            {" "}amazing.
                        </span>

                    </h2>


                    <p>

                        Have a project idea or want to work together?
                        Feel free to contact me.

                    </p>

                </motion.div>


                <div className="contact-grid">


                    <motion.div
                        className="contact-info"
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


                        <div className="contact-card">

                            <div className="contact-icon">

                                <Mail size={22} />

                            </div>


                            <div>

                                <h3>
                                    Email
                                </h3>


                                <p>

                                    {profile?.email ||
                                        "Email not available"}

                                </p>

                            </div>

                        </div>


                        <div className="contact-card">

                            <div className="contact-icon">

                                <MapPin size={22} />

                            </div>


                            <div>

                                <h3>
                                    Location
                                </h3>


                                <p>

                                    {profile?.location ||
                                        "Location not available"}

                                </p>

                            </div>

                        </div>


                        <div className="social-links">

                            <a
                                href="https://github.com/Imamirho3ein"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >

                                <Code2 size={20} />

                            </a>


                            <a
                                href="#"
                                aria-label="Social profile"
                            >

                                <Users size={20} />

                            </a>

                        </div>


                    </motion.div>


                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
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
                            duration: 0.7
                        }}
                    >


                        <div className="form-group">

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Your Message"
                                required
                            />

                        </div>


                        <button type="submit">

                            Send Message

                            <Send size={18} />

                        </button>


                        {status && (

                            <p className="contact-status">

                                {status}

                            </p>

                        )}


                    </motion.form>


                </div>


            </div>


        </section>

    );

}


export default Contact;