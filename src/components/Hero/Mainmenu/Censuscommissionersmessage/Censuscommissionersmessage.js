import React from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Typical from "react-typical";
import "./Censuscommissionersmessage.css";

const Censuscommissionersmessage = (props) => {
    if (props.translate.hindi === true) {
        return (
            <>
                <div className="ccm">
                    <h1 className="ccm__main_heading">
                        <Typical
                            steps={[
                                "मैं अपनी ओर से और भारत के महारजिस्ट्रार एवम जनगणना आयुक्त के कार्यालय की ओर से आप सभी का  स्वागत करता हूँ जिन्हें जनगणना 2011 के इस महान राष्ट्रीय कार्य का हिस्सा बनने के लिए चयनित किया गया है |",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "1. आप में से प्रत्येक को संतोष होगा कि आप विश्व के सबसे बड़े प्रशासनिक कार्य का हिस्सा हैं | आप में से प्रत्येक की निष्ठा तथा कठिन परिश्रम ने ही जनगणना कार्य की सफलता में योगदान दिया है जो कि देश में 1872 से लगातार की जा रही है |",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "2. आप जो कार्य शुरु करने जा रहे हैं, वह नियोजन कार्य के लिए आधारभूत निविष्ट उपलब्ध कराने तथा हमारे राष्ट्र के  भविष्य के लिए बहुत बड़ा योगदान करेगा | इस प्रकार आप राष्ट्र निर्माण कार्यों का एक हिस्सा भी हैं |",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "3. मेरी आप सभी से अपील है कि आपको सौंपे गए इस कार्य को पूर्ण सटीकता से करते हुए जनगणना 2011 को  पूर्णतया सफल बनाना सुनिश्चित करें | इस महान राष्ट्रीय प्रयास के लिए मैं पुनः आप सभी को शुभकामनाएं देता हूँ |",
                                3000,
                            ]}
                        />{" "}
                    </h1>
                    <div className="ccm__footer_box">
                        <h1 className="ccm__footer">
                            <Typical
                                steps={["डॉ. विवेक जोशी, आई.ए.एस.", 3000]}
                            />{" "}
                        </h1>
                        <h1 className="ccm__footer">
                            <Typical steps={["रजिस्ट्रार जनरल & ", 3000]} />{" "}
                        </h1>
                        <h1 className="ccm__footer">
                            <Typical steps={["भारत के आयुक्त ", 3000]} />{" "}
                        </h1>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="ccm">
                    <h1 className="ccm__main_heading">
                        <Typical
                            steps={[
                                "I welcome all of you on behalf of myself and on behalf of the Office of the Registrar and Census Commissioner of India who have been selected to be a part of this great national work of Census 2011.",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "1. The dedication and hardwork of each of you has contributed to the success of the census work which is being done continuously since 1872 in the country",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "2. The work you are going to start will provide a major input for the planning work and will contribute a lot to the future of our nation.",
                                3000,
                            ]}
                        />
                    </h1>
                    <h1 className="ccm__heading">
                        <Typical
                            steps={[
                                "3. I appeal to all of you to ensure that Census 2011 is completely successful by doing this task assigned to you with complete accuracy.",
                                3000,
                            ]}
                        />{" "}
                    </h1>
                    <div className="ccm__footer_box">
                        <h1 className="ccm__footer">
                            <Typical steps={["Dr. Vivek Joshi, I.A.S", 3000]} />{" "}
                        </h1>
                        <h1 className="ccm__footer">
                            <Typical steps={["Registrar General & ", 3000]} />{" "}
                        </h1>
                        <h1 className="ccm__footer">
                            <Typical steps={["Commissioner Of India ", 3000]} />{" "}
                        </h1>
                    </div>
                </div>
            </>
        );
    }
};

export default Censuscommissionersmessage;
