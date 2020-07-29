import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input";

class App extends Component {
  state = {
    item: "",
    numbersList: []
  };

  handleValueChange = event => {
    this.setState({ item: event.target.value });
  };

  buttonHandler = () => {
    let temp = this.state.numbersList;
    this.setState({
      numbersList: [...temp, this.state.item],
      item: ""
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Input
            handleValue={this.state.item}
            handleChange={this.handleValueChange}
          />
          
          <h1> {this.state.item}</h1>
          <ul>
            {" "}
            {this.state.numbersList.map(newItem => {
              return <li>{newItem}</li>;
            })}
          </ul>
          <button onClick={this.buttonHandler}> Submit </button>
        </div>
      </div>
    );
  }
}


export default App