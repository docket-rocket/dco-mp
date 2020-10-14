import React from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChrome} from "@fortawesome/free-brands-svg-icons";
import "./Importantweblink.css";

const Importantweblink = () => {
    const style = {
        height: "2rem",
        width: "2rem",
        color: "var( --mainmenu-main-heading-color)",
    };
    return (
        <>
            <table class="table" style={{fontSize: "1.6rem"}}>
                <thead
                    style={{
                        backgroundColor: "var(--mainmenu-main-heading-color)",
                        color: "white",
                    }}
                >
                    <tr>
                        <th scope="col" style={{textAlign: "center"}}>
                            #
                        </th>
                        <th scope="col" style={{textAlign: "center"}}>
                            Census Of India
                        </th>
                        <th scope="col">Web Link</th>
                    </tr>
                </thead>
                <tbody className="important_link_body">
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            1
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://www.censusindia.gov.in">
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />
                            </a>{" "}
                        </td>
                        <td>
                            {" "}
                            <a href="http://www.censusindia.gov.in">
                                Office of The Registrar General & Census
                                Commissioner, India
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            2
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://www.censusgujarat.gov.in">
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />{" "}
                            </a>{" "}
                        </td>
                        <td>
                            <a href="http://www.censusgujarat.gov.in">
                                {" "}
                                Census of Gujrat
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            3
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://www.censuskarnataka.gov.in">
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />
                            </a>{" "}
                        </td>
                        <td>
                            <a href="http://www.censuskarnataka.gov.in">
                                {" "}
                                Census of Karnataka
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            4
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://www.census.tn.nic.in">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />
                            </a>{" "}
                        </td>
                        <td>
                            <a href="http://www.census.tn.nic.in">
                                {" "}
                                Census of Tamilnadu
                            </a>{" "}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            5
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://punjabcensus.gov.in">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />
                            </a>
                        </td>
                        <td>
                            {" "}
                            <a href="http://punjabcensus.gov.in">
                                {" "}
                                Census of Punjab
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            6
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <a href="http://www.rajcensus.gov.in">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    style={style}
                                />
                            </a>{" "}
                        </td>
                        <td>
                            {" "}
                            <a href="http://www.rajcensus.gov.in">
                                {" "}
                                Census of Rajasthan
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Importantweblink;
