import React from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
    let style = {
        fontSize: "1.3rem",
    };
    return (
        <>
            {" "}
            <section id="Contact">
                <div class="">
                    <div class="contact_title" data-aos="zoom-out">
                        <h2> Contact </h2>
                    </div>
                    <table
                        class="table table-bordered "
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <thead className="contact_head">
                            <tr
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                <th colSpan="2">
                                    <ul>
                                        <li>
                                            DIRECTORATE OF CENSUS OPERATIONS
                                            MADHYA PRADESH
                                        </li>
                                        <li>
                                            "JANGANANA BHAVAN" ARERA HILLS, JAIL
                                            ROAD,
                                        </li>
                                        <li>BHOPAL - 462 004</li>
                                    </ul>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="contact_head_body">
                            <tr
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                <th scope="row">
                                    <ul>
                                        <li>
                                            General Telephone No:
                                            2555795/2555771
                                        </li>
                                        <li>
                                            E-mail:
                                            dco-mad@rgi.censusindia.gov.in
                                        </li>
                                        <li>Fax No: 2555771</li>
                                    </ul>
                                </th>
                                <th>
                                    {" "}
                                    <ul>
                                        <li>
                                            Data Center Telephone No: 2558351{" "}
                                        </li>
                                        <li>
                                            Data Center - E-mail:
                                            mpdc@rgi.censusindia.gov.in
                                        </li>
                                    </ul>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="table"
                        style={style}
                        data-aos="zoom-out"
                        data-aos-delay="100"
                    >
                        <thead
                            style={{
                                backgroundColor: "#94c045",
                                color: "white",
                            }}
                        >
                            <tr>
                                <th scope="col" style={{textAlign: "center"}}>
                                    #
                                </th>
                                <th scope="col">Name of Officer</th>
                                <th scope="col">Designation </th>
                                <th scope="col">Email-ID</th>
                                <th scope="col">Office No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    1
                                </th>
                                <td>Ms. Bhavana Walimbe, IAS</td>
                                <td>Director & CO</td>
                                <td>bhavana.walimbe@mp.gov.in</td>
                                <td>0755-2555771 & 2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    2
                                </th>
                                <td>Shri. Ajay Sahay</td>
                                <td>Deputy Director</td>
                                <td>ajaysahay.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    3
                                </th>
                                <td>Shri. Ramawatar Patel</td>
                                <td>Deputy Director</td>
                                <td>rpatel.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    4
                                </th>
                                <td>Shri. Jai Shahdadpuri</td>
                                <td>Deputy Director</td>
                                <td>jspuri.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    5
                                </th>
                                <td>Shri. V. Satish Iyer</td>
                                <td>Deputy Director (IT)</td>
                                <td>vsiyer.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    6
                                </th>
                                <td>Shri. Namit Yadav</td>
                                <td>Deputy Director</td>
                                <td>namityadav.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    7
                                </th>
                                <td>Shri. Ritul Kamal</td>
                                <td>Assisstant Director</td>
                                <td>ritulkamal.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    8
                                </th>
                                <td>Shri. Ashwani Dixit</td>
                                <td>Assisstant Director</td>
                                <td>ashwani.dixit.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    9
                                </th>
                                <td>Shri. Gajendra Gupta</td>
                                <td>Assisstant Director</td>
                                <td>gajendra.gupta.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    10
                                </th>
                                <td>Shri. Santosh Kumar</td>
                                <td>Assisstant Director</td>
                                <td>santoshkumar80.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    11
                                </th>
                                <td>Shri. Anil Kumar Kerketta </td>
                                <td>Assisstant Director (DC)</td>
                                <td>anilkerketta.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    12
                                </th>
                                <td>Shri. K.L. Motwani </td>
                                <td>Assisstant Director (DC)</td>
                                <td>klmotwani.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    13
                                </th>
                                <td>Shri. Sadhna Agrawal </td>
                                <td>Assisstant Director (DC)</td>
                                <td>agrawalsadhana.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    14
                                </th>
                                <td>Shri. V. Arun Kumar Murty </td>
                                <td>Assisstant Director (DC)</td>
                                <td>murtyarun.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    15
                                </th>
                                <td>Smt. Savita Jain </td>
                                <td>Assisstant Director </td>
                                <td>savita.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    16
                                </th>
                                <td>Shri. S.C. Rawa </td>
                                <td>Research Officer(Map) </td>
                                <td>srava1964.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    17
                                </th>
                                <td>Shri. Bhupendra Kumar Shrivastava </td>
                                <td>Assisstant Director</td>
                                <td>bhoopendrakumar.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    18
                                </th>
                                <td>Smt. Prema Nair </td>
                                <td>Assisstant Director</td>
                                <td>premanair.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    19
                                </th>
                                <td>Smt. Anamika Jain</td>
                                <td>Assisstant Director</td>
                                <td>anamika.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    20
                                </th>
                                <td>Smt. Ancy Reji</td>
                                <td>Assisstant Director</td>
                                <td>ancyreji.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    21
                                </th>
                                <td>Shri. Jogendra Tamgadge</td>
                                <td>Assisstant Director</td>
                                <td>jogendra.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    22
                                </th>
                                <td>Shri. Harishchandra Tripathi</td>
                                <td>Assisstant Director</td>
                                <td>harishripathi.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    23
                                </th>
                                <td>Smt Anita Shrivastava </td>
                                <td>Assisstant Director</td>
                                <td>anitas.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    24
                                </th>
                                <td>Ku. Kiran Savan</td>
                                <td>Stat. Investigator Grade-I</td>
                                <td>kiransavan.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{textAlign: "center"}}>
                                    25
                                </th>
                                <td>Shri. S.K. Sen</td>
                                <td>Stat. Investigator Grade-I</td>
                                <td>sensantosh.rgi@censusindia.gov.in</td>
                                <td>0755-2555795</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Contact;
