import React, {Component} from 'react'
import Notes from './notesList'

class Phone extends Component {
  constructor(props){
  super(props)
  }
  render(){
   
    return (
      <div className="Phone-container">
          <div className="phoneWrapper">
            <main className="phoneScreen">
              <article>
                <p>{this.props.fName} {this.props.lName}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}, {this.props.state} {this.props.zip}</p>
              </article>
              <article>
              
              </article>
              <Notes/>
            </main>
          </div>
          <div className="phoneButton"></div>
      </div>
    );
  }
}
export default Phone;
