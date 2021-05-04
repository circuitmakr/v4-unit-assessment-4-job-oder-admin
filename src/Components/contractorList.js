import React, {Component} from 'react'
import Options from './options'

class ContractorList extends Component {
  constructor(props){
  super(props)
  this.state={
    fName: '',
    lName: '',
    address: '',
    city: '',
    state: '',
    zip:  '',
    note: '',
    type: ''
    }   
}

fnameOnChange=(e)=>{
    this.setState({fName: e.target.value})
}
lnameOnChange=(e)=>{
    this.setState({lName: e.target.value})
}
addressOnChange=(e)=>{
    this.setState({address: e.target.value})
}
cityOnChange=(e)=>{
    this.setState({city: e.target.value})
}
stateOnChange=(e)=>{
    this.setState({state: e.target.value})
}
zipOnChange=(e)=>{
    this.setState({zip: e.target.value})
}
noteOnChange=(e)=>{
    this.setState({note: e.target.value})
}
typeOnChange=(e)=>{
    this.setState({type: e.target.value})
}


  render(){
   
    return (
      <div className="contractorList">
          <form className="frmNewClient">
          <button className="btnNew"><h4>New Maintenance Request</h4></button>
          <br/><br/>
          <h4>How can we reach you:</h4>   
          <input onChange={this.fnameOnChange}className="fName" value={this.state.fName} placeholder="First Name"/>
          <input onChange={this.lnameOnChange}className="lName" value={this.state.lName} placeholder="Last Name"/>
          <input onChange={this.addressOnChange}className="address" value={this.state.address} placeholder="Street Address"/>
          <input onChange={this.cityOnChange}className="city" value={this.state.city} placeholder="City"/>
          <input onChange={this.stateOnChange}className="state" value={this.state.state} placeholder="State"/>
          <input onChange={this.zipOnChange}className="zip" value={this.state.zip} placeholder="Zip Code"/>
          <br/>
          <br/>
          <h4>Describe the problem:</h4>
          <textarea placeholder="Please enter the nature of your issue so that we can direct the proper services to complete your order. Be as descriptive as possible." onChange={this.noteOnChange}rows="5" cols="40" />
          <br/>
          <label htmlFor="trade"><h4>Trade Needed: </h4></label>
          <select onChange={this.typeOnChange} name="trade" className="selectGroup">
          <optgroup>
            <option value="SELECT">Select One</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Electrical">Electrical</option>
            <option value="Gardening">Gardening</option>
            <option value="Masonry">Masonry</option>
            <option value="Painting">Painting</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Roofing">Roofing</option>
          </optgroup>
          </select>
          <br/>
          <br/>
          <button onClick={(e)=>this.props.submission(e,{...this.state})} className="btnChoice submit" >Submit</button>
          {/* onClick={()=>this.props.submission(this.state.fName, this.state.lName,this.state.address,this.state.city,this.state.state,this.state.zip,this.state.note,this.state.type)} */}
          </form>
          <br/>
      </div>
    );
  }
}
export default ContractorList;
