import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhone, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../../../StyleSheet/Footer.scss'

const Footer = () => {
     return (
        <section className="footer">
            <div className="container">
                <div className="row justify-content-center text-white border-bottom">
                    <div className="col-md-4 pl-0">
                        <h4 className="text-capitalize mb-2">doctor-hm</h4>
                        <p className="text-capitalize my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eius excepturi sit qui quasi nisi.</p>
                        <div className="icon-box">
                            <a href="#"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <h5 className="text-capitalize mb-2">quick link</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="my-2 text-white text-capitalize d-inline-block" to="/home#about">about us</Link>
                            </li>
                            <li>
                                <Link className="my-2 text-white text-capitalize d-inline-block" to="/appointment">appointment</Link>
                            </li>
                            <li>
                                <Link className="my-2 text-white text-capitalize d-inline-block" to="/home#blog">blogs</Link>
                            </li>
                            <li>
                                <Link className="my-2 text-white text-capitalize d-inline-block" to="/home#contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pr-0">
                        <h5 className="text-capitalize mb-2">contact</h5>
                        <span className="d-block my-2 text-white text-capitalize"><FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />255 Brooklyn, New York, USA</span>
                        <span className="d-block my-2 text-white text-capitalize"><FontAwesomeIcon className="me-3" icon={faEnvelope} />info@yourmail.com</span>
                        <span className="d-block my-2 text-white text-capitalize"><FontAwesomeIcon className="me-3" icon={faPhone} />(000) 123 456 987</span>
                    </div>
                </div>
                <div className="text-capitalize mt-4 text-center">
                    <p className="text-white">Copyright &copy; {(new Date()).getFullYear()} doctor-hm! All Rights Reserved by hm</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;