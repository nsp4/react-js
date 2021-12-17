import React, { Component } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            Online Customer Service Centre
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
  
                <NavLink className="nav-link active" aria-current="page" to="/home">
               
                
                  <i class="fas fa-home"/>&nbsp;
                  Home
                
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
              
                <i class="fas fa-home"/>&nbsp;
                  About us
                </NavLink>

              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <NavLink className="dropdown-item" to="/addoperator">
                  Admin
                </NavLink>
                <li className="dropdown-divider"></li>
                <NavLink className="dropdown-item" to="/customer">
                  Customer
                </NavLink>
              
                  <li>
                  <li className="dropdown-divider"></li>
                  <NavLink className="dropdown-item" to="/operator">
                  Operator
                </NavLink>
                
                  </li>
                  
                  
                </ul>
                
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
              
                <i class="fas fa-home"/>&nbsp;
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/regCustomer">
               
               <i class="fas fa-home"/>&nbsp;
                  Register
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                    Logout
                
                  </NavLink>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
  /*handleDelete = (userId) => {
    axios
      .delete(`http://localhost:9090/api/removeCustomer/${customerId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const customer = this.state.customer.filter((s) => s.customerId!= customerId);
        this.setState({ customer: customer });
        alert(res.data.firstName+ " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };*/
  

            
            
            
          

    



