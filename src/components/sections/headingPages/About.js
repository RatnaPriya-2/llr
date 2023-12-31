import React from 'react';

export default function About() {
    return (
        <article className="about-us" id="about">
            <section className="hero-text">
                <h1 id="about-title">Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/mario2.jpg')} alt="Mario and Adrian"></img>
                <img className="about-2" src={require('../../../assets/mario1.jpg')} alt="Mario and Adrian"></img>
            </section>
    </article>
    );
}