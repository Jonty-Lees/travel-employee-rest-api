// requirements
const express = require ('express');
const mongoose = require('mongoose');

// constants
const app = express();
const routes = require('./routes/routes')
const port = 3500;
mongoose.connect('mongodb://127.0.0.1/api')
app.use(express.json())
app.use('/api', routes)


app.listen(port, ()=>{
    console.log(`You are listening on port: ${port}`)
})