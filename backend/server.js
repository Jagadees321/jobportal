const express=require('express');
const dbconnect=require('./dbconnection/db');
const userroute=require('./routes/userroute');
const jobsroute=require('./routes/jobsroute');
const applicationroute=require('./routes/applicationroute')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()

//middleware
app.use(express.json())
app.use(cors())
app.use(bodyparser.json()); // for parsing application/json
app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-w

//db connection
dbconnect();
app.use('/api',userroute);
app.use('/api/jobs',jobsroute)
app.use('/api/application',applicationroute)


    
app.listen(2004,()=>{
    console.log('server running at port num 2004');
    
})