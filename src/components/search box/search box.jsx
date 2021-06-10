import React, { Component } from 'react';
import CardContainer from '../card container/card container';
import './styles/search box.css';

const name = require('@rstacruz/startup-name-generator');

class SearchBox extends Component{
	state = {
		cardTexts : []
	}
	render(){
		return (
			<div className="search-container">
				<div className="search-bar-container">
				<label for="userInput" className="hidden">Search</label>
					<input
						id="userInput"
						onChange={(event) => {
							this.setState({cardTexts : (event.target.value ? name(event.target.value) : [])})
							this.props.onInputTextChange(event.target.value)}
						}
						className="search-bar"
						type="text"
						name="SearchContent"
						autocomplete="off"
						placeholder={this.props.defaultSeachBarContent}
					></input>
				</div>
				<CardContainer cardTexts={this.state.cardTexts} />
			</div>
		);
	}
}

export default SearchBox;