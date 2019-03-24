import React from 'react';
import Grid from '@material-ui/core/Grid'
import MainScreen from './MainScreen'
import SearchBox from './SearchBox';
import UrlList from './UrlList';
import { fetchUrl } from '../services/fetchUrl';

class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    state = {
        options: [],
        data: null,
        activeCard:null
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.state.options.unshift(option);
        
        this.setState((prevState) => ({
            options: this.state.options
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleCardClick = (props) => {
        this.setState({activeCard: props.id});
        
        let url = props.optionText;
        const data = fetchUrl.fetch(url).then(response => {
            this.setState({ data: response })
            // receivedData = Object.assign(response);
            // return receivedData;
        });
    }

    render() {
        return (
            <Grid md={12}>
            <div className="mainContainer">
                <Grid md={3} className="line">
            
                <div className="mainContainer__sidebar">
                    <SearchBox
                        handleAddOption={this.handleAddOption} />
                    <UrlList
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                        handleCardClick={this.handleCardClick}
                        activeCard={this.state.activeCard}
                    />
                </div>
                </Grid>
                <Grid md={9}>
                <div className={"mainContainer__sidebar"}>
                {this.state.data !== null && <MainScreen data={this.state.data} />}
                </div>
                </Grid>
            </div>
            </Grid>
            
        );
    }
}

export default ArticleContainer;