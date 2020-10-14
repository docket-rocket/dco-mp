import React from "react";
import "./Duties.css";

const Duties = () => {
    return (
        <>
            {" "}
            <div className="duties">
                <p className="duties_heading">
                    Duties of enumerators before house listing
                </p>
                <ul>
                    <li> ---> Attend training.</li>
                    <li>
                        ---> Study the house listing manual carefully and
                        understand them completely.
                    </li>
                    <li>
                        ---> If any part of the instruction is not clear then
                        solve it.
                    </li>
                    <li>
                        {" "}
                        ---> Get the necessary materials for house listing.
                    </li>
                </ul>
                <p className="duties_para"> Kit Items:-</p>
                <table
                    class="table table-bordered"
                    style={{fontSize: "1.5rem"}}
                >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                                Items to be supplied to each Enumerator &
                                Supervisor actually engaged for field work
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Water proof carry bag</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Water proof plastic folder</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Writing board with clip (A3-size)</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Ball pen (not gel)</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Pencil</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Eraser</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Sharpener</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Colored chalk (in Box)</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Ink pad</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Small marker pen</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>Plastic coated gems clip (in box)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="duties_heading">
                    Duties of enumerators during house listing
                </p>
                <ul>
                    <li>
                        ---> Visit the Houselisting Block and identify its
                        boundaries and other landmarks.
                    </li>
                    <li>
                        ---> Update / give the number of each building and
                        census house.
                    </li>
                    <li>---> Draw a map of the Houselisting Block.</li>
                    <li>
                        {" "}
                        ---> Visit each house without leaving any house and fill
                        in the "Houselisting and House Census Schedule" and
                        "National Population Register Family Schedule".
                    </li>
                </ul>
                <p className="duties_heading">
                    Duties of enumerators after house listing
                </p>
                <ul>
                    <li>
                        ---> Ensure that all the columns of the questions are
                        correctly filled.
                    </li>
                    <li>
                        {" "}
                        ---> Ensure that the entire area is covered by visiting
                        all the buildings, census houses and families falling
                        within the list of houses assigned to you.
                    </li>
                    <li>
                        {" "}
                        ---> Make sure that you have prepared the House List
                        Summary.
                    </li>
                    <li>
                        {" "}
                        ---> Submit the filled and empty documents to your
                        supervisor within the prescribed time limit.
                    </li>
                </ul>
                <p className="duties_heading"> Duties of supervisors </p>
                <ul>
                    <li>
                        {" "}
                        ---> Make sure to identify your area, get supervisor
                        book-letter from the charge officer, enter details of
                        records in booklet and prepare supervisory circle map.
                    </li>
                    <li>---> Help the enumerators in your subordinate area.</li>
                    <li>---> Ensure that work is done as per schedule.</li>
                    <li>
                        {" "}
                        ---> Ensure complete coverage (no short or no count
                        again).
                    </li>
                    <li>
                        {" "}
                        ---> Collect empty and filled schedules from the
                        enumerators.
                    </li>
                    <li>
                        {" "}
                        ---> Forward the signed document to your charge officer
                        within the stipulated time.
                    </li>
                    <li>---> Ensure other work from time to time.</li>
                </ul>
            </div>
        </>
    );
};

export default Duties;
