import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArchive} from "@fortawesome/free-regular-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import rar from "./Font/MANGAL.rar";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container d-flex justify-content-around">
                        <div class="social-links">
                            <a
                                href="https://twitter.com/censusindia2021/"
                                class="twitter"
                            >
                                <i class="icofont-twitter"></i>
                            </a>
                            <span> TWITTER</span>
                            {"  "}{" "}
                            <a
                                href="https://www.facebook.com/CensusIndia2021/"
                                class="facebook"
                            >
                                <i class="icofont-facebook"></i>
                            </a>
                            <span> FACEBOOK</span>
                        </div>
                        <div class="social-links">
                            <a href={rar} className="facebook">
                                <FontAwesomeIcon icon={faFileArchive} />
                            </a>
                            <span> HINDI FONT</span>
                        </div>
                        <div className="footer__livecounter ">
                            <div class="social-links">
                                <a href="" className="facebook">
                                    <FontAwesomeIcon icon={faUsers} />
                                </a>
                            </div>
                            <a
                                href="https://www.hitwebcounter.com"
                                target="_blank"
                            >
                                <img
                                    src="https://hitwebcounter.com/counter/counter.php?page=7676129&style=0011&nbdigits=7&type=page&initCount=0"
                                    title="Total Website Hits"
                                    Alt="Web Hits"
                                    border="0"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright{" "}
                        <strong>
                            <span>DCO, M.P</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed and Developed by Vivek Patel
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
