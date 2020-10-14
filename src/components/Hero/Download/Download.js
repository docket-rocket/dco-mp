import React from "react";
import "./Download.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

const Download = () => {
    const style = {
        height: "2rem",
        width: "2rem",
        color: "var(--mainmenu-main-heading-color)",
    };
    return (
        <>
            <table class="table" style={{fontSize: "1.3rem"}}>
                <thead className="download__table_head">
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
                <tbody className="download_body">
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            1
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <FontAwesomeIcon icon={faFilePdf} style={style} />
                        </td>
                        <td>
                            {" "}
                            <a>
                                {" "}
                                Analytical Report on Primary Census Abstract{" "}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            2
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <FontAwesomeIcon icon={faFilePdf} style={style} />
                        </td>
                        <td>
                            <a> Census 2011 Age Data </a>{" "}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" style={{textAlign: "center"}}>
                            3
                        </th>
                        <td style={{textAlign: "center"}}>
                            {" "}
                            <FontAwesomeIcon icon={faFilePdf} style={style} />
                        </td>
                        <td>
                            <a> Census 2011 Disability Data </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Download;
