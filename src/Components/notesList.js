import e from 'express'
import React, {Component} from 'react'

class Notes extends Component{
    constructor(){
        super()
        this.sate={
            editMode: false,
            service: '',
            parts: '',
            time:'',
            expense: ''
        }
    }

    serviceOnChange(e){
        this.setState({service: e.target.value})
        console.log(this.state.service)
    }
    timeOnChange(e){
        this.setState({time: e.target.value})
        console.log(this.state.time)
    }
    partsOnChange(e){
        this.setState({parts: e.target.value})
        console.log(this.state.parts)
    }
    expenseOnChange(e){
        this.setState({expense: e.target.value})
        console.log(this.state.expense)
    }


    render(){
        return(
            <div className="notePad">
            <h5>Notes</h5>
            <button className="addNote">ADD</button>   
            <div className="writingPad">
            <input onChange={(e) => this.serviceOnChange} value={this.state.service} className="noteItem" placeholder="service"></input>
            <select onChange={(e) => this.timeOnChange} value={this.state.time} name="labor" className="noteItem">
            <optgroup>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
          </optgroup>
          </select>
            <input onChange ={(e)=> this.partsOnChange} value={this.state.parts} className="noteItem" placeholder="parts"></input>
            <input onChange ={(e)=> this.expenseOnChange}value={this.state.expense} className="noteItem" placeholder="expense"></input>
            </div>
            <section className="notePadButtonContainer">
            <button className="btnDeleteNote">DELETE</button>   
            <button className="btnEditNote">EDIT</button>   
            </section>
            </div>
        )
    }

}
export default Notes