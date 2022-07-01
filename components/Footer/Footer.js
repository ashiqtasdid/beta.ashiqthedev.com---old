import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    fafacebook,
    faAmbulance,
    faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import styles, { footer } from '../../styles/footer.module.css'
import Image from 'next/dist/client/image';
import footerimage from '../../assets/images/atd.jpg'
import Link from 'next/dist/client/link';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitch, FaFacebook, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.mainclass}>
            <footer className="text-center text-lg-start bg-light text-muted mainclass text-white">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                    <a href="https://facebook.com/ashiqthedev" className="me-4 text-reset">
                            <FaFacebook/>
                        </a>
                        <a href="https://twitter.com/ashiqthedev" className="me-4 text-reset">
                            <FaTwitter/>
                        </a>
                        <a href="https://twitch.tv/ashiqscarx" className="me-4 text-reset">
                            <FaTwitch/>
                        </a>
                        <a href="https://discord.gg/kzSqqyM4Fg" className="me-4 text-reset">
                            <FaDiscord/>
                        </a>
                        <a href="https://linkedin.com" className="me-4 text-reset">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/ashiqthedev" className="me-4 text-reset">
                            <FaGithub/>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <Image src={footerimage}
                                        alt="Picture of the author"
                                        width="150px"
                                        height="150px"
                                        layout="responsive"
                                    />
                                    Ashiq The Dev - Developing That Matters
                                </h6>
                                <p >
                                    Ashiq The Dev - Developing That Matters is an IT consultant company. It provides various kinds of IT services including, Web & Mobile Development, SEO & much more
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-decoration-none">

                                <h6 className="text-uppercase fw-bold mb-4 ">
                                    Products
                                </h6>
                                <p>
                                    <a href="https://studio.ashiqthedev.com" className="text-reset text-decoration-none">Studio</a>
                                </p>
                                <p>
                                    <Link href="/services"><a href="#" className="text-reset text-decoration-none text-white ">Services</a></Link>
                                </p>
                                <p>
                                    <a href="/downloads" className="text-reset text-decoration-none">Softwares</a>
                                </p>
                                <p>
                                    <a href="/os" className="text-reset text-decoration-none">OS</a>
                                </p>
                            </div>
                            
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="https://domains.ashiqthedev.com" className="text-reset text-decoration-none">Our Domains</a>
                                </p>
                                <p>
                                    <a href="https://github.com/ashiqthedev" className="text-reset text-decoration-none">Github</a>
                                </p>
                                <p>
                                    <a href="https://twitter.com/AshiqTheDev" className="text-reset text-decoration-none">Twitter</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Help</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    About
                                </h6>
                                <p>
                                    <a href="https://ashiqthedev.com/team" className="text-reset text-decoration-none">Team</a>
                                </p>
                                <p>
                                    <a href="https:career.ashiqthedev.com" className="text-reset text-decoration-none">Career</a>
                                </p>
                                <p>
                                    <a href="https://twitter.com/Ashiq_TasdidYT" className="text-reset text-decoration-none">Twitter</a>
                                </p>

                                <p>
                                    <a href="https://github.com/ashiqthedev" className="text-reset text-decoration-none">Github</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact US
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Shershah Colony, CTG 4210, BD</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    admin@ashiqthedev.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 880 1311 807380</p>
                            </div>

                        </div>

                    </div>
                </section>


                <div className="text-center p-4 extra-style text-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright:
                    <a className="text-reset fw-bold text-decoration-none" href="https://ashiqthedev.com">Ashiq The Dev - Developing That Matters</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer