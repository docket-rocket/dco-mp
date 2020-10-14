import React, {useState} from "react";
// import "./App.css";
import Navigation from "./components/Navigation/Naviagtion";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
    const [crtval, preval] = useState({
        hindi: false,
        english: true,
    });

    const switchHindiLanguage = () => {
        preval({
            hindi: true,
            english: false,
        });
    };
    const switchEnglishLanguage = () => {
        preval({
            hindi: false,
            english: true,
        });
    };
    return (
        <>
            <Navigation></Navigation>
            <Hero translate={crtval}></Hero>
            <Footer></Footer>
        </>
    );
}

export default App;
