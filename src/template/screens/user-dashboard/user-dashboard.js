import React, { Component } from "react";
import "./dashboard.css";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import { Route, NavLink, Link } from "react-router-dom";
import Header from "../../components/common/Header";
export default class Deshboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }
  componentDidMount() {
    console.log("mounted here");
    // let expiration = window.localStorage.getItem("tokenExpiration");
    // var unixTimestamp = new Date().getTime() / 1000;
    // console.log(unixTimestamp, expiration);
    // if (expiration !== null) {
    //   console.log("here in token passed");
    //   this.setState({ isAuthenticated: true });
    // }
  }
  render() {
    const main_dashboard = (
      <div>
        <Header />
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <img src="./images/logo-icon.png" />
              </div>
              <div className="sidebar-brand-text mx-5">
                <img src="./images/logo.png" className="sidebar-logo" />
              </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
              <a
                className="nav-link"
                href="index.html"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Dashboard"
              >
                <i className="fa fa-bar-chart"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <hr className="sidebar-divider" />
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Insights"
              >
                <i className="fa fa-area-chart"></i>
                <span>Insights</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Local Performance"
              >
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <span>Local Performance</span>
              </a>
            </li>

            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Reviews"
              >
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <span>Reviews</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Locations"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Locations</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Competitors"
              >
                <i className="fa fa-search-plus" aria-hidden="true"></i>
                <span>Competitors</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Manage Locations"
              >
                <i className="fa fa-map" aria-hidden="true"></i>
                <span>Manage Locations</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Post Schedule"
              >
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span>Post Schedule</span>
              </a>
            </li>
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Post Insights"
              >
                <i className="fa fa-pie-chart" aria-hidden="true"></i>

                <span>Post Insights</span>
              </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <li className="nav-item settings-menu">
              <a
                className="nav-link"
                href="#"
                data-toggle="tooltip"
                data-placement="right"
                data-trigger="hover"
                title="Settings"
              >
                <i className="fa fa-wrench" aria-hidden="true"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>

                <form action="/action_page.php">
                  <div className="form-group MK">
                    <select className="form-control" id="sel1" name="sellist1">
                      <option className="mk-option">MK</option>
                      <option className="mk-option">test</option>
                    </select>
                  </div>
                </form>

                <ul className="navbar-nav ml-auto">
                  <li>
                    <div className="lang mt-3 mx-3">
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
                  </li>

                  <li className="nav-item dropdown support no-arrow mx-3 mt-3">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        data-toggle="tooltip"
                        data-placement="right"
                        data-trigger="hover"
                        title="Post Insights"
                      >
                        <i className="fa fa-support"></i>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Knowledge Base
                        </a>
                        <a className="dropdown-item" href="#">
                          Feature Requests
                        </a>
                        <a className="dropdown-item" href="#">
                          Help Desk
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="img-profile rounded-circle"
                        src="./images/avatar.png"
                      />
                    </a>

                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <div className="popup-image">
                        <span className="avatar-popup">
                          <img src="./images/googleavatar.png" />
                        </span>
                        <h3>Alex</h3>
                        <span>pounds1983@yahoo.co.uk</span>
                        <span>OWNER</span>
                      </div>

                      <a className="dropdown-item" href="#">
                        <i className="fa fa-user-o fa-sm fa-fw mr-2"></i>
                        Settings
                      </a>

                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fa fa-sign-out fa-sm fa-fw mr-2"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="ant-layout-divider">
                <span className="divider-red"></span>
                <span className="divider-blue"></span>
                <span className="divider-yellow"></span>
                <span className="divider-green"></span>
              </div>

              <div className="container-fluid right-wrap">
                <div className="settings-wrap">
                  <div className="settings-rightbar">
                    <div className="settings-rightbar-header">Settings</div>
                    <ul className="settings-rightbar-menu">
                      <li>
                        <a className="active" href="#">
                          <i className="fa fa-unlock-alt"></i> Authorize Account
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-desktop"></i> Google Audit
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-plug"></i> Integrations
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-file-text-o"></i> Manage Roles
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-edit"></i> Manage Users
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-cog"></i> Review Settings
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-cogs"></i> Campaign Builder
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-file-o"></i> Report Management
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-download"></i> Data Downloads
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-file-image-o"></i> Profile Details
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <i className="fa fa-chain"></i> Custom Sidebar Tabs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="settings__content">
                    <div>
                      <div className="empty-state">
                        <div className="empty-state__inner toheight-1">
                          <div className="add-icon">
                            <i className="fa fa-unlock-alt"></i>
                          </div>
                          <h1 className="mb-0 text-gray-800 text-center">
                            Authorize Account
                          </h1>
                          <p>
                            You can add a Google My Business account to your
                            current profile to import listings from it.
                          </p>
                          <div className="add-buttom-block">
                            <button
                              buttonlabel="Add an account"
                              type="button"
                              className="ant-btn ant-btn-primary"
                            >
                              <span>Add an account</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-sm-flex align-items-center justify-content-between dashboard-wrap">
                  <div className="dashboard-content">
                    <div className="add-icon">
                      <i className="fa fa-unlock-alt"></i>
                    </div>
                    <h1 className="mb-0 text-gray-800 text-center">
                      Authorize Account
                    </h1>
                    <p>
                      You can add a Google My Business account to your current
                      profile to import listings from it.
                    </p>
                    <div className="add-buttom-block">
                      <button
                        buttonlabel="Add an account"
                        type="button"
                        className="ant-btn ant-btn-primary"
                      >
                        <span>Add an account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; 2020 RateUsOnline for All</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
    if (this.state.isAuthenticated) {
      return main_dashboard;
    } else {
      return notAuthticated;
    }
  }
}
