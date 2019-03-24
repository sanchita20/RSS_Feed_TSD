import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {

    state ={
		error: undefined
	}

    handleAddOption =(e)=> {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));

		if(!error){
			e.target.elements.option.value = '';
		}
	}
    
    render() {
        return (
            <div className="search_box">
                <form className="search_box__form" onSubmit={this.handleAddOption}>
                    <input className="input_box" type="text" name="option" placeholder="Enter URL"/>
                    <button className="search_button">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;