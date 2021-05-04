import React, {Component} from 'react'

class Notes extends Component{
    constructor(props){
        super(props)
        this.state={
            editMode: false,
            service:'',
            parts: '',
            time:'',
            expense: 0
        }
    }
serviceOnChange=(value)=>{
    this.setState({service: value})
}
partsOnChange=(value)=>{
    this.setState({parts: value})
}
timeOnChange=(value)=>{
    this.setState({time: value})
}
expenseOnChange=(value)=>{
    this.setState({expense: value})
}
    render(){
        return(
            <div className="notePad">
            <h5>Notes</h5>
            <button onClick={()=> this.props.addNewNote(this.state.service,this.state.time)} className="addNote" name="addNotes">ADD</button>   
            <div className="writingPad">
            <input value={this.state.service} onChange={(e)=> this.serviceOnChange(e.target.value)} className="noteItem" placeholder="service"></input>
            <select value={this.state.time} onChange={(e)=> this.timeOnChange(e.target.value)} name="labor" className="noteItem">
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
            {/* <input  value={this.state.parts} onChange={(e)=> this.partsOnChange(e.target.value)} className="noteItem" placeholder="parts"></input>
            <input value={this.state.expense} onChange={(e)=> this.expenseOnChange(e.target.value)}className="noteItem" placeholder="expense"></input> */}
            </div>
            <section className="notePadButtonContainer">
            <button className="btnDeleteNote">DELETE</button>
            <button className="btnJobComplete">JOB COMPLETE</button>
            <button className="btnEditNote">EDIT</button>  

            </section>
            </div>
        )
    }

}
export default Notes