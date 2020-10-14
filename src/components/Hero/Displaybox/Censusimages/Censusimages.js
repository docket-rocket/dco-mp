import React from "react";
import "./../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Img1 from "./Images/6.jpg";
import Img2 from "./Images/7.jpg";
import Img3 from "./Images/8.jpg";
import Img4 from "./Images/9.jpg";

const Censusimages = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
                <ol class="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Img1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Img2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Img3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Img4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};
export default Censusimages;
