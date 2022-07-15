import express from 'express'
import Connection from './connection/db.js';
import defaultData from './default.js';
const app =  express()
Connection();
app.listen(8000, function(){

    console.log("server is running");
})
defaultData();