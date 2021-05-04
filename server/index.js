//required 
const express = require('express')
const axios = require('axios')
const customers =require('../src/CustomerData.json')


//read in Contractors
const fs = require('fs')

//creat app instance
const app = express()
const PORT = 5000;

//Top level middleware
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//require controllers
const jobCtrl = require('./Controllers/jobcontroller')


//endpoints
app.get('/api/maintenance/:type',jobCtrl.getContractors)
app.post('/api/maintenance/:id,:type',jobCtrl.addJob)
app.put('/api/maintenance/:id',jobCtrl.editJob)
app.delete('/api/maintenance/:id',jobCtrl.deleteJob)



app.listen(PORT, console.log(`This app is listening on port ${PORT}`))