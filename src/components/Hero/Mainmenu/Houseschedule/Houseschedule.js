import React from "react";
import Pic from "./Image/h.jpg";
import "./Houseschedule.css";

const Houseschedule = () => {
    return (
        <>
            <div className="house">
                <p className="house__heading">Census introduction</p>

                <ul>
                    <p>
                        Definition of census:- Census collects, compiles,
                        analyzes and publishes public statistics, economic and
                        social data in relation to any country or all persons of
                        a defined area of ​​any country within a specified time
                        period.
                    </p>
                    <p>
                        <span
                            style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                            }}
                        >
                            Objective:-
                        </span>{" "}
                        Complete coverage and correct calculation of all persons
                    </p>
                    <li> --> Who and how many?</li>
                    <li>--> Classification of activities?</li>
                    <li>--> Types of houses where individuals live?</li>
                    <li>--> Whether facilities are available in families?</li>
                    <li>--> Do families have assets or not?</li>
                </ul>

                <p className="house__heading">Use of census data</p>
                <ul>
                    <p
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        The census is not just a count of individuals.{" "}
                    </p>
                    <li>
                        ---> Collecting important information for various
                        schemes and their implementation,
                    </li>
                    <li>
                        ---> Determination of seats of parliamentary / assembly
                        constituencies / panchayats and other local bodies and
                        demarcation of boundaries of constituencies,
                    </li>
                    <li>
                        {" "}
                        ---> Collecting data of village, city, ward level for
                        effective public administration. The only source to do
                        this
                    </li>
                    <li>
                        ---> to provide useful data for the five-year, annual
                        plans of the state and central government
                    </li>
                    <li>
                        ---> to provide data on a large scale to scholars,
                        industrialists, businessmen, planners and{" "}
                    </li>
                    <li> ---> useful in many other development works</li>

                    <li>
                        <p
                            style={{
                                paddingTop: "2rem",
                                fontWeight: "bold",
                            }}
                        >
                            Timeline: In two different stages
                        </p>
                    </li>
                    <li>
                        <span
                            style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                            }}
                        >
                            {" "}
                            First phase :
                        </span>{" "}
                        House listing and census of houses and filling the
                        National Public Number Register Family Schedule (45
                        days) between April and September 2010 - May 04 to June
                        22, 2010 in Madhya Pradesh
                    </li>
                    <li>
                        <span
                            style={{
                                textDecoration: "underline",
                                fontWeight: "bold",
                            }}
                        >
                            {" "}
                            Second Phase :
                        </span>{" "}
                        Second Phase: Jan Count of numbers: 09 February to 05
                        March 2011
                    </li>
                </ul>

                <p className="house__heading">Census designation</p>
                <ul>
                    <li>
                        <img src={Pic}></img>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Houseschedule;
