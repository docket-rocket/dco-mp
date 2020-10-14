import React, {useState} from "react";
import "./../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import li from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Img1 from "./Imag/01.png";
import Img2 from "./Imag/02.jpg";
import Img3 from "./Imag/03.jpg";
import Img4 from "./Imag/4.png";
import CRS from "./Imag/crs.png";
import "./AboutDirectorateOfCensus.css";

const AboutDirectorateOfCensus = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    return (
        <>
            <p className="act__top_heading">
                Directorate of Census Affairs, Madhya Pradesh, Bhopal
            </p>
            <li
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text_01"
                aria-expanded={open1}
                className="button"
            >
                DATA CENTER
            </li>
            <Collapse in={open1}>
                <li
                    id="example-collapse-text_01"
                    className="data_center"
                    style={{listStyle: "none"}}
                >
                    <p>Data Center, Madhya Pradesh, Bhopal</p>

                    <ol>
                        <li>
                            The data center plays a major role in finalizing the
                            census data of the state.
                        </li>
                        <li>
                            The data center was established in 1981. In which
                            the data received from the field is keyed.
                        </li>
                        <li>
                            Presently 15 data centers are set up in the entire
                            country, in which scanning work is done to scan the
                            census schedules of the country.
                        </li>
                        <li>
                            The filled census schedules received in the
                            prescribed format are sent to the data center of the
                            directorate where the bar code is generated after
                            the calculation, pre-scanning of these schedules.
                        </li>
                        <li>
                            The scanning of these schedules is done batch-wise
                            according to the description code of the location
                            code shown in the schedule, after matching the
                            respective schedules by batch. After scanning, a
                            computer-generated scanned image file (TIFF file) is
                            prepared. Through the generated image ICR
                            technology, the image of the filled schedules is
                            captured and inputted into E-FLOW by software
                            obtained from the Office of the Registrar General
                            (DP Division) comprising RC, Tiling, Completion,
                            Exemption,
                        </li>
                        <li>
                            {" "}
                            DP for finalization and tabulation of EXPORT ASCII
                            format Division is sent to New Delhi
                        </li>
                        <li>
                            In addition to E-FLOW, computer related works of
                            various SRS, Census-2011, Village / Municipal
                            Directory, etc. are successfully edited in various
                            cells of the Directorate of Census Works at Data
                            Capture Center.
                        </li>
                        <li>
                            Currently, the scanning work of schedules of the
                            first phase of Census-2011 for Houselisting and
                            National Population Register is being carried out,
                            the main census work will be edited during 9
                            February 2011 to 28 February 2011 followed by the
                            scanning of schedules for data capture centers. Will
                            be done by
                        </li>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src={Img1} alt="" />

                            <img src={Img2} alt="" />

                            <img src={Img3} alt="" />
                        </div>
                    </ol>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text_02"
                aria-expanded={open2}
                className="button"
            >
                Census - 2011
            </li>
            <Collapse in={open2}>
                <li id="example-collapse-text_02" className="census_2011">
                    <p className="p1">
                        Procedure for completion of census work
                    </p>
                    <p>
                        In India, census work is done every ten years. In the
                        modern period, the census was formally started in India
                        in 1872, but it was done at different times in different
                        parts of the country. Since 1881, simultaneous census is
                        being done in the whole country. Census of India 2011
                        will be the 15th of this series and the 7th after
                        independence. The census collects and publishes
                        statistics on several important socio-economic and
                        demographic topics.
                        <br /> The census of India is not only considered the
                        world's largest administrative function, but it is also
                        considered the world's best census.
                        <br /> The census is conducted under the powers
                        conferred by the Census Act 1948 and the Revised Act
                        1993 and the Census Rules 1990 and the Revised Rules
                        1994.
                        <br /> The Census Directorate, located at each state
                        headquarters, has a census room for census operations.
                        By this chamber, the rural and urban frame of the state
                        is prepared on a fixed date, updating the changes in the
                        boundaries of the state / district / tehsil / CD blocks,
                        villages and towns during the first decade.
                        <br /> Essentially, notifications are issued by the
                        Government of India for the completion of the census.
                        These notifications are republished in the State
                        Gazettes. In the next sequence, employees of various
                        departments of the state government are appointed as
                        enumerators / supervisors for carrying out census work
                        in districts, rural and urban charges.
                        <br />
                        In order to complete the first phase of Jagannana and
                        Houselisting, it is necessary that census numbers should
                        be given in all the charges. The house numbering is done
                        by the Charge Officer of the concerned area. After this,
                        a charge register is prepared by each Charge Officer for
                        the Houselisting work and through this the Enumerator /
                        Supervisors are allotted for specific area census work.
                        The charge register is actually the control register
                        required for the entire census work, in which the
                        calculation block created in one charge,
                        <br /> Training is very important for successful conduct
                        of census. Census training is conducted at several
                        levels. Under this, state level, division level,
                        district level and charge level trainings are conducted.
                        In the charge level training, the enumerator /
                        supervisor is trained in more than one cycle and in the
                        last cycle the material is distributed for field work.
                        Reasonable estimation, printing and distribution of all
                        materials, instruction manuals and schedules required
                        for field work is also an important function of census.
                        Various efforts of publicity are also done by the
                        Directorate of Census for the support of the general
                        public. Under this, efforts are made to give accurate
                        information to the general public through hoardings,
                        banners, handbills, wall writing, messages in
                        newspapers, programs of Doordarshan and All India Radio
                        and other audio and video spots and other means. <br />{" "}
                        Schedules are scanned by the Directorate's Data Center
                        Technology as soon as the schedules filled during field
                        work are received in the Census Directorate. After the
                        first phase of field work, the work of Post Enumeration
                        Survey is also done by this Directorate on the basis of
                        a sample to assess the quality and defects of field
                        work, in some selected units, from which the collected
                        data is collected. Information can be obtained about the
                        Content Error and Coverage Error done in doing. <br />
                        Similarly, necessary steps are also taken for the second
                        phase of census and population calculation, such as
                        preparation of revised charge register, republication of
                        the required notifications by the state government,
                        re-appointment of enumerators and supervisors, training
                        of all level charge officers, necessary publicity, The
                        revised charge register, distribution of material,
                        supervision of second phase field work etc. are all done
                        by the Directorate of Census.
                        <br /> The census work is very extensive. During the
                        census, all the rooms of the directorate are directly or
                        indirectly related to the census work, however the
                        census room has an important role in it.
                    </p>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text_03"
                aria-expanded={open3}
                className="button"
            >
                C.R.S
            </li>
            <Collapse in={open3}>
                <li id="example-collapse-text_03" className="crs">
                    <p className="p1">
                        {" "}
                        CRS Administrative organization and activities under
                        birth-death registration work in Madhya Pradesh
                    </p>
                    <ul>
                        <li>
                            <p>
                                Birth-registration work is done at the national
                                level under the Rules 1969 at the national
                                level, under the guidance of the Registrar and
                                Census Commissioner at the national level and at
                                the state level under the direction of the Chief
                                Registrar (Birth-Death) and the Commissioner of
                                Economic and Statistics and the monitoring of
                                this work is done by the Joint Registrar. And
                                under the direction of the Director Census, the
                                administrative organization is as follows.
                            </p>
                            <img src={Img4} alt="imag" />
                        </li>
                        <li>
                            <p>
                                M.P. Birth-death registration was done in all
                                the police stations (police stations) in rural
                                areas, but from 01.01.2004, in all the village
                                panchayats and in the urban area, Municipality,
                                Municipal Corporation, Nagar Panchayat and
                                Cantonment with administrative change in rural
                                area. Birth registration in the board is done by
                                the concerned registrar. In addition to the
                                order of the Government of Madhya Pradesh,
                                Planning Economic and Statistics No. F-10-16 /
                                2007/23 / Yo.A / dated 14.02.2007, all Primary
                                Health Centers of the state are civil hospitals,
                                district hospitals,
                            </p>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                Key features of birth registration: -
                            </p>
                            <ol>
                                <li>Birth-death registration is mandatory.</li>
                                <li>
                                    Birth registration is done free of charge.
                                </li>
                                <li>
                                    {" "}
                                    It is the responsibility of the head of the
                                    family and the warden of the institutional
                                    family to make birth / death registration
                                    compulsory.
                                </li>
                                <li>
                                    {" "}
                                    A child without a name is registered and
                                    after completing the legal formalities after
                                    naming , the name can be registered.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p> Time period for registration: -</p>
                            <ol>
                                <li>
                                    Free registration is done up to 21 days
                                    after the birth event.
                                </li>
                                <li>
                                    {" "}
                                    The reported event is registered after the
                                    permission of the Registrar / Deputy
                                    Registrar within a period of 21 days to 1
                                    month of the occurrence.
                                </li>
                                <li>
                                    {" "}
                                    After 30 days but within 1 year registration
                                    is done by affidavit of Lata Patwari in
                                    rural area and District Executive of Janpad
                                    Panchayat and district registrar in urban
                                    area by the concerned Deputy Registrar /
                                    Registrar.
                                </li>
                                <li>
                                    {" "}
                                    The events to be reported after a period of
                                    more than 1 year are registered by the
                                    Deputy Registrar / Registrar on the orders
                                    of the Executive Magistrate.
                                </li>
                                <li>
                                    {" "}
                                    Late registration for registration within 21
                                    days and 10 years, and a late fee of twenty
                                    rupees will have to be paid for registration
                                    after 10 years.
                                </li>
                                <img src={CRS} />
                            </ol>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                Benefits of getting birth registration: -
                            </p>
                            <ol>
                                <li>
                                    This is the only authentic document of date
                                    and place of birth .
                                </li>
                                <li>Useful at school admission.</li>
                                <li>Required for foreign services.</li>
                                <li>To get voting rights.</li>
                                <li>To receive pension in old age.</li>
                                <li>To get life insurance.</li>
                                <li>
                                    For children's health records and
                                    vaccination.
                                </li>
                                <li>
                                    To find out the status of the current
                                    population of the country.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                CRS Functions of the room: -
                            </p>
                            <ol>
                                <li>
                                    Correspondence related to tabulation and
                                    review of monthly reports received from the
                                    Chief Registrar (Birth-Death) and District
                                    Registrar, and to bring to the notice of the
                                    Chief Registrar and maximum reporting,
                                    birth-death registration and the districts
                                    with informed and minimum reporting and
                                    birth-death registration.
                                </li>
                                <li>
                                    According to the instructions of the
                                    Registrar's Office and forwarding the
                                    approved amounts to the Chief Registrar
                                    (Birth-Death) Madhya Pradesh and obtaining
                                    the Utilization Certificate of the
                                    expenditure payment and informing it to the
                                    Registrar's Office and adjusting the amounts
                                    like publicity, hoardings, registration
                                    records are safe. Keeping and M.C.C.D.
                                    Training related.
                                </li>
                                <li>
                                    To conduct a review meeting of state level
                                    interdepartmental coordination once a year
                                    through the chief registrar (birth-death).
                                </li>
                                <li>
                                    To publish advertisements in the leading
                                    dailies regarding the requirement of birth
                                    certificate at the time of admission in the
                                    school and to send the confirmation of the
                                    published advertisement for the information
                                    of the Maharajistrar's office.
                                </li>
                            </ol>
                        </li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text_04"
                aria-expanded={open4}
                className="button"
            >
                MAP
            </li>
            <Collapse in={open4}>
                <li id="example-collapse-text_04" className="map">
                    <ul>
                        <p className="p1">
                            {" "}
                            Map work in Census of India - A Vision
                        </p>
                        <li>
                            <p>
                                The census of India has a rich history of
                                preparing maps. From the 1961 census, the work
                                of showing demographic data through maps at
                                administrative level on various subjects at the
                                State / Union Territory level of the Office of
                                the Registrar General of India has been
                                continuous. While performing census work, maps
                                have great importance in displaying geographical
                                location and statistical data. In both the
                                Pre-Census and Post-Census maps have a role.
                                Before starting the census work, various
                                administrative units like State, District,
                                Tehsil, Their boundaries and other details are
                                analyzed at the development block and village
                                and ward level so that census work can be
                                performed smoothly. Apart from this, enumerator
                                block maps are prepared by the enumerators at
                                the time of census field work, with the help of
                                which it is possible to carry out field work
                                smoothly.
                            </p>
                        </li>
                        <li>
                            <p>
                                After the field work of the census, demographic
                                data is published on various topics, including
                                maps outlining the data in census publications,
                                through cartographic methods. Various census
                                publications like census handbook publications
                                at the state / union levelDistrict and Tehsil /
                                Block maps are prepared for this. The map of the
                                district shows the boundaries of the tehsil and
                                development block, their headquarters, cities
                                and their population size, main roads, railways,
                                river / pond / drain etc. and the main villages
                                and education centers of the district etc. The
                                location codes of all the villages, boundaries,
                                population size, boundaries of cities, selected
                                public facilities, main roads, railways, rivers,
                                streams etc. are shown in the tehsil /
                                development maps. Administrative Map Publication
                                The map of the administrative block of the state
                                (showing district and tehsils), Thematic maps
                                showing various aspects of demographic data,
                                maps of district and tehsil are included. Census
                                mapThere is an important publication in which at
                                district, tehsil level various topics of
                                demographic data like population distribution,
                                density, population growth, female-male ratio,
                                marital status, youth population, male and
                                female workers of urban and rural areas, urban
                                population, immigration , Maps are drawn
                                outlining the data of literacy, language, main /
                                marginal / non-working population, scheduled
                                castes and tribes, religion and houses. In
                                addition, the state city directory provides
                                provisional statistics of the population and
                                social studies of selected cities and villages
                                and thematic maps of demographic data in other
                                publications,Are prepare
                            </p>
                        </li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen5(!open5)}
                aria-controls="example-collapse-text_05"
                aria-expanded={open5}
                className="button"
            >
                S.R.S
            </li>
            <Collapse in={open5}>
                <li id="example-collapse-text_05" className="srs">
                    <ul>
                        <p className="p1">
                            {" "}
                            Nyadarshan Registration Scheme (SRS)
                        </p>
                        <>
                            <p className="crs_para_heading"> introduction :-</p>
                            <li>
                                <p>
                                    Birth and death registration in developing
                                    countries is an important demographic source
                                    for socioeconomic development and population
                                    control. The future population is estimated
                                    on the basis of population growth rate,
                                    birth rate, death rate. These demographic
                                    data are used by health sectors to implement
                                    programs related to family planning,
                                    maternity and fertility health, etc.
                                </p>
                            </li>
                            <li>
                                <p>
                                    After the independence in India, the need
                                    for population related data was felt for the
                                    successful implementation of the Five Year
                                    Plans, as the population data is collected
                                    every ten years and the population data for
                                    the Five Year Plans is felt on an annual
                                    basis. For this, registration of birth and
                                    death started, but the appropriate
                                    statistical information could not be
                                    obtained from these figures. Civil
                                    registration work was implemented throughout
                                    the year of India through the Birth and
                                    Death Act 1969, registration of birth and
                                    death was made mandatory under this Act,But
                                    in some states / union territories of the
                                    year only the birth-death registration work
                                    was found satisfactory.
                                </p>
                            </li>
                            <li>
                                <p>
                                    For the purpose of obtaining birth-death
                                    data on an annual basis, the Registrar's
                                    Registration Scheme was implemented in India
                                    as a test in 1964 by the Office of the
                                    Registrar General and regular data on birth
                                    and death under the scheme from 1969-70. Are
                                    being compiled. On the basis of demographic
                                    data obtained from Nyadarshan registration
                                    scheme, there is a big change in different
                                    regions of the country. The rate of
                                    different types of demographic data obtained
                                    from Nyadarshan registration scheme is not
                                    the same in all states.
                                </p>
                            </li>
                            <li>
                                <p>
                                    At the international level, different types
                                    of Nyadarsh ​​Yojana are tested by different
                                    countries, in which single survey and
                                    multiple survey methods are prominent. In
                                    India, the Nyadarsha Registration Scheme
                                    (SRS) is based on the dual registration
                                    method, under this scheme, the birth and
                                    death of a part-time enumerator, who is
                                    usually a teacher, for this work under a
                                    certain selected area. The compilation of
                                    events is done and every sixAfter the month,
                                    the birth / death incidents are compiled by
                                    the supervisor of the Directorate of Census,
                                    carrying out the survey work in the relevant
                                    area independently. The birth / death events
                                    compiled by the enumerator and observer are
                                    matched at the headquarters and after
                                    re-examining the non-matching events, the
                                    birth-death data is finalized.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The work of Nyadarshan Registration Scheme
                                    is done by the Office of the Registrar of
                                    India in the selected units and the units
                                    are selected from time to time based on the
                                    previous census every 10 years.
                                </p>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">The year</th>
                                            <th scope="col">1969-70</th>
                                            <th scope="col">1977-78</th>
                                            <th scope="col">1983-85</th>
                                            <th scope="col">1993-95</th>
                                            <th scope="col">2004</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                India (selected units)
                                            </th>
                                            <td>3722</td>
                                            <td>5422</td>
                                            <td>6022</td>
                                            <td>6671</td>
                                            <td>7597</td>
                                        </tr>
                                        <tr>
                                            <th colSpan="6"></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>
                                <p>
                                    A total of 340 units have been selected for
                                    the state of Madhya Pradesh in 2004, of
                                    which 220 are rural and 120 urban units.
                                    Information is being received every year
                                    through Nyadarshan registration scheme in
                                    various types of demographic data. In India,
                                    the birth rate in the year 1971 was 36.9 per
                                    thousand, which has come down to 23.8 per
                                    thousand in the year 2005, similarly the
                                    death rate in the year 1971 in the country
                                    of India was 14.9 per thousand, which was
                                    reduced to 7 in the year 2005.6 per
                                    thousand. Information on infant mortality is
                                    a very important demographic data for the
                                    country. In India, infant mortality rate was
                                    129 per thousand in the year 1971, which has
                                    come down to 58 in the year 2005. The total
                                    fertility rate of women in the year 1971 was
                                    5.2 which has come down to 2.9 in the year
                                    2005. Some new items like adult literacy,
                                    primary health sub-centers and community
                                    health workers were also informed in the
                                    village to meet some requirements of the
                                    minimum requirement program.9 is left. Some
                                    new items like adult literacy, primary
                                    health sub-centers and community health
                                    workers were also informed in the village to
                                    meet some requirements of the minimum
                                    requirement program.9 is left. Some new
                                    items like adult literacy, primary health
                                    sub-centers and community health workers
                                    were also informed in the village to meet
                                    some requirements of the minimum requirement
                                    program.
                                </p>
                                <p>
                                    Details of facilities available in slums in
                                    class I and class II towns were also given
                                    in the city directory.{" "}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Structure of Nyadarshan Registration Scheme:
                                </p>
                                <ol>
                                    <li>
                                        Basic survey: Survey work of general
                                        resident families in selected units.
                                    </li>
                                    <li>
                                        Survey by part- time enumerator :
                                        Continuous survey by part-time
                                        enumerator and sending information of
                                        birth and death per month to the
                                        directorate.
                                    </li>
                                    <li>
                                        Half Yearly Survey: To be surveyed every
                                        six months by the supervisor of the
                                        Census Office.
                                    </li>
                                    <li>
                                        Matching: Matching events sent by a
                                        supervisor to events sent by part-time
                                        enumerators.
                                    </li>
                                    <li>
                                        Re-investigation: To determine the final
                                        figures of birth and death related
                                        events by re-examining the unrelated
                                        incidents.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>
                                    Publication of data of Nyadarsha
                                    Registration Scheme: Birth, Death, Infant
                                    Death and Natural Growth Rate is published
                                    by Bulletin every year by the Office of the
                                    Registrar General, India. According to the
                                    Nyadarshan Registration Scheme Bulletin
                                    released in October 2009, the demographic
                                    rates for the year 2008 for India and Madhya
                                    Pradesh are as follows.
                                </p>
                                <table class="table">
                                    <thead style={{textAlign: "center"}}>
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">India</th>
                                            <th scope="col">Madhya Pradesh</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody style={{textAlign: "center"}}>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Birth Rate</td>
                                            <td>23.1</td>
                                            <td>28.5</td>
                                            <td>Population per thousand </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td> death rate</td>
                                            <td>7.4</td>
                                            <td>8.7</td>
                                            <td>Population per thousand </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Natural growth rate </td>
                                            <td>15.7</td>
                                            <td>19.8</td>
                                            <td>Population per thousand </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td> Infant mortality</td>
                                            <td>55 </td>
                                            <td>72 </td>
                                            <td>Population per thousand </td>
                                        </tr>
                                        <tr>
                                            <th colSpan="5"></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li>
                                <a src="">
                                    RS BULLETIN (VOLUME 44 No.1 OCTOBER 2009)
                                </a>
                            </li>
                        </>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen6(!open6)}
                aria-controls="example-collapse-text_06"
                aria-expanded={open6}
                className="button"
            >
                D.D.U.
            </li>
            <Collapse in={open6}>
                <li id="example-collapse-text_06" className="ddu">
                    <ul>
                        <li>
                            <ol>
                                <p className="crs_para_heading">
                                    {" "}
                                    Census 2001 publication in this Directorate
                                    is available for sale in hard and soft copy.
                                </p>
                                <li>
                                    Hard and soft copies can be obtained by cash
                                    payment in person or publications can be
                                    obtained by sending a Demand Draft in favor
                                    of "Assistant Director, Directorate of
                                    Census Operations, Madhya Pradesh, Bhopal".
                                </li>
                                <li>
                                    Speed ​​post charge per cd 30 / - amount and
                                    speed post charges will be applicable
                                    according to weight for books.
                                </li>
                                <li>
                                    {" "}
                                    On purchasing census products, the following
                                    discounts are given as per the rules-
                                </li>
                                <li>
                                    <ul>
                                        <li>Central government office </li>
                                        <li>State government office </li>
                                        <li>Research Scholar and Students </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                All publications related to pre-census 2001
                                census are available in hard copy only for data
                                users in the Library Room of Directorate
                                (Reference).
                            </p>
                        </li>
                        <li>
                            <table
                                class="table table-bordered"
                                style={{
                                    fontSize: "1.8rem",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <td scope="col">ST-1 </td>
                                        <td scope="col">
                                            MAIN WORKERS CLASSIFIED BY
                                            INDUSTRIAL CATEGORY, AGE AND SEX
                                            (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ST-2</td>
                                        <td>
                                            MAIN WORKERS CLASSIFIED BY
                                            INDUSTRIAL CATEGORY, EDUCATIONAL
                                            LEVEL AND SEX (FOR EACH TRIBE
                                            SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-3 </td>
                                        <td>
                                            MARGINAL WORKERS CLASSIFIED BY
                                            INDUSTRIAL, CATEGORY, AGE AND SEX
                                            (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-4</td>
                                        <td>
                                            MARGINAL WORKERS CLASSIFIED BY
                                            INDUSTRIAL CATEGORY, EDUCATIONAL
                                            LEVEL AND SEX (FOR EACH TRIBE
                                            SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-5</td>
                                        <td>
                                            MARGINAL WORKERS AND NON-WORKERS
                                            SEEKING / AVAILABLE FOR WORK
                                            CLASSIFIED BY EDUCATIONAL LEVEL, AGE
                                            AND SEX (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-6 </td>
                                        <td>
                                            OCCUPATIONAL CLASSIFICATION OF MAIN
                                            WORKERS AND MARGINAL WORKERS OTHER
                                            THAN CULTIVATORS AND AGRICULTURAL
                                            LABOURERS BY AGE AND SEX (FOR EACH
                                            TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-7</td>
                                        <td>
                                            MARITAL STATUS BY AGE AND SEX (FOR
                                            EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-8</td>
                                        <td>
                                            EDUCATIONAL LEVEL BY AGE AND SEX FOR
                                            POPULATION AGE 7 AND ABOVE (FOR EACH
                                            TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-8 </td>
                                        <td>
                                            APPENDIX EDUCATIONAL LEVEL BY SEX
                                            FOR POPULATION AGE 7 AND ABOVE (FOR
                                            EACH TRIBE SEPARATELY{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            EDUCATIONAL LEVEL BY SEX FOR
                                            POPULATION AGE 7 AND ABOVE (FOR EACH
                                            TRIBE SEPARATELY{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-9 </td>
                                        <td>
                                            POPULATION ATTENDING EDUCATIONAL
                                            INSTITUTIONS BY AGE, SEX AND TYPE OF
                                            EDUCATIONAL INSTITUTION (FOR EACH
                                            TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-9 </td>
                                        <td>
                                            POPULATION ATTENDING EDUCATIONAL
                                            INSTITUTIONS BY AGE, SEX AND TYPE OF
                                            EDUCATIONAL INSTITUTION (FOR EACH
                                            TRIBE SEPARATELY) (CONCLD.){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-10</td>
                                        <td>
                                            POPULATION AGE 5-19 ATTENDING SCHOOL
                                            / COLLEGE BY ECONOMIC ACTIVITY
                                            STATUS AND SEX (FOR EACH TRIBE
                                            SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-11 </td>
                                        <td>
                                            NUMBER OF WOMEN AND EVER MARRIED
                                            WOMEN BY PRESENT AGE, PARITY AND
                                            TOTAL CHILDREN EVER BORN BY SEX (FOR
                                            SELECTED TRIBES ONLY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-12</td>
                                        <td>
                                            NUMBER OF WOMEN AND EVER MARRIED
                                            WOMEN BY PRESENT AGE, NUMBER OF
                                            SURVIVING CHILDREN AND TOTAL
                                            SURVIVING CHILDREN BY SEX (FOR
                                            SELECTED TRIBES ONLY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-13 </td>
                                        <td>
                                            NUMBER OF WOMEN AND CURRENTLY
                                            MARRIED WOMEN BY PRESENT AGE, NUMBER
                                            OF BIRTH LAST YEAR BY SEX AND BIRTH
                                            ORDER (FOR SELECTED TRIBES ONLY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-14 </td>
                                        <td>
                                            SCHEDULED TRIBE POPULATION BY
                                            RELIGIOUS COMMUNITY (FOR EACH TRIBE
                                            SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-14</td>
                                        <td>APPENDIX </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            SCHEDULED TRIBES BY MOTHER TONGUE
                                            (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-15</td>
                                        <td>
                                            SCHEDULED TRIBES BY MOTHER TONGUE
                                            (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ST-16 </td>
                                        <td>
                                            BILINGUALISM FOR SCHEDULED TRIBES
                                            (FOR EACH TRIBE SEPARATELY){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Note </td>
                                        <td>
                                            per table @ Rs.10 / - and Rs.60 / -
                                            other charges (Rs.30 for Media
                                            charges + Rs.30 / - CD Charges){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen7(!open7)}
                aria-controls="example-collapse-text_07"
                aria-expanded={open7}
                className="button"
            >
                Functions and Activities of District Census Handbook Room
            </li>
            <Collapse in={open7}>
                <li id="example-collapse-text_07" className="room">
                    <ul>
                        <li>
                            <p>
                                For the smooth functioning of the census work,
                                one Census Directorate has been set up in each
                                state, where apart from census data, non-census
                                data is also collected, including village / town
                                directory and social studies etc.
                            </p>
                        </li>
                        <li>
                            <p>
                                Village and town directory panel each lot of
                                information related to the village and the town
                                is set up in the Directorate (in rural areas
                                related to the toll collector and urban areas
                                concernedThrough the Municipal Corporation /
                                Commissioner Municipal Corporation), they are
                                collected and examined. Rural and urban charge
                                officers are sent blank schedules from the
                                directorate and the information of various
                                departments is called, in which the source of
                                information is also written. On receipt of the
                                filled schedules, they are examined in the room,
                                after which the data is finalized and the data
                                is sent to the other room (data center) of the
                                directorate for keying.
                            </p>
                        </li>
                        <li>
                            <p>
                                D.C.H.B. For the publication of the (District
                                Census Handbook), the work of writing analytical
                                commentary is done by senior officers based on
                                the data received district-wise.
                            </p>
                        </li>
                        <li>
                            <p>
                                The village directory contains information about
                                the identity details of each village, available
                                educational, medical, water and sanitation,
                                communication and transport bank loans,
                                electricity / fuel, land use and main
                                agricultural commodities.
                            </p>
                        </li>
                        <li>
                            <p>
                                Blockwise information is collected in the city
                                directory just like the village directory.
                                Information is collected from block-1 to
                                section-8 in the city directory . History of the
                                status and development of the city in section-1,
                                geographical aspects in section-2, civic and
                                other facilities in section-3, medical in
                                section-4, educational entertainment in
                                culture-culture in section-5, industry and
                                banking in section-6 And in section 7, separate
                                slum- wise information about citizens and other
                                facilities is collected in slum settlements . In
                                section 8, if a city is decorated with its
                                specialty, then its information is given.
                            </p>
                        </li>
                        <li>
                            <p>
                                The district census handbook was earlier
                                published by the state government, currently it
                                is being published by the state government in a
                                few states and in most states it is published by
                                the census offices only. In this, all the
                                information is related to the general public ,
                                which is very important in the formulation of
                                various schemes of rural / urban development in
                                the state.
                            </p>
                        </li>
                        <li>
                            <p>
                                Information in the form of parts A and B is
                                collected in the District Census Handbook. A
                                part contains information about village and city
                                directory and primary part of census in B
                                section. Under analytical commentary, tables
                                numbered 1 to 52 and 9 details sheets and Annex
                                8 in the Village Directory and 7 Annexes in the
                                City Directory are shown in which the various
                                figures of the district are mentioned by item
                                and subject.
                            </p>
                        </li>
                        <li>
                            <p>
                                Charge-wise details of unscheduled schedules of
                                village / town directory from districts{" "}
                            </p>
                            <table
                                class="table table-bordered"
                                style={{
                                    fontSize: "1.8rem",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">
                                            District / Municipal Corporation{" "}
                                        </th>
                                        <th scope="col">
                                            Village / Town Directory Schedule
                                            Names of Unspent Charges (N.P.,
                                            N.P., J.No.){" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Damoh</td>
                                        <td>
                                            <ol>
                                                <li>
                                                    Name of Tehsil Patharia
                                                    Charge Narsinghgarh (Census
                                                    City){" "}
                                                </li>
                                                <li>
                                                    Name of Tehsil Damoh Charge
                                                    Hirdaypur (Census City){" "}
                                                </li>
                                                <li>
                                                    Name of Tehsil Damoh Charge
                                                    of Vasatarkheda (Census
                                                    City)
                                                </li>
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            Name of Tehsil Chhatarpur Charge,
                                            Amanganj (Census City)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Satna</td>
                                        <td>
                                            1. Name of Tehsil Raghurajnagar
                                            Charge Madhavgarh (Census City){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Rewa</td>
                                        <td>
                                            1. Tehsil Tayuthar (Rural Charge){" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Singrauli</td>
                                        <td>
                                            1. Name of Tehsil Chitrangi Charge
                                            Naudia (Census City)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Bhopal</td>
                                        <td>1. Bhopal Municipal Corporation</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Narsinghpur</td>
                                        <td>
                                            {" "}
                                            <ol>
                                                <li>
                                                    Name of Tehsil Gotegaon
                                                    Charge Gotegaon
                                                    (Municipality){" "}
                                                </li>
                                                <li>
                                                    Name of Tehsil Gadarwara
                                                    Charge Chichli (Census Town)
                                                </li>
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Jabalpur</td>
                                        <td>
                                            {" "}
                                            <ol>
                                                <li>Municipal Corporation</li>
                                                <li>Vehicle Factory</li>
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Suture</td>
                                        <td>
                                            1. Name of Tehsil Chhapara Charge
                                            Dogaria Chhapara (Census City)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen8(!open8)}
                aria-controls="example-collapse-text_08"
                aria-expanded={open8}
                className="button"
            >
                D.C.H.B.
            </li>
            <Collapse in={open8}>
                <li id="example-collapse-text_08" className="dchb">
                    <ul>
                        <li>
                            <p className="crs_para_heading">Background </p>
                            <ul>
                                <li>
                                    The District Census Handbook has been
                                    continuously published by the Census
                                    Organization since 1951 with some changes /
                                    modifications. It is a valuable publication
                                    providing data to plan makers and
                                    researchers and academics. Before 1951, it
                                    used to have information about village
                                    directory, data related to villages, names
                                    of villages and total population etc. The
                                    district census booklet provides information
                                    about some of the basic demographic and
                                    economic social characteristics of villages
                                    and towns and the availability of certain
                                    civic amenities.
                                </li>
                                <li>
                                    Under the district census booklet, various
                                    items have increased in the area of ​​data
                                    collection at the village and city level,
                                    based on the development in the period
                                    between two census. This increase is based
                                    on the demand of the planners.
                                </li>
                                <li>
                                    The district census handbook was earlier
                                    published by the state government, currently
                                    it is being published by the state
                                    government in a few states and in most of
                                    the states it is published by the census
                                    offices only. In this, all information is
                                    related to the general public, which is very
                                    important in the formulation of various
                                    schemes of rural / urban development in the
                                    state.
                                </li>
                                <li>
                                    Information in the form of parts A and B is
                                    collected in the District Census Handbook. A
                                    part contains information about village and
                                    city directory and primary part of census in
                                    B section. Under the analytical note,
                                    information is shown in table numbers 1 to
                                    52 and 9 details sheets and Annex 8 in the
                                    Village Directory and Annex 7 in the
                                    Municipal Directory, in which various
                                    statistics of the district are mentioned by
                                    item and subject.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                {" "}
                                District census handbook 1961:{" "}
                            </p>
                            <p>
                                {" "}
                                It contained information about district census
                                tables, village directory, city directory and
                                primary census summary.
                            </p>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                {" "}
                                District Census Handbook 1971:
                            </p>
                            <ul>
                                <p> This had three parts as follows. </p>
                                <li>
                                    --> Part A - Village Director and City
                                    Directory{" "}
                                </li>
                                <li>
                                    --> Part B - Village Directory and City
                                    Directory, Primary Census Summary{" "}
                                </li>
                                <li>
                                    --> Part C - Analytical Report,
                                    Administrative Statistics and PCA And based
                                    on the facilities available in the villages,
                                    the districts of the districts are included.{" "}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                District Census Handbook 1981:{" "}
                            </p>
                            <ul>
                                <p>It had two parts - </p>
                                <li>
                                    --> Part A - Village Director and City
                                    Directory{" "}
                                </li>
                                <li>
                                    --> Part B - Primary Census Summary
                                    Statistics covering the Scheduled Castes and
                                    Scheduled Tribes at the Municipal Directory
                                    and Tehsil and Municipal Village level. All
                                    the facilities except electricity were
                                    provided together in the village directory
                                    and if no facility was available in that
                                    village, then distance was given to the
                                    nearest place in the broad areas where this
                                    facility was available.
                                </li>
                            </ul>
                            <p>
                                Some new items like adult literacy, primary
                                health sub-centers and community health workers
                                were also informed in the village to meet some
                                requirements of the minimum requirement program.{" "}
                            </p>
                            <p>
                                Details of facilities available in slums in
                                class I and class II towns were also given in
                                the city directory.
                            </p>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                {" "}
                                District Census Handbook 1991:{" "}
                            </p>
                            <p>
                                {" "}
                                The method of presentation of District Census
                                Handbook was more or less the same as that
                                adopted in 1981. Under the other changes,
                                industrial classification was given in nine
                                categories instead of four industrial
                                categories. The primary census abstract included
                                a female-wise population of 0-6 age group to
                                arrive at a reliable literacy rate.
                            </p>
                            <p>
                                An important point of the 1991 census is that in
                                place of data at the traditional tehsil / taluk
                                level, publication of data at panchayat level
                                will help in creating developmental schemes at
                                micro level.{" "}
                            </p>
                        </li>

                        <li>
                            <p className="crs_para_heading">
                                {" "}
                                District Census Handbook-2001:{" "}
                            </p>
                            <p>
                                Under Census 2001 more information is provided
                                as follows-{" "}
                            </p>
                            <p>
                                Village directory banking, entertainment and
                                cultural facilities and other facilities like
                                newspapers and magazines were included. Income
                                expenditure details of the Gram Panchayat, main
                                products manufactured and land use information
                                in each village were also made available. Apart
                                from this, facilities of educational facilities
                                (ie primary, middle school and colleges) and
                                medical facilities (namely allopathic and
                                primary health centers), post offices (post
                                office, telegraph house and telephone backing)
                                (commerce and co-operative banks) etc., if there
                                are no available wages in the village where
                                facilities are available .{" "}
                            </p>
                            <p>
                                {" "}
                                --> All the slums were included in place of
                                notified slums of class I and class II under the
                                city directory.
                            </p>
                            <p> --> Cross classifieds tables were included.</p>
                            <p>
                                {" "}
                                Important characteristics of districts were
                                given.
                            </p>
                            <p>
                                {" "}
                                Analytical statement of mean age based on
                                fertility, mortality census 1991.
                            </p>
                            <p>
                                {" "}
                                During the period 1991–2001, comments related to
                                migration details, main religion, marital
                                status, age, woman, male, mother tongue and
                                social characteristics… according to place of
                                birth / last residence were included.
                            </p>
                            <p>
                                {" "}
                                Keeping in mind the future requirements, an
                                eight digit permanent location code number was
                                given to all villages and towns.
                            </p>
                            <p>
                                {" "}
                                According to the instructions made in the
                                Maharashtrian office of India in all the states
                                and union territories, the data were collected
                                and compiled according to the training given to
                                the charge officers of the states by the
                                officers of the Directorate of Census
                                Operations.
                            </p>
                            <p>
                                {" "}
                                All data was finalized by the officer-in-charge
                                of the District Census Handbook of the Census
                                Work Directorate.
                            </p>
                        </li>
                        <li>
                            <p className="crs_para_heading">
                                {" "}
                                District Census Handbook-2011:{" "}
                            </p>
                            <ul>
                                <p>
                                    {" "}
                                    The District Census Handbook of Census-2011,
                                    as before, will have two parts as follows:{" "}
                                </p>
                                <li>
                                    --> Part A - Village and Town Directory{" "}
                                </li>
                                <li>
                                    --> Part B - Primary Census Summary (PCA){" "}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen9(!open9)}
                aria-controls="example-collapse-text_09"
                aria-expanded={open9}
                className="button"
            >
                Annual Health Survey
            </li>
            <Collapse in={open9}>
                <li id="example-collapse-text_09">
                    <ul>
                        <li>
                            <p>
                                The Annual Health Survey (AHS), at the request
                                of the National Population Commission, the Prime
                                Minister's Office and the Planning Commission,
                                to identify important demographic and health
                                indicators at the district level and to measure
                                the rate of changes in them on an ongoing basis.
                                It is being done so that the utility of various
                                health related interventions including National
                                Rural Health Mission (NRHM) can be examined. The
                                annual health survey includes, among other
                                things, crude birth rate (CBR), crude death rate
                                (CDR), infant mortality rate (IMR), total
                                fertility rate ( TFR),Maternal Death Ratio
                                (MMR), sex-ratio indicators at birth and other
                                indicators of maternal and child care, family
                                planning practices, etc. and the changes
                                occurring in them on an annual basis will be at
                                the appropriate levels.
                            </p>
                        </li>
                        <li>
                            <p>
                                The Empowered Action Group (EAG) states (Bihar,
                                Jharkhand, Madhya Pradesh, Chhattisgarh, Odisha,
                                Rajasthan, Uttar Pradesh and Uttarakhand) and
                                Assam, starting the Annual Health Survey from
                                2010-11 during the mission period 2007-2012
                                (Which will be further referred to as AHS
                                states), is being implemented in all 284
                                districts. The survey will be conducted every
                                year in 20252 sample units selected on
                                statistical basis (in urban census count blocks
                                and in rural areas in villages or villages with
                                a population of more than 2000 / in part), which
                                9a .Are spread over the states and have a total
                                population of about 1.82 crores and the number
                                of families is 36 lakhs. In each district, about
                                70 sample units are being covered in rural
                                areas, about 1000 population in village and
                                about 650 population in counting blocks in urban
                                areas. The district-wise number of sample units,
                                along with the rural-urban division, has been
                                determined and the identification of those
                                sample units and their boundaries has been done
                                by the concerned directorate.82 crore and the
                                number of families is 36 lakh. In each district,
                                about 70 sample units are being covered in rural
                                areas, about 1000 population in village and
                                about 650 population in counting blocks in urban
                                areas. The district-wise number of sample units,
                                along with the rural-urban division, has been
                                determined and the identification of those
                                sample units and their boundaries has been done
                                by the concerned directorate.82 crore and the
                                number of families is 36 lakh. In each district,
                                about 70 sample units are being covered in rural
                                areas, about 1000 population in village and
                                about 650 population in counting blocks in urban
                                areas. The district-wise number of sample units,
                                along with the rural-urban division, has been
                                determined and the identification of those
                                sample units and their boundaries has been done
                                by the concerned directorate.With the division
                                of rural-urban has been determined and the
                                identification of those sample units and the
                                determination of their boundaries has been done
                                by the concerned directorate.With the division
                                of rural-urban has been determined and the
                                identification of those sample units and the
                                determination of their boundaries has been done
                                by the concerned directorate.
                            </p>
                        </li>
                        <li>
                            <p>
                                A total of 2557 units have been selected for the
                                annual health survey in Madhya Pradesh state,
                                which has 897 urban units and 1660 rural units.{" "}
                            </p>
                            <ul>
                                <li>
                                    Out of total 1660 rural units, there are
                                    1190 units in section I and 470 units in
                                    section II.
                                </li>
                                <li>
                                    Those villages whose population is 2000 or
                                    less, and those whose population is 2000 or
                                    more, were included in section II.{" "}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                Under Section II, in the villages of 2000 or
                                more population, those counting blocks with
                                uniformity and population of 2000 or less were
                                selected.{" "}
                            </p>
                        </li>
                        <li></li>
                    </ul>
                </li>
            </Collapse>
            <li
                onClick={() => setOpen10(!open10)}
                aria-controls="example-collapse-text_10"
                aria-expanded={open10}
                className="button"
            >
                C.T.U
            </li>
            <Collapse in={open10}>
                <li id="example-collapse-text_10" className="ctu">
                    <ul>
                        <li>
                            After changing the jurisdiction, updating the list
                            of districts, tehsils and cities of the state and
                            preparing a master directory giving code number.{" "}
                        </li>
                        <li>
                            MP of TABLE A-II Preparation of data up to 1901 by
                            doing recasting work at the district level based on
                            the perimeter of the office.{" "}
                        </li>
                        <li>
                            Compilation of final data of district, tehsil and
                            cities on completion of second phase of population
                            computation, compilation of population, population
                            of man, woman, 0-6 age group and literacy.{" "}
                        </li>
                        <li>
                            Compilation of various tables of Paper I based on
                            the final data.{" "}
                        </li>
                        <li>
                            M.P. Compilation of tables of papers II, II as per
                            the instructions of the office.{" "}
                        </li>
                        <li>
                            Examination of various tables based on tabulation
                            plan.{" "}
                        </li>
                        <li>
                            Recasting Census 2001 data, examining H-Series
                            tables based on Houselisting data.{" "}
                        </li>
                        <li>
                            Finalization of primary census abstract after
                            examining the final figures.{" "}
                        </li>
                        <li>
                            Recasting the data of Census 2001, examining the
                            tables of religion.{" "}
                        </li>
                        <li>Scrutiny of SC / ST data. </li>
                        <li>Examination of disabilities tables. </li>
                        <li>Preparation of various types of datasheets. </li>
                        <li>
                            Table II of Part II A, A-1, A-2, A-3, A-4 Compiling
                            various types of details and attachments on the
                            basis of office circular.{" "}
                        </li>
                    </ul>{" "}
                </li>
            </Collapse>
        </>
    );
};

export default AboutDirectorateOfCensus;
