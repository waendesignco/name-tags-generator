import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };
  // this event handler is called when the form is submitted
  updateName = (event) => this.setState({ name: event.target.value });
  handleSubmit = (event) => {
    /* submit events cause the browser to refresh the page by 
  default. We don't want that, so we prevent it by calling
  this method on the submit event object: */
    event.preventDefault();
    this.props.addName(this.state.name);
    // update state and rerender with an empty input field
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
