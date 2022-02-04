import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

function About() {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1><br/>
            <p>
                Savoir expliquer comment faire un travail sans la
                moindre ambiguïté
                langage simple : des instructions pas élémentaires
            </p>

        </div>
    )
}

export default About