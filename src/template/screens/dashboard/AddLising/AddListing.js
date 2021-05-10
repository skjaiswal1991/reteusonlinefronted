import React, { Component } from "react";
import "./AddListing.css";
import GooglePlacesInput  from '../../../components/geo-location/geoplaceautocomplete'
import GeoLocation from "../../../components/geo-location/geo-location";
import { connect } from "react-redux";
import * as bussinessActions from "../../../../redux/actions/business.action";
import dataLayer from "../../../../data-laye";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Multiselect } from 'multiselect-react-dropdown';
// import { TimePicker } from '@progress/kendo-react-dateinputs';

class AddListing extends Component {
  state = {
    bussiness: {},
    isAuthonticate: false,
    lat:'',
    lng:'',
    days:['Sunday','Monday','Tuesday','Wednesday','Thirsday','Friday','Suterday'],
    location:'',
    categorys:[],
    catSeletedValue:[],
    primary_category:'',
    additional:1,
    additionData:[{days:'',start:'',end:''}],
    //selectedDate:data()
  };

  //componentDidMount() {
    //console.log("mounted here");
    // let expiration = window.localStorage.getItem("tokenExpiration");
    // var unixTimestamp = new Date().getTime() / 1000;
    // console.log(unixTimestamp, expiration);
    // if (expiration !== null) {
    //   console.log("here in token passed");
    //   this.setState({ isAuthenticated: true });
    // }
    
  //}

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          this.setState({
            lat :position.coords.latitude,
            lng :position.coords.longitude
          })
        
        });
    } else {
      alert("not avilable");
    }

    const category =  dataLayer.getCategory();
    category.then((res)=>{
       this.setState({categorys:res.data})
    })
  }

  saveBussiness = async (event) => {
    event.preventDefault();
    console.log(this.state.bussiness);
    this.props.createBussiness(this.state.bussiness);
  };

  setTitleValue = async (event) => {
    if (event) {
      this.setState({
        bussiness: {
          ...this.state.bussiness,
          [event.target.name]: event.target.value,
        },
      });
    }
    console.log(this.state.bussiness);
  };

  getlatlong = (cord,address) =>{
    console.log('Cordinate');
    console.log(address);
    this.setState({
        lat:cord.lat,
        lng:cord.lng,
        location: address,
        bussiness: {
        ...this.state.bussiness,
        location: address,
        lat:cord.lat,
        lng:cord.lng
    }})
  }


  onSelect = (cat) =>{

    this.setState({
      bussiness: {
        ...this.state.bussiness,
        category: cat,
      },
    });
          
}

  onRemove = (cat) =>{
      this.setState({catSeletedValue:cat})
  }

  additionfield = () =>{
    let newField = {days:'',start:'',end:''}
    this.setState({additionData:[...this.state.additionData,newField]},()=>{
        console.log("state is update");
    })
  }

  deleteHandler = (index) =>{
      let data = this.state.additionData.filter((adi,i)=>{
            return i != index
      })
      this.setState({additionData:data})
  }

  addAditionalData = (e,index) =>
  {
      const { name, value }  = e.target;
      let data = this.state.additionData.filter((adi,i)=>{
              if(i == index){
                adi[name] = value;
                console.log(adi)
              }
              return adi;
            
      })
      this.setState({
        bussiness: {
          ...this.state.bussiness,
          openingDays: data,
        },
      });
      // console.log(data);
      // this.setState({additionData:data})
  }

  render() {
    const { categorys,additional,additionData } = this.state;
    console.log(this.state)
    
    const mainScreen = (
      <div className="empty-state">
        <div className="add-bussienes-form">
          <h5>
            It will take just few minuts , please give us some essential
            information
          </h5>
          <hr></hr>
          <form onSubmit={this.saveBussiness}>
            <div className="row row-eq-height">
              <div className="col-md-6 mb-3">
                <fieldset>
                  <legend>General Information</legend>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Title</label>
                          <input
                            onChange={this.setTitleValue}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="title"
                            placeholder={this.state.bussiness.title}
                          />
                          <small id="emailHelp" className="form-text text-muted">
                            please enter your brand name here.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Location</label>
                          <input
                            onChange={this.setTitleValue}
                            type="hidden"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="location"
                            placeholder={this.state.location}
                          />
                          <GooglePlacesInput  callback = {this.getlatlong} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Current Location</label>
                          <GeoLocation center={{lat:this.state.lat,lng:this.state.lng,location:this.state.location}} zoom={15} ></GeoLocation>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Categories</label>
                          <Multiselect 
                                options={categorys} // Options to display in the dropdown
                                selectedValues={this.state.category} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="category_title"
                                showCheckbox="true"
                                labelledBy={"Select"}
                                 // Property name to display in the dropdown options
                            />
                          {/* <select name="category" className="form-control" onChange={this.setTitleValue} >
                            <option>Please Selected</option>
                            {category.map((cat,i)=>
                                <option data={cat} >{cat.category_title}</option>
                                <option key={i} value={cat._id} className={cat.category_parent.length > 0 ? 'select-chield':'select-parent'}>{cat.category_parent.length > 0 ? '  -':''}{cat.category_title}</option>
                            )}
                                 
                            
                          </select> */}
                          {/* <input
                            onChange={this.setTitleValue}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="category"
                            placeholder={this.state.category}
                          /> */}
                        </div>
                      </div>
                  </div>
                </fieldset>                
              </div>

                <div className="col-md-6 mb-3">
                  <fieldset>
                    <legend>Contact Information</legend>
                    <div className="row row-eq-height">
                      <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone Number</label>
                      <input
                        onChange={this.setTitleValue}
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder={this.state.phoneNumber}

                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Your contact information will be secured by us.
                      </small>
                    </div>
                    </div>
                      <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Mobile Number</label>
                      <input
                        onChange={this.setTitleValue}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="mobile"
                        placeholder={this.state.mobile}
                      />
                    </div>
                    </div>
                      <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        onChange={this.setTitleValue}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        placeholder={this.state.email}
                      />
                    </div>
                    </div>
                      <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Website</label>
                      <input
                        onChange={this.setTitleValue}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="website"
                        placeholder={this.state.website}
                      />
                    </div>
                    </div>
                    </div>
                  </fieldset>
                </div>

                <div className="col-md-6 mb-3">
                  <fieldset>
                    <legend>Social Accounts</legend>
                    <div className="row">
                      <div className="col-md-12">
                      <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Twitter</label>
                      <input
                        onChange={this.setTitleValue}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="twitter"
                        placeholder={this.state.twitter}
                      />
                    </div>
                    </div>
                      <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Facebook</label>
                        <input
                          onChange={this.setTitleValue}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="facebook"
                          placeholder={this.state.facebook}
                        />
                      </div>
                    </div>
                      <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Google +</label>
                        <input
                          onChange={this.setTitleValue}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder={this.state.googleplus}
                          name="googleplus"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tiktok</label>
                        <input
                          onChange={this.setTitleValue}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder={this.state.googleplus}
                          name="tiktok"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Linkedin</label>
                        <input
                          onChange={this.setTitleValue}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder={this.state.googleplus}
                          name="linkedin"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Instagram</label>
                        <input
                          onChange={this.setTitleValue}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder={this.state.googleplus}
                          name="instagram"
                        />
                      </div>
                    </div>
                    </div>
                  </fieldset>
                </div>
                    
                <div className="col-md-6 mb-3">
                  <fieldset>
                    <legend>Additional Information</legend>
                    {additionData.map((n,key)=>
                      
                    <div className="row" key={key}>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Opening Days</label>
                          {/* <input
                            onChange={this.setTitleValue}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={this.state.openingDays}
                            name="openingDays"
                          /> */}
                          <select 
                            name="days"
                            onChange={(e)=>this.addAditionalData(e,key)}
                            className="form-control"
                            >
                              <option >
                                Please Select Days
                              </option>
                              {this.state.days.map((d,i)=>
                                <option key={i} value={d}>{d}</option>
                              )}
                              
                            </select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail">Start</label>
                          <input
                            onChange={(e)=>this.addAditionalData(e,key)}
                            type="time"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder={this.state.from}
                            name="start"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">                     
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail">End</label>
                            <input
                              onChange={(e)=>this.addAditionalData(e,key)}
                              type="time"
                              className="form-control"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder={this.state.to}
                              name="end"
                            />
                             
                          </div>
                          
                      </div>
                      {additionData.length == key + 1 && additionData.length > 1 ? (
                        <div className="col-md-1 self-center">                        
                              <button className="btn btn-danger" onClick={()=>this.deleteHandler(key)}  >
                                <i className="fa fa-trash" aria-hidden="true"></i>
                              </button>
                      </div>
                      ) : ''}
                        
                          
                      
                      {/* <input type="button" className="ant-btn ant-btn-primary pull-right" value="Add More" onClick={()=>this.setState({additional:additional+1})} /> */}
                      
                    </div>
                    
                    )}
                    {additionData.length > 6 ?'':(
                      <input type="button" className="ant-btn ant-btn-primary pull-right" value="Add More" onClick={this.additionfield} />
                    ) }
                    
                  </fieldset>
                </div>

                <div className="col-md-6 mb-3">
                  <fieldset>
                    <legend>Listing Descriptions</legend>
                    <div className="row">
                    <div className="col-md-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Please give us a complete description
                      </label>
                      <textarea
                        onChange={this.setTitleValue}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="fulldescription"
                      ></textarea>
                    </div>
                    </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-md-12 mb-3">
                  <input type="submit" className="ant-btn ant-btn-primary pull-right" value="submit" />
                </div>
              </div>
          </form>
        </div>
      </div>
    );

    const logoutScreen = <div>You need to log in</div>;
    if (true) {
      return mainScreen;
    }
    return logoutScreen;
  }
}

function mapStateToProps({ bussiness, isAuthonticate }) {
  return {
    bussiness,
    isAuthonticate,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(bussinessActions, dispatch),
//   };
// }

const mapDispatchToProps = {
  createBussiness: bussinessActions.createBussiness,
};

AddListing.propTypes = {
  bussiness: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
