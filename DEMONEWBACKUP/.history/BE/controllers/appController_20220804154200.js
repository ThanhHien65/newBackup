"use strict";
const Backup = require("../models/appModel.js");
s.getAllinfoserver = (req,res) =>{
    Backup.getAllinfoserver((err,result)=>{
        console.log("showSuccess");
        if(err) res.send(err);
        console.log("res",result);
        res.send(result)
    })
}
