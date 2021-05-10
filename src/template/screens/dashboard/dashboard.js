import React, { Component } from "react";
import "./dashboard.css";
import "../../../css/custom.css";
import "../../../css/sb-admin-2.min.css";
import "../../../css/style.css";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import { Route, NavLink, Link } from "react-router-dom";
import Header from "../../components/common/Header";
import EmptyState from "./EmptyState/EmptyState";
import AddListing from "./AddLising/AddListing";
import DataDownload from "./DataDownload/DataDownload";
import EditProfile from "./EditProfile/EditProfile";
import Intrigations from "./Intrigation/Intrigation";
import ManageProfile from "./Intrigation/Intrigation";
import ManageRole from "./ManageRole/ManageRole";
import ManageUser from "./ManageUser/ManageUser";
import ReportManagement from "./ReportManagement/ReportManagement";
import ReviewSettings from "./ReviewSettings/ReviewSettings";
import AggrigateListing from "./AggrigatePage/aggrigate-page";
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
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
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
                        <Link to="/dashboard/">
                          <i className="fa fa-unlock-alt"></i> Added Bussieness
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/intrigations">
                          <i className="fa fa-plug"></i> Integrations
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/review-settings">
                          <i className="fa fa-cog"></i> Manage Reviews
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/profile">
                          <i className="fa fa-file-image-o"></i> Profile Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="settings__content">
                  <i className="fa fa-bars toggle-menu"></i>
                    <div>
                      <Route path="/dashboard/" exact component={EmptyState} />
                      <Route
                        path="/dashboard/add-listing"
                        component={AddListing}
                      />
                      <Route
                        exact
                        path="/dashboard/aggrigate-listing/:name"
                        render={(props) => {
                          return (
                            <AggrigateListing {...props}></AggrigateListing>
                          );
                        }}
                      />
                      <Route
                        path="/dashboard/manage-role"
                        component={ManageRole}
                      />
                      <Route
                        path="/dashboard/manage-role"
                        component={ManageRole}
                      />
                      <Route
                        path="/dashboard/intrigations/"
                        component={Intrigations}
                      />
                      <Route
                        path="/dashboard/profile/"
                        component={EditProfile}
                      />
                      <Route
                        path="/dashboard/downloads/"
                        component={DataDownload}
                      />
                      <Route
                        path="/dashboard/report-management/"
                        component={ReportManagement}
                      />
                      <Route
                        path="/dashboard/review-settings"
                        component={ReviewSettings}
                      />
                      <Route
                        path="/dashboard/manage-user"
                        component={ManageUser}
                      />
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

        {/* <div className="directory_content">
          <div className="directory_content_text">
            <h4>Create A Bussiness Directory</h4>
            <p>
            </p>
          </div>
          <div className="rateusonlinecard">
            <div className="card">
              <div className="card-body">
                <div className="image_div"></div>
                <h5 className="card-title">Business or brand</h5>

                <p className="card-text">
                  showcase your products and services, spotlight your brand and
                  reach more customers on RateUsOnline.
                </p>
                <a
                  href="#"
                  className="button_center nav-link login-btn alt-font "
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
    if (this.state.isAuthenticated) {
      return main_dashboard;
    } else {
      return notAuthticated;
    }
  }
}
