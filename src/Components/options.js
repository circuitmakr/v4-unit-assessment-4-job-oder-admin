import React, {Component} from 'react'

class Options extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        let eligibleContractors = this.props.contractors
        return(
            <div>
            <article className="contractorOptions">
            {eligibleContractors.map((e, index) => 
            { return <li>{`Company: ${e[0]}, Phone: ${e[1]}, Hr. Rate: ${e[2]} `}<button onClick={()=>this.props.handleHire(index,e)}>Hire</button></li>
            })}
            </article>
            
        </div>
        )
    }
}

export default Options