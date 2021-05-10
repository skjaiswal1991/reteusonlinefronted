import React, { Component } from "react";
import { Modal, Card, Col, Button, Form } from "react-bootstrap";
import AvatarEditor from "react-avatar-editor";
import "./profile-pic-selector.css";
import DataService from "../../../data-laye.js";
import { ToastContainer, toast } from "react-toastify";

export default class ProfilePicSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editor: {},
      image: `${this.props.path}${props.image}`,
      imageUrl: `${this.props.path}${props.image}`,
    };
    console.log(props.image);
  }
  selectFromSystem = () => {
    const input = document.getElementById("p-p-input");
    input.click();
  };
  handleClose = (event) => {
    this.setState({
      show: false,
    });
  };
  handleShow = (event) => {
    this.setState({
      show: true,
    });
  };
  saveImage = async () => {
    toast.success("Please wait...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (this.editor) {
      try {
        const canvas = this.editor.getImage().toDataURL("image/png", 1.0);
        this.setState({
          imageUrl: canvas,
        });
        // console.log(this.props);
        const objectMain = {
          md5Image: JSON.stringify(canvas),
          Id: this.props.location.bussiness._id,
        };
        const data = await DataService.updateBussiness(objectMain);
        console.log(data);
        toast.success("Profile Picture Updated...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (err) {
        alert(err);
      }
    }
  };
  selectedImage = (event) => {
    console.log(event.target.files);
    this.setState({
      image: event.target.files[0],
    });
  };

  componentDidMount() {
    if (this.props.location.bussiness) {
      //debugger;
      if (this.props.location.bussiness.profilePic) {
        this.setState({
          imageUrl: JSON.parse(this.props.location.bussiness.profilePic),
        });
      }
    } else {
    }
  }
  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <div className="p-pic-container">
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
        <div className="profile-pic">
          <img height="172px" width="172px" src={this.state.imageUrl} />
          <span className="onHoverEdit" onClick={this.handleShow}>
            <i className="fa fa-edit"></i>
            &nbsp; Click To Edit
          </span>
        </div>
        <div className="pro-circle">
          <p>
            Top-50
            <br />
            <span>2020</span>
          </p>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title className="myTitle">
              <Button variant="secondary" onClick={this.selectFromSystem}>
                <i className="fa fa-image"></i>
                &nbsp; select form system
                <input
                  id="p-p-input"
                  type="file"
                  onChange={this.selectedImage}
                  accept=".jpeg, .png, .jpg"
                />
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancle
              </Button>
              <Button variant="primary" onClick={this.saveImage}>
                Update
              </Button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AvatarEditor
              image={this.state.image}
              ref={this.setEditorRef}
              width={250}
              height={250}
              crossOrigin="use-credentials"
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={1.2}
              rotate={0}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
