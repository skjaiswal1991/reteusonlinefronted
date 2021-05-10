import React, { Component } from "react";
import { Modal, Card, Col, Button, Form, FormGroup } from "react-bootstrap";
import "./cover-pic-selector.css";
import DataService from "../../../data-laye.js";
import { ToastContainer, toast } from "react-toastify";
import { Stage, Layer } from "react-konva";
import CoverEditor from "./cover-editor/cover-editor.js";

export default class CoverPicSelector extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.bussiness, props.location.bussiness);
    this.state = {
      image: `../../../../images/unnamed.png`,
      mainEdit: false,
      subEdit: false,
      defaultMain: props.location.bussiness
        ? props.location.bussiness.mainQuote || "Click For Enter Here."
        : "Click For Enter Here.",
      defaultSub: props.location.bussiness
        ? props.location.bussiness.subQuote || "Sub Title Here."
        : "Sub Title Here.",
      coverEdit: false,
      cursor: "not-allowed",
    };
  }
  mainTitleClicked = async (event) => {
    event.preventDefault();
    const objectMain = {
      mainQuote: this.state.defaultMain,
      Id: this.props.location.bussiness._id,
    };
    const title = await DataService.updateBussiness(objectMain);
    this.setState({
      mainEdit: false,
    });
  };
  subTitleClicked = async (event) => {
    event.preventDefault();
    const objectMain = {
      subQuote: this.state.defaultSub,
      Id: this.props.location.bussiness._id,
    };
    const title = await DataService.updateBussiness(objectMain);
    this.setState({
      subEdit: false,
    });
  };
  editMainInput = (event) => {
    //console.log(event.target.value);
    this.setState({
      defaultMain: event.target.value,
    });
  };
  editSubInput = (event) => {
    //console.log(event.target.value);
    this.setState({
      defaultSub: event.target.value,
    });
  };
  subTitleClickedState = () => {
    this.setState({
      subEdit: !this.state.subEdit,
    });
  };
  mainTitleClickedState = () => {
    this.setState({
      mainEdit: !this.state.mainEdit,
    });
  };
  componentDidMount() {}

  selectedImage = (event) => {
    console.log(event.target.files);
    this.setState({
      image: event.target.files[0],
    });
  };

  editCover = () => {
    this.setState(
      {
        coverEdit: !this.state.coverEdit,
      },
      () => {
        this.state.coverEdit
          ? this.setState({ cursor: "move" })
          : this.setState({ cursor: "not-allowed" });
      }
    );
    console.log(this.state.coverEdit, this.state.cursor);
  };

  changeCover = () => {
    const input = document.getElementById("c-p-input");
    input.click();
  };

  render() {
    let mainEdit, subEdit;
    if (this.state.mainEdit) {
      mainEdit = (
        <div className="sub-input">
          <form name="sub-input" onSubmit={this.mainTitleClicked}>
            <FormGroup controlId="formBasicEmail">
              <Form.Control
                onInput={this.editMainInput}
                type="text"
                placeholder="Edit Sub Input"
              />
              <Form.Text className="text-muted">
                Please Enter your main title here.
              </Form.Text>
              <Button variant="primary" type="submit">
                change now
              </Button>
            </FormGroup>
          </form>
        </div>
      );
    } else {
      mainEdit = (
        <h2 onClick={this.mainTitleClickedState}>{this.state.defaultMain}</h2>
      );
    }

    if (this.state.subEdit) {
      subEdit = (
        <div className="sub-input">
          <form name="sub-input" className="sub-input" onSubmit={this.subTitleClicked}>
            <FormGroup controlId="formBasicEmail">
              <Form.Control
                onInput={this.editSubInput}
                type="text"
                placeholder="Edit Sub Title"
              />
              <Form.Text className="text-muted">
                Please Enter your sub title here.
              </Form.Text>
              <Button variant="primary" type="submit">
                change now
              </Button>
            </FormGroup>
          </form>
        </div>
      );
    } else {
      subEdit = (
        <p onClick={this.subTitleClickedState}> {this.state.defaultSub}</p>
      );
    }
    return (
      <section className="main-slide">
        <div className="text-on-banner"> 
        {mainEdit}
        {subEdit}
        </div>
        <div className="button_pallate">
          <button className="edit btn btn-light" onClick={this.editCover}>
            <i className="fa fa-pencil"></i> {this.state.coverEdit ? "Done" : "Edit"}
          </button>
          <button
            className="change_cover btn btn-light"
            onClick={this.changeCover}
          >
            <i className="fa fa-image"></i>
            &nbsp; select form system
            <input
              id="c-p-input"
              type="file"
              onChange={this.selectedImage}
              accept=".jpeg, .png, .jpg"
            />
          </button>
        </div>
        <div className="row">
          <div className="col-xl-12 offset-xl-12 col-lg-12 offset-lg-12">
            <CoverEditor
              src={this.state.image}
              cursor={this.state.cursor}
              coverEdit={this.state.coverEdit}
            ></CoverEditor>
          </div>
        </div>
      </section>
    );
  }
}
