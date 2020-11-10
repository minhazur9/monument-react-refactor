import React from 'react';
import articleImageOne from '../../../images/article_1.jpg';

function ArticleOne(props) {
    return (
			<article className="col-third">
				<img src={articleImageOne} alt=""/>
				<div>
					<h3>Issue Twenty &mdash; The Southwest</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.</p>
					<button>Read More</button>
				</div>
			</article>
    )
}

export default ArticleOne;