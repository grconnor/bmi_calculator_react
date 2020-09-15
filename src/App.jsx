import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage});
  };

  render() {
    return (
      <div>
        <Form
          weight={this.state.wight}
          height={this.state.wight}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default App;
