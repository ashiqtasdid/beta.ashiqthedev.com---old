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

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-dark text-muted">
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
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
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>



                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
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


            <div className="text-center p-4 extra-style" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright: 
                <a className="text-reset fw-bold" href="https://ashiqthedev.com">Ashiq The Dev - Developing That Matters</a>
            </div>

        </footer>
    )
}

export default Footer