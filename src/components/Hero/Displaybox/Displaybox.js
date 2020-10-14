import React from "react";
import "./Displaybox.css";
import {Route, Switch} from "react-router-dom";

import Censuscommissionersmessage from "./../Mainmenu/Censuscommissionersmessage/Censuscommissionersmessage";
import Historicalbackground from "./../Mainmenu/Historicalbackground/Historicalbackground";
import Conceptsanddefinitions from "./../Mainmenu/Conceptsanddefinitions/Conceptsanddefinitions";
import Duties from "./../Mainmenu/Duties/Duties";
import Houseschedule from "./../Mainmenu/Houseschedule/Houseschedule";
import Actandrule from "../Mainmenu/Actandrule/Actandrule";
import Importantweblink from "../Mainmenu/Importantweblink/Importantweblink";
import Tender from "../Mainmenu/Tender/Tender";
import Download from "./../Download/Download";
import AboutDirectorateOfCensus from "./../Mainmenu/AboutDirectorateOfCensus/AboutDirectorateOfCensus";

const Displaybox = (props) => {
    return (
        <>
            <div className="display scroll1">
                <Switch>
                    <Route
                        path="/mainmenu/Censuscommissionersmessage"
                        component={() => (
                            <Censuscommissionersmessage
                                translate={props.translate}
                            />
                        )}
                    />
                    <Route
                        path="/mainmenu/AboutDirectorateOfCensus"
                        component={() => (
                            <AboutDirectorateOfCensus
                                translate={props.translate}
                            />
                        )}
                    />
                    <Route
                        path="/mainmenu/Historicalbackground"
                        component={() => (
                            <Historicalbackground translate={props.translate} />
                        )}
                    />
                    <Route
                        path="/mainmenu/Conceptsanddefinitions"
                        component={() => (
                            <Conceptsanddefinitions
                                translate={props.translate}
                            />
                        )}
                    />
                    <Route
                        path="/mainmenu/Duties"
                        component={() => <Duties translate={props.translate} />}
                    />
                    <Route
                        path="/mainmenu/Houseschedule"
                        component={() => (
                            <Houseschedule translate={props.translate} />
                        )}
                    />
                    <Route path="/mainmenu/actandrule" component={Actandrule} />
                    <Route
                        path="/mainmenu/importantweblink"
                        component={Importantweblink}
                    />
                    <Route path="/mainmenu/tenders" component={Tender} />
                    <Route path="/mainmenu/download" component={Download} />
                </Switch>
            </div>
        </>
    );
};

export default Displaybox;
