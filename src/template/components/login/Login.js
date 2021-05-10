import React, { Component } from "react";
import DatePicker from "react-date-picker";
import "./login.css";
import dataLayer from "../../../data-laye";
import { connect } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as loginActions from "../../../redux/actions/login.actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthonticate: false,
      userName: "",
      password: "",
    };
    this.dataLayer = dataLayer;
  }

  setPassword = async (event) => {
    event.persist();
    const value = event.target.value;
    if (event) {
      this.setState(() => {
        return {
          password: value,
        };
      });
    }
  };

  setEmail = async (event) => {
    event.persist();
    const value = event.target.value;
    if (event) {
      this.setState(() => {
        return {
          userName: value,
        };
      });
    }
  };

  logIn = async (event) => {
    event.preventDefault();
    const userName = this.state.userName;
    const password = this.state.password;

    toast.success("Logging you in a second please wait...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    try {
      const data = await this.dataLayer.login({ email: userName, password });
      console.log("tokens are", data);
      window.localStorage.setItem("AccessToken", data.tokens[0]);
      window.localStorage.setItem("ReffreshToken", data.tokens[1]);
      this.props.isAuthonticated(true);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.log("here in error...........");
      console.log(err);
      if (err == 503) {
        toast.error("Invelid Credantials...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (err == 422) {
        toast.error(
          "Please enter your email and password they can't be empty...",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
  };

  render() {
    return (
      <section className="login-user">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="user-info-bg">
                <div className="row">
                  <div className="user-section">
                    <a href="#" className="navbar-brand">
                      <img src="../../../images/logo.png" />
                    </a>
                    <div className="user-info-details">
                      <div className="user-info-details-login">
                        <div className="language-selector">
                          <h3>Sign in</h3>
                          <p>Stay updated on your professional world</p>
                          <div className="dropdown">
                            <button
                              className="btn btn-primary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              English
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                English
                              </a>
                              <a className="dropdown-item" href="#">
                                Portugues
                              </a>
                              <a className="dropdown-item" href="#">
                                Deutsch
                              </a>
                              <a className="dropdown-item" href="#">
                                FRANÇAIS
                              </a>
                              <a className="dropdown-item" href="#">
                                日本語
                              </a>
                              <a className="dropdown-item" href="#">
                                عربى
                              </a>
                              <a className="dropdown-item" href="#">
                                ITALIANO
                              </a>
                            </div>
                          </div>
                        </div>
                        <form onSubmit={this.logIn}>
                          <div className="user-login-form mt-4">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control effects"
                                id="formGroupExampleInput"
                                value={this.state.userName}
                                onChange={this.setEmail}
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control effects"
                                id="formGroupExampleInput2"
                                value={this.state.password}
                                onChange={this.setPassword}
                                placeholder="Password"
                              />
                              <a
                                href="/forgotPassword"
                                className="forgot-password"
                              >
                                Forgot password
                              </a>
                            </div>
                          </div>
                          <input
                            type="submit"
                            className="btn btn-block btn-primary mt-3"
                            value="Login"
                          />
                          <p className="signup-text mt-3"></p>
                          <div className="login-with mt-4">Or</div>
                          <div className="login-social mt-4">
                            <span className="google-btn mb-3 social-btn">
                              <button
                                type="button"
                                onClick={this.logIn}
                                className="btn"
                              ></button>
                            </span>
                            <span className="micro-soft-btn mb-3 social-btn">
                              <button type="button" className="btn"></button>
                            </span>
                          </div>
                        </form>
                      </div>
                      <div className="signup-wrap mt-2">
                        <span className="signup-text">
                          <span>New to RateUsOnline? </span>
                          <a href="/signup">Join now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signup-disclaimer" id="signup-disclaimer">
                  By creating an account, I accept Bloglovin's
                  <a
                    className="signup-disclaimer-tos"
                    href="/tos"
                    target="_blank"
                  >
                    {" "}
                    Terms of Service
                  </a>
                  . Questions?
                  <a className="signup-disclaimer-tos" href="#" target="_blank">
                    {" "}
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ isAuthonticate }) {
  return { isAuthonticate };
}

const mapDispatchToProps = {
  isAuthonticated: loginActions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
