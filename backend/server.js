const express=require('express');
const dbconnect=require('./dbconnection/db');
const userroute=require('./routes/userroute');
const jobsroute=require('./routes/jobsroute')
const cors=require('cors')
const app=express()

//middleware
app.use(express.json())
app.use(cors())

//db connection
dbconnect();
app.use('/api',userroute);
app.use('/api/jobs',jobsroute)


    
app.listen(2004,()=>{
    console.log('server running at port num 2004');
    
})