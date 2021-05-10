import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TabFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feature:[]
      }
  }

  addHendler = () =>{

  }

  submitHendler = (e) =>{
    e.preventDefault();
    console.log(e.target.type.value)
    console.log(e.target.field.value)
    
    this.setState({feature:[...this.state.feature,{type:e.target.type.value,field:e.target.field.value}]})
  }
  render() { 
    return ( 
      <section className="listing-table" id="section-02">
        <div className="total-online-review-inner">
          <div className="row">
            <div className="table-responsive">
            
            <form onSubmit={this.submitHendler} >
              <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <select className="form-control" required name="type" >
                          <option value="Starting Price">Starting Price</option>
                          <option value="Free Trial">Free Trial</option>
                          <option value="Deployment">Deployment</option>
                          <option value="Starting Price">Training</option>
                        </select>
                      </div>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" name="field" required />
                </div>
                <div className="col-md-3">
                  <input type="submit" className="btn btn-primary" value="Add" />
                </div>
              </div>
              </form>
              <table className="table">
                <tbody>                
                  {this.state.feature.map((f,i)=>(
                    <tr className={i % 2? "gray-bg":"blue-bg"} key={i}>
                      <td>{f.type}</td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i>
                        {f.field} 
                      </td>
                      <td></td>
                    </tr>
                  ))}                  
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
     );
  }
}
 
export default TabFeature;

