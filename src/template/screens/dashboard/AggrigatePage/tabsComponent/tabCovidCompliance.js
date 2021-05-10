import React,{ useState } from 'react';
import CovidCompaliance from '../../../../components/covid-compaliance';

const TabCovid = ( props ) =>
{

const [covid, setCovid] = useState([])
const [type, setType] = useState()
const [field, setField] = useState()

const submitHendler = (e) =>{
    e.preventDefault()
    setCovid([...covid,{type,field}])
    setField('')
    
}
console.log(field)
    return(
        <section className="listing-table" id="section-02">
        <div className="total-online-review-inner">
          <div className="row">
            <div className="table-responsive">
            
            <form onSubmit={(e)=>{submitHendler(e)}} >
              <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <select className="form-control"  name="type" onChange={(e)=>setType(e.target.value)} required>
                            <option value="">Please Select Type</option> 
                            <option value="Use of Facemask /PPE Kit by Employees" selected={type=='Use of Facemask /PPE Kit by Employees'? true: false}>Use Facemask /PPE kit by Employees</option>
                            <option value="Social Distancing Practices" selected={type=='Social Distancing Practices'? true: false}>Social Distancing Practices </option>
                            <option value="Availability of Hand Sanitizer" selected={type=='Availability of Hand Sanitizer'? true: false}>Availability of Hand Sanitizer</option>
                            <option value="Temperature Checks" selected={type=='Temperature Checks'? true: false}>Temperature Checks</option>
                            <option value="Cashless Payment" selected={type=='Cashless Payment'? true: false}>Cashless Payment</option>
                        </select>
                      </div>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" name="field" value={field} onChange={(e)=>setField(e.target.value)} required />
                </div>
                <div className="col-md-3">
                  <input type="submit" className="btn btn-primary" value="Add" />
                </div>
              </div>
              </form>
              <table className="table">
                <tbody>                
                  {covid.map((f,i)=>(
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
    )
   
}

export default TabCovid;