import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Issue from "./components/issue";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import {Route,Switch} from "react-router-dom";
import * as React from 'react';
import Customer from "./components/customer";
import RegCustomer from "./components/regcustomer";
import Operator from "./components/operator";
import RegOperator from "./components/regoperator";
import UpdateCustomer from "./components/updatecustomer";
import AddOperator from "./components/addoperator";
import UpdateOperator from "./components/updateoperator";
import CustomerDashboard from "./components/customerdashboard";
import Call from "./components/call";
import AboutUs from "./components/aboutus";


function App() {
  return (
    <div style={{backgroundImage:'url("./assets/img.jpg")',backgroundSize:'cover',height:'650px'}}>
     <Nav />
     
      <Switch>
    
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/issue" component={Issue}/>
        <Route path="/regcustomer" component={RegCustomer}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/updatecustomer" component={UpdateCustomer}/>
        <Route path="/operator/update/:operatorId" component={UpdateOperator}/>
        <Route path="/addoperator" component={AddOperator}/>
        <Route path="/regoperator" component={RegOperator}/>
        <Route path="/operator" component={Operator}/>
        <Route path="/call" component={Call} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/customerdashboard" component={CustomerDashboard}/>
        <Route component={PageNotFound}/>
      </Switch>  
     
    </div>
  );
}
export default App;
