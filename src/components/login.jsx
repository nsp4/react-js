import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { TextField, Box, MenuItem, Paper, Button } from "@mui/material";
import axios from "axios";



const Login = () => {
  const history = useHistory();
  const roles = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Customer",
      label: "Customer",
    },
    {
      value: "Operator",
      label: "Operator",
    },
  ];

  const [loginData, setLoginData] = useState({
    userId: "",
    username: "",
   password: "",
   role: "",
  });
 const handleLogin = () => {
   console.log(loginData, "===========");
 try {
       axios
        .post(`http://localhost:9090/api/login`, {
          username: loginData.username,
           password: loginData.password,
           userId:loginData.userId,
           role: loginData.role,
         })
       .then((res) => {
         if (res.status ===200 ) {
           history.push("/customerdashboard");
             localStorage.setItem("isLogin", res.data.loggedIn);
          } else {
            alert("Something Went Wrong");
            console.log(res, "|||||||||||||||");
         }
        });
     } catch (error) {
        alert(error);
       console.log(error, "============");
     }
     console.log();
  };



  return (
    <section className="landing">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="card mt-5">
                <div className="card-header bg-secondary text-black text-center">
                  <h3 className="fw-bolder">Login Form</h3>


                  <Paper elevation={3}>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      padding={2}
                    >
                      <TextField
                        id="filled-basic"
                        label="UserId"
                        variant="filled"
                        type="text"
                        style={{ marginBottom: 10 }}
                        fullWidth
                        required
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            userId:
                              e.target.value,
                          })
                        }
                      />
                      <TextField
                        id="filled-basic"
                        label="Username"
                        variant="filled"
                        type="text"
                        style={{ marginBottom: 10 }}
                        fullWidth
                        required
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            username:
                              e.target.value,
                          })
                        }
                      />
                      <TextField
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        type="password"
                        fullWidth
                        style={{ marginBottom: 10 }}
                        required
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            password:
                              e.target.value,
                          })
                        }

                      />


                      <TextField
                        id="outlined-select-currency"
                        select
                        variant="filled"
                        fullWidth
                        label="Select Role"
                        value={loginData.role}
                        onChange={(e) =>
                          setLoginData({
                            ...loginData,
                            role: e.target.value,
                          })
                        }
                      >
                        {roles.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Button
                        variant="contained"
                        fullWidth
                        style={{ marginTop: "10px" }}
                        onClick={Redirect}
                      >
                        Login
                      </Button>
                    </Box>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;