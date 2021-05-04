import React, {Component} from 'react'

class Invoice extends Component {
  constructor(props){
  super(props)
  this.state={
    fName: '',
    lName: '',
    address: '',
    city: '',
    state: '',
    zip:  '',
    note:'' ,
    type:'', 
    }
  }

  render(){
    let notes = this.props.notes
    return (
      <div className="Invoice-container">
          <article className="Invoice-wrapper">
            <nav className="invoiceTitle">
            <h1>{this.props.Invoice[1]}</h1>
            <br/>

            </nav>
            <article className="contractInfo">
                <div className="infoBox clientInfo">
                <h5>Client:</h5>
                <p>{this.props.fName} {this.props.lName}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}, {this.props.state} {this.props.zip}</p>
                </div>
                <div className="infoBox contractorInfo">
                <h5>Contractor:</h5>
                <p>Company: {this.props.hired[1]}</p>
                <p>Phone: {this.props.hired[2]}</p>
                <p>Hourly Rate: {this.props.hired[3]}</p>
                </div>
            <br/>
            </article>
            <hr/>
            <article className="description">
              <p>{this.props.note}</p>
          </article>
          </article>
  
          <main className="output">
            <h3>Summary</h3>
            {notes.map((e, index) => 
            { return <li>{e}<button onClick={()=>this.props.deleteRecord(index)} >DELETE</button></li>
            })}
          </main>
      </div>
    );
  }
}
export default Invoice;