
const dContractors = require('../Contractor_Data.json')


let Notes=[]

module.exports={
    getContractors: (req,res) =>{
    //the contractors are displayed by company
    let {type} = req.params;
    console.log('I got a request!')
    console.log(req.params)

    let available = [];
    let contractors = dContractors.filter((e) =>{
     return e.specialties === type;
     });

     for(let i=0; i<contractors.length;i++){
         available.push(
            [ contractors[i].company,
            contractors[i].phone_number,
            contractors[i].bill_rate])
     }
     console.log(available)
        res.status(200).send(available);
    },
    addJob: (req,res) =>{
    //link customer and individual worker on invoice 
    let {id, type} = req.params
    console.log('I got a request here!')
    console.log(req.params)
    let options = [];
    let invoice =[]
    let contractors = dContractors.filter((e) =>{
     return e.specialties === type;
     });
     for(let i=0; i<contractors.length;i++){
        options.push([
            contractors[i].first_name,
            contractors[i].last_name,
            contractors[i].phone_number,
            contractors[i].specialties])
    }
    
    invoice.push([
            contractors[id].first_name,
            contractors[id].last_name,
            contractors[id].email,
            contractors[id].phone_number,
            contractors[id].specialties])
    
     console.log([...contractors])
     let orderNumber = Math.floor(Math.random()*999);
     const invoiceNumber =  `INVOICE NUMBER: 000${orderNumber}`;
     invoice = [...invoice, invoiceNumber];
     id++;
    console.log(invoice)
    // console.log(workId)
        res.status(200).send(invoice)
    },
    addNote: (req,res) => {
        let {service, time, rate} = req.params
        console.log('I got a add Note request here!')
        console.log(req.params)
        let total = +rate * +time
        console.log(total)
        const note =[
            service,
            time,
            +total.toFixed(2)
        ]
        Notes.push(...note)
        console.log(Notes)
        res.status(200).send(Notes)
    },
    // clearMemory:(req,res) =>{
    //     Notes = "";
    //     res.status(200).send(Notes)  
    // },
    editJob: (req,res) =>{
        res.status(200).send()
    },

    deleteJob: (req,res) =>{
        console.log('I got a delete Note request here!')
        const {id} = req.params
        const index = Notes.findIndex((e) =>{
            return e.id === +id
        })
        if(index === -1){
            return res.status(500).send("Note not found")
        }
        Notes.splice(index,1)
        res.status(200).send(Notes)
    }
}