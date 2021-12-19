import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CustomerDashboard extends React.Component {
  state = {
    login: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .post("http://localhost:9090/api/login")
      .then((res) => {
        console.log(res);
        this.setState({ login: res.data });
      })
      .catch((err) => console.log(err));
  }
}
export default CustomerDashboard;