import React from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import BlogText from '../components/blog/BlogText';
import About from '../components/blog/About';
import Comments from '../components/blog/Comments';

import './Blog.css';

function Blog() {
    return (
        <>
        <BlogHeader/>
        <div className="wrap grid-wrapper">
        <BlogText/>
        <About/>
        </div>
        <Comments/>
        </>
    )
}

export default Blog