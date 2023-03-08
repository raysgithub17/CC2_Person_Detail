import React, { Component } from "react";
import './UserFormStyle.css';
import axios from 'axios';
class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userid: "",
      username: "",
      email: "",
      password: "",
      submitted : false
    };
  }
  

  handleuseridChange = (e) => {
    this.setState({ userid: e.target.value });
  };
  handleusernameChange = (e) => {

    this.setState({ username: e.target.value });
  };
  handleemailChange = (e) => {

    this.setState({ email: e.target.value });
  };


  handlepasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preDefault();
    // Do something with the form data
    this.setState({submitted: true});

    const data = {
      userid: this.state.userid,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://127.0.0.1:8080/store', data);
    console.log(12);

  };

  render() {
    return (
      <div>
        <h1>ENTER THE DETAILS</h1>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="userid">User ID:</label>
            <input
              type="text"
              name="userid"
              id="userid"
              value={this.state.userid}
              onChange={this.handleuseridChange}
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleusernameChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleemailChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlepasswordChange}
            />
          </div>
          <button type="submit" className="post-button">
            POST
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
