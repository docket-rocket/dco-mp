import React from "react";
import "./Hero.css";
import Mainmenu from "./Mainmenu/Mainmenu";
import Displaybox from "./Displaybox/Displaybox";
import Emblem from "./Image/emblem.png";
import Circular from "./../../components/Navigation/Circular/Circular";
import MP2011 from "./../../components/Navigation/MP2011/MP2011";
import India2011 from "./../../components/Navigation/India2011/India2011";
import Contact from "./../../components/Navigation/Contact/Contact";

const Hero = (props) => {
    return (
        <>
            {" "}
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
                <section id="about" class="about ">
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
                                        <div class="count-box py-5">
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
                                        <div class="count-box py-5 ">
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
                        <div class="hero__body">
                            <div
                                className="hero__mainmenu"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <Mainmenu
                                    translate={props.translate}
                                ></Mainmenu>
                            </div>
                            <div
                                className="hero__display"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <Displaybox
                                    translate={props.translate}
                                ></Displaybox>
                            </div>
                        </div>
                        <Circular translate={props.translate}></Circular>
                        <MP2011 translate={props.translate}></MP2011>
                        <India2011 translate={props.translate}></India2011>
                        <Contact translate={props.translate}></Contact>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Hero;
