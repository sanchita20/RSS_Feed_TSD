import React from 'react';
import FeedItems from './FeedItems';

const MainScreen = (props) => (
	<div>
        <div className="mainScreen_div">
        <h1>{props.data.feed.description}</h1>
        <h4>{props.data.feed.title}</h4>
        <h5>{props.data.feed.url}</h5>
        </div>
        {
            props.data.items.map((item,indx)=>(
                <FeedItems 
                    key={indx}
                    item={item} 
                    count={indx + 1}/>
            ))
        }
	</div>
);

export default MainScreen;