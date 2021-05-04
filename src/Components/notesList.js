import React, {Component} from 'react'

class Notes extends Component{
    constructor(){
        super()
        this.sate={
            editMode: false,
            note:'',
            time: '',
        }
    }
    render(){
        return(
            <div className="notePad">
            <h5>Notes</h5>
            <button className="addNote">ADD</button>   
            <textarea className="writingPad" rows="5" columns="100"></textarea>
            <section className="notePadButtonContainer">
            <button className="editNote">DELETE</button>   
            <button className="deleteNote">EDIT</button>   
            </section>
            </div>
        )
    }

}
export default Notes