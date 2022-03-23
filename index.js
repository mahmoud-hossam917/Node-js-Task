const express = require('express');
const databaseConnection = require('./config/databaseConnection')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



// job Route
const jobRouter = require('./routes/job.js')
app.use('/api/jobs' , jobRouter)
//------------------------------------------

app.get('/', function(req , res){
  res.send("Hello, world!")

});

// for error pages
app.all('*',(req, res ,next)=>{
    res.status(404).json({
        status:'false',
        message:'Page Not Found ! '
    })
})

//------------------------------------------


const port = process.env.port || 5000;
app.listen(port , ()=>console.log('app is Runing on port '+ port ));