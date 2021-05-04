import React, {Component} from 'react'
import Notes from './notesList'

class Phone extends Component {
  constructor(){
  super()
    this.state={
      newNote: []
    }
  }
addNewNote=(service, parts, time, expense) =>{
   this.setState({newNote: [service,parts,time,expense]})
   console.log(this.state.newNote)
 }

 
  render(){
    
    return (
      
      <div className="Phone-container">
          <div className="phoneWrapper">
            <main className="phoneScreen">
              <article>
                <h5>Client:</h5>
                <p>{this.props.fName} {this.props.lName}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}, {this.props.state} {this.props.zip}</p>
              </article>
              <br/>
              <article>
                <h5>Assigned to:</h5>
                <p>{this.props.Invoice[0][0]} {this.props.Invoice[0][1]}</p>
                <p>{this.props.Invoice[0][2]}</p>
                <p>{this.props.Invoice[0][3]}</p>
              </article>
              <Notes 
              addNewNote={this.addNewNote}
              />
            </main>
          </div>
          <div className="phoneButton"></div>
      </div>
    );
  }
}
export default Phone;
