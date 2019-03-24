import React from 'react';
import Card from '@material-ui/core/Card';

const UrlItem = (props) => (
	<div className="option">
		<div onClick={(e) => { props.handleCardClick(props) }}>
			<p className="option__text">
				{props.optionText}
			</p>
		</div>
		<button
			className="button button--link"
			onClick={(e) => {
				props.handleDeleteOption(props.optionText);
			}}
		>
			remove
	</button>
	</div>
);

export default UrlItem;