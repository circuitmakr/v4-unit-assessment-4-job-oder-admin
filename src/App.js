import './App.css';
import ContractorList from './Components/contractorList'
import Invoice from './Components/invoice'
import Phone from './Components/phone'
import Header from './Components/header'
import Options from './Components/options'
import Notes from './Components/notesList'
import React, {Component} from 'react'
import axios from 'axios';


class App extends Component {
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
    type: '',
    contractors: [],
    hired: [],
    contractor: '',
    invoice: []
  }
  
}

updateInvoice=([...data])=>{
this.setState({invoice: [...data]})
}

getContractors =(props) =>{
    //console.log(this.state.type)
    axios.get(`http://localhost:5000/api/maintenance/${this.state.type}`)
    .then((res) => {
        this.setState({contractors: res.data})
        console.log(this.state.contractors)
    })
    .catch((err) => {
      console.log(err)
    })
}

postHired = () =>{
  console.log(this.state.hired)
  axios.post(`http://localhost:5000/api/maintenance/${this.state.hired[0]},${this.state.type}`)
  .then((res) => {
      this.setState({contractor: res.data})
      console.log(this.state.contractor)
  })
  .catch((err) => {
    console.log(err)
  })
}

handleClick = (e, {...object}) =>{
  e.preventDefault();
  this.setState({...object},()=>{
    this.getContractors()
  })
}
handleHire =  (index,el) =>{
  this.setState({hired: [index,...el]},() =>{
    console.log(this.state.hired)
    this.postHired()
  })    
}


  render(){
    return (
      <div className="App-container">
        <Header />
        <ContractorList 
        submission={this.handleClick}
        />
        <Invoice 
        Invoice ={this.state.contractor}
        fName={this.state.fName}
        lName={this.state.lName}
        address={this.state.address}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        hired={this.state.hired}
        />
        <Phone
        updateInvoice={this.updateInvoice} 
        fName={this.state.fName}
        lName={this.state.lName}
        address={this.state.address}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        Invoice ={this.state.contractor}
        />
        <Options
        index ={this.state.contractors.index}
        handleHire={this.handleHire}
        contractors={this.state.contractors}
         />

      </div>
    );
  }
}
export default App;
