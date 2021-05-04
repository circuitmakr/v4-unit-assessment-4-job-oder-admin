
const dContractors = require('../Contractor_Data.json')

let Invoices =[
]
let workId =1;
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
     //invoices = [...invoice];
     workId++;
     id++;
    console.log(invoice)
    // console.log(workId)
        res.status(200).send(invoice)
    },
    addClient: (req,res) => {
        res.status(200).send()
    },
    editJob: (req,res) =>{
        res.status(200).send()
    },
    deleteJob: (req,res) =>{
        res.status(200).send()
    }

}