import React from 'react';
import UrlItem from './UrlItem'

const UrlList = (props) => (
    <div>
        {props.options.length == 0 && <p>Please search for an URL to get started</p>}
        {
            props.options.map((option, index) => (
                <UrlItem
                    activeCard={props.activeCard}
                    key={option}
					id={index}
					optionText={option}
					count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    handleCardClick = {props.handleCardClick}
				/>
            ))
        }
    </div>
);

export default UrlList;