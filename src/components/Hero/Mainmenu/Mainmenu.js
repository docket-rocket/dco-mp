import React from "react";
import "./Mainmenu.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import RTI from "../Mainmenu/pdf/RTI-Board.pdf";
import {NavLink} from "react-router-dom";

const Mainmenu = () => {
    return (
        <>
            <div className="mainmenu">
                <p className="headering">MAIN MENU</p>
                <ul>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/Censuscommissionersmessage"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Census commissioner's message
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/AboutDirectorateOfCensus"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                About Directorate of Census
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/Historicalbackground"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                historical background
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/Conceptsanddefinitions"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Concepts and definitions
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/Duties"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Duty
                            </p>
                        </li>
                    </NavLink>

                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/Houseschedule"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                House Schedule - First Phase
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/actandrule"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Act and Rules
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/importantweblink"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Important weblinks
                            </p>
                        </li>
                    </NavLink>
                    <li>
                        <p>
                            <FontAwesomeIcon icon={faAngleDoubleRight} /> Audio
                            / video gallery
                        </p>
                    </li>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/tenders"
                    >
                        <li>
                            <p>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                />{" "}
                                Tenders
                            </p>
                        </li>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active_class"
                        to="/mainmenu/download"
                    >
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                                Download
                            </p>
                        </li>
                    </NavLink>

                    <a href={RTI} exact activeClassName="active_class">
                        <li>
                            <p>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                                Right to information
                            </p>
                        </li>
                    </a>
                </ul>
            </div>
        </>
    );
};

export default Mainmenu;
