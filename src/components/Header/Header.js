import React from "react";
import Emblem from "./Image/emblem.png";
import "./Header.css";

const Header = (props) => {
    return (
        <>
            <section id="hero">
                <div class="hero-container" data-aos="fade-up">
                    <img src={Emblem} />
                    <h1>
                        Goverment Of India <br />
                        Ministry Of Home Affairs{" "}
                    </h1>
                </div>
            </section>
            <main id="main">
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">
                        <div class="row justify-content-end">
                            <div class="col-lg-11">
                                <div class="row justify-content-end">
                                    <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box py-5">
                                            <i class="icofont-users-social"></i>
                                            <span data-toggle="counter-up">
                                                72,626,809
                                            </span>
                                            <p>Total Population</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box pb-5 pt-0 pt-lg-5">
                                            <i class="icofont-street-view"></i>
                                            <span data-toggle="counter-up">
                                                10,809,395
                                            </span>
                                            <p>
                                                Total Child Population (0-6 Age)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box py-5">
                                            <i class="icofont-graduate-alt"></i>
                                            <span data-toggle="counter-up">
                                                69.32
                                            </span>
                                            <p>Literacy (in Percentage)</p>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box pb-5 pt-0 pt-lg-5">
                                            <i class="icofont-map"></i>
                                            <span data-toggle="counter-up">
                                                119,017
                                            </span>
                                            <p>
                                                Area mi<sup>2</sup>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Header;
