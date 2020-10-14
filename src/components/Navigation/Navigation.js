import React from "react";
import Logo from "./Image/logo.png";
import "./Navigation.css";

const Navigation = () => {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex">
                    <div class="logo mr-auto">
                        <h1 class="text-light d-flex justify-content-center align-items-center">
                            <a href="index.html">
                                <img src={Logo} alt="" data-aos="zoom-in" />
                            </a>
                            <a href="index.html" data-aos="zoom-in">
                                {" "}
                                DIRECTORATE OF CENSUS OPERATIONS <br />
                                MADHYA PRADESH
                            </a>
                        </h1>
                    </div>

                    <nav class="nav-menu d-none d-lg-block ">
                        <ul className="list">
                            <li class="active">
                                <a href="#header" data-aos="zoom-in">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#circular" data-aos="zoom-in">
                                    Circular
                                </a>
                            </li>
                            <li>
                                <a href="#MP2011" data-aos="zoom-in">
                                    {" "}
                                    MP census 2021 at a glance
                                </a>
                            </li>
                            <li>
                                <a href="#India2011" data-aos="zoom-in">
                                    {" "}
                                    India Census 2021 at a glance
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" data-aos="zoom-out">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navigation;
