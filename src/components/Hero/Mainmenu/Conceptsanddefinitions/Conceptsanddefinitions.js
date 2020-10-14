import React from "react";
import "./Conceptsanddefinitions.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import Img from "./img.jpg";

const Conceptsanddefinitions = (props) => {
    const style = {
        color: "var(--mainmenu-main-heading-color)",
        marginRight: "1rem",
    };
    return (
        <>
            <div className="concept">
                <ul className="sub_heading">
                    <li>
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        House listing block{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        The premises{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        The building{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        Census house{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        family{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        Normal family{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        Institutional family{" "}
                    </li>
                    <li>
                        {" "}
                        <FontAwesomeIcon
                            icon={faHandPointRight}
                            style={style}
                        />{" "}
                        Homeless family{" "}
                    </li>
                </ul>

                <p className="concept_heading">House listing block </p>
                <ul>
                    <li>
                        A "special area" allotted to a "special enumerator " for
                        the purpose of numbering houses and carrying out census
                        operations related to house listing and census of
                        houses.
                    </li>
                    <li>
                        <img src={Img} />
                    </li>
                </ul>

                <p className="concept_heading">
                    Important points for enumerators
                </p>
                <ul>
                    <li>
                        ---> The status of the house listing block will be
                        recorded in your appointment letter (check)
                    </li>
                    <li>
                        ---> Defined area: Identify your block - Contact the
                        supervisor in case of doubt.
                    </li>
                    <li> ---> The boundaries should be clearly marked.</li>
                    <li>
                        ---> Do not leave any structure / building in your area
                        .
                    </li>
                    <li>
                        ---> Make sure that no building / family is left out of
                        the population.
                    </li>
                    <li> ---> Count families in one place only.</li>
                </ul>

                <p className="concept_heading">The premises</p>
                <ul>
                    <li>
                        {" "}
                        --->Building with land or common place attached to it.
                    </li>
                    <li>
                        {" "}
                        ---> It is not necessary to have a wall or a siege on
                        the premises.
                    </li>
                    <li>
                        {" "}
                        ---> The land or shared space available to the family
                        should be considered as "premises".
                    </li>
                </ul>

                <p className="concept_heading">The building</p>
                <ul>
                    <li>
                        ---> Normally the only structure on the ground which has
                        four walls and one roof.
                    </li>
                    <li>
                        ---> Can be composed of one or more constituent units.
                        <ul>
                            <li style={{marginLeft: "3rem"}}>
                                ---> Use for residential (residential) or
                            </li>

                            <li style={{marginLeft: "3rem"}}>
                                ---> Used as shop, commercial house, office,
                                factory, workshop, workshop, school, place of
                                entertainment, place of worship, warehouse,
                                store etc.
                            </li>
                        </ul>
                    </li>
                    <li>
                        ---> The building and its units can be used for more
                        than one purpose - such as |
                    </li>
                    <li>
                        --->Housing cum Shop, Housing cum Workshop, Housing cum
                        Office, Housing cum Dr. Clinic, etc.
                    </li>
                </ul>

                <p className="concept_heading">Census building </p>
                <ul>
                    <li>
                        {" "}
                        ---> Census houses, is part of a building or building
                        use or recognize a separate entity from and also went as
                        which opens the main entrance from different street or
                        joint compound or stairs etc. The
                    </li>
                    <li> ---> Empty or in any other use.</li>
                    <li>
                        {" "}
                        ---> Can be in residential or non-residential use or
                        both types of use.
                    </li>
                    <li>
                        ---> Example: If a building has many apartments or
                        blocks and it is separated from each other and the
                        entrance of each of them is open in a common enclosure
                        leading to the road, common stairs or main gate, then
                        these different mass count. Will consider the house.
                    </li>
                </ul>

                <p className="concept_heading">family</p>
                <ul>
                    <li>
                        ---> It is called a group of people who usually live
                        together and if the need for work does not force them,
                        then eat food from the same kitchen. The family can be
                        of people who are related or not related to each other,
                        or they can have both types of people.
                    </li>
                    <li>
                        ---> Every person who is unrelated living together but
                        does not eat food from the same kitchen should be
                        considered as a separate family.
                    </li>
                    <li>
                        {" "}
                        ---> The family may consist of one or more members.
                    </li>
                    <li>
                        {" "}
                        ---> There are three types of families: Normal Family,
                        Institutional Family, Homeless Family{" "}
                    </li>
                    <p>
                        {" "}
                        ---> In the list of houses , only information about
                        general and institutional families is collected.
                    </p>
                </ul>

                <p className="concept_heading">Normal family</p>
                <ul>
                    <li>
                        {" "}
                        ---> There is usually a group of people who usually live
                        together and get food from a shared kitchen unless the
                        contingency of work prevents any of them from doing so.
                        Those people can be related to each other or unrelated
                        or a mixture of both.
                    </li>
                    <li>
                        {" "}
                        ---> A group of people who are unrelated to each other
                        but do not get food from the shared kitchen, in such a
                        situation, each such person should be considered as a
                        separate family.
                    </li>
                    <li> ---> The family can be of one or more persons.</li>
                    <li>
                        {" "}
                        ---> In some cases it can be difficult to apply the
                        definition of family accurately, for example if husband
                        and wife Or living with a group of related individuals,
                        but use asked for some reason the food out of the | Even
                        then they will fall under the category of normal family.
                    </li>
                </ul>

                <p className="concept_heading">Institutional family</p>
                <ul>
                    <li>
                        ---> A group of people living in an institution who have
                        no relationship among themselves, but live together and
                        eat food from a common kitchen. Examples of
                        institutional family are - boarding house, mess, hostel,
                        hotel, deliverance house, monk house, jail, ashram, old
                        age home, children's home, orphanage etc.
                    </li>
                    <li>
                        {" "}
                        ---> Note: If the families of the warden and peon living
                        within the institute live in different census houses and
                        cook their food separately, then each such family should
                        be considered as a separate normal family.
                    </li>
                </ul>

                <p className="concept_heading">
                    {" "}
                    Registered Paying Guest Accommodation
                </p>
                <ul>
                    <li>
                        {" "}
                        ---> Institutional family will be considered provided
                        that the paying guest accommodation is registered.
                    </li>
                    <li>
                        {" "}
                        ---> If not registered, then it should be considered as
                        normal family.
                    </li>
                    <li>
                        ---> If the residents of the paying guest accommodation
                        are not taking food from the shared kitchen, then each
                        such resident should be considered as a separate normal
                        family.
                    </li>
                </ul>

                <p className="concept_heading">Homeless family</p>
                <ul>
                    <li>
                        ---> Those who do not live in family buildings or census
                        houses.
                    </li>
                    <li>
                        ---> For example, in pipes that are placed under the
                        edge of the road or in the open, pedestrian, land, fly
                        under overs or in open places or places of worship on
                        the stairs, halls, railway platforms, etc. live
                    </li>
                    <li>
                        {" "}
                        ---> Information regarding homeless families is not to
                        be collected during house listing.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Conceptsanddefinitions;
