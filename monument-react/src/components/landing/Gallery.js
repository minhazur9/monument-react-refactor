import React from 'react';
import Image1 from '../../images/gallery_1.jpg';
import Image2 from '../../images/gallery_2.jpg';
import Image3 from '../../images/gallery_3.jpg';
import Image4 from '../../images/gallery_4.jpg';
import Image5 from '../../images/gallery_5.jpg';
import Image6 from '../../images/gallery_6.jpg';

function Gallery(props) {
    return (
        <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
				<img src={Image1} alt=""/>
				<img src={Image3} alt=""/>
				<img src={Image4} alt=""/>
				<img src={Image2} alt=""/>
				<img src={Image5} alt=""/>
				<img src={Image6} alt=""/>
			</div>
		</div>
	</section>
    )
}

export default Gallery