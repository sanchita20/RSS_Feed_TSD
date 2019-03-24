import React from 'react';

const FeedItems = (props) => (
	<div className="item_card">
        <h3>{props.count}.{props.item.title} - {props.item.pubDate.split(' ')[0]}</h3>
        <p>{props.item.content}</p>
	</div>
);

export default FeedItems;