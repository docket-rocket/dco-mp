import React from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import CensusINDIA from "./pdf/CensusINDIA.pdf";
import "./Historicalbackground.css";

const Historicalbackground = (props) => {
    const style = {
        height: "2rem",
        width: "2rem",
        color: "#00a292",
    };
    return (
        <>
            {" "}
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th scope="col" style={{textAlign: "center"}}>
                            #
                        </th>
                        <th scope="col" style={{textAlign: "center"}}>
                            pdf
                        </th>
                        <th scope="col">File Name</th>
                    </tr>
                </thead>
                <tbody className="hb_body">
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            1
                        </th>
                        <td style={{textAlign: "center", cursor: "pointer"}}>
                            {" "}
                            <FontAwesomeIcon icon={faFilePdf} style={style} />
                        </td>
                        <td
                            style={{
                                color: "black",
                                cursor: "pointer",
                            }}
                        >
                            {" "}
                            <a
                                href={CensusINDIA}
                                style={{color: "black", textDecoration: "none"}}
                            >
                                {" "}
                                Historical Background{" "}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Historicalbackground;
