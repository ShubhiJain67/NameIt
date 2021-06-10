import React, { Component } from 'react';
import Search from '../search box/search box';
import './styles/app.css';

class App extends Component{
    state = {
        headerText : "NameIT!",
        defaultSeachBarContent : "Type Keywords",
        inputEmpty : true
    }

    onInputTextChange = (inputText) => {
        this.setState({inputEmpty : (inputText.length === 0)})
        console.log(this.state.inputEmpty);
    }
    render(){
        return (
            <div className="head-container">
                <div>
                    <img
                        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                        alt="Name It"
                        className = {`head-image ${this.state.inputEmpty ? "head-image-extended" : "head-image-compressed"}`}
                    />
                </div>
                <div>
                    <h1 className={`head-text ${this.state.inputEmpty ? "head-text-extended" : "head-text-compressed"}`}>{this.state.headerText}</h1>
                </div>
                <Search defaultSeachBarContent = {this.state.defaultSeachBarContent} onInputTextChange = {this.onInputTextChange}/>
            </div>
        );
    }
};

export default App;
