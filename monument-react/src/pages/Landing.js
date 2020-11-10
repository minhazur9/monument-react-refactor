import React from 'react';
import Header from '../components/landing/LandingHeader';
import ArticleOne from '../components/landing/archive/ArticleOne';
import ArticleTwo from '../components/landing/archive/ArticleTwo';
import ArticleThree from '../components/landing/archive/ArticleThree';
import About from '../components/landing/About';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';

import './Landing.css';

function Landing(props) {
    return (
        <div>
            <Header/>
            <section>
		<h2>From the Archive</h2>

		<div className="grid-wrapper articles">
            <ArticleOne/>
            <ArticleTwo/>
            <ArticleThree/>
        </div>
        </section>
            <About/>
        <Gallery/>
        <Contact/>
        </div>
    );
}

export default Landing;