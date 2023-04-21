const express = require('express')
const app = express()
const router = require('/router/index')
require('dotenv').config()
const PORT = process.env.PORT || 5000



app.use('/api', router)
const start = async () =>{
    try{
    app.listen(PORT, () => console.log(`Started on port ${PORT}`));
    }catch(err){
        console.log(err)
    }
}

start();