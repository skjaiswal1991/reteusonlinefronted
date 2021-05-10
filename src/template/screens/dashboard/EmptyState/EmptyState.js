import React, { Component } from "react";
import "./EmptyState.css";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import BussinessCards from "../../../components/bussiness-cards/bussiness.cards.js";
import * as bussinessActions from "../../../../redux/actions/business.action";
class EmptyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListing: true,
    };
  }

  componentDidMount() {
    this.props.loadBussiness().catch((error) => alert(error));
  }

  render() {
    const dir_new_listing = (
      <div className="empty-state">
        <div className="empty-state__inner toheight-1">
          <div className="add-icon">
            <i className="fa fa-unlock-alt"></i>
          </div>
          <h1 className="mb-0 text-gray-800 text-center">Add a listing</h1>
          <p className="mb-0 text-center">
            Connect your business, yourself or your cause to the worldwide
            community of people on RateUsOnline. To get started, click on create
            listing.
          </p>
          <div className="add-buttom-block">
            <Link
              to="/dashboard/add-listing"
              className="ant-btn ant-btn-primary"
            >
              <i className="fa fa-unlock-alt"></i> Create A listing
            </Link>
          </div>
        </div>
      </div>
    );

    const dir_listing = (
      <Container fluid={true} className="">
        <div className="empty-state__inner toheight-1">
          <div className="add-buttom-block">
            <Link
              to="/dashboard/add-listing"
              className="add-btn btn btn-primary rounded-circle"
            >
              <i className="fa fa-plus"></i>
            </Link>
          </div>
        </div>

        <div>
          <Row className="row-eq-height">
            {this.props.bussiness.map((bussiness) => {
              return (
                <BussinessCards
                  key={bussiness._id}
                  {...bussiness}
                ></BussinessCards>
              );
            })}
          </Row>
        </div>
      </Container>
    );

    if (this.state.isListing) {
      return dir_listing;
    } else {
      return dir_new_listing;
    }
  }
}

function mapStateToProps({ bussiness, isAuthonticate }) {
  return {
    bussiness,
    isAuthonticate,
  };
}

const mapDispatchToProps = {
  createBussiness: bussinessActions.createBussiness,
  loadBussiness: bussinessActions.loadBusiness,
};

// EmptyState.propTypes = {
//   bussiness: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(EmptyState);
