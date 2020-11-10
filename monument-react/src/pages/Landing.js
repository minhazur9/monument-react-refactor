import React from 'react';
import Header from '../components/LandingHeader';
import ArticleOne from '../components/Archive/ArticleOne';
import ArticleTwo from '../components/Archive/ArticleTwo';
import ArticleThree from '../components/Archive/ArticleThree';
import About from '../components/About';

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

        </div>
    );
}

export default Landing;