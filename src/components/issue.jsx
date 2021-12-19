import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Issue extends React.Component {
    state = {

      issue: [],
    };

    componentDidMount() {
        console.log("componentDidMount");
        axios
          .get("http://localhost:9090/api/getallIssues/call")
          .then((res) => {
            console.log(res);
            this.setState({ issue: res.data });
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    
      render() {
        return (
          <div className="w-75 mx-auto">
          
                      
              
            <table className="table">
              <thead>
                <tr>
                  <th>IssueId</th>
                  <th>Description</th>
                  <th>IssueStatus</th>
                  <th>IssueType</th>
    
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.issue.map((s) => (
                  <tr>
                    <td>{s.issueId}</td>
                    <td>{s.description}</td>
                    <td>{s.issueStatus}</td>
                    <td>{s.issueType}</td>
    
                    <td>
                      <Link
                        to={`/issue/update`}
                        className="btn btn-primary"
                      >
                        Update
                        </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(s.issueId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    
    export default Issue;

