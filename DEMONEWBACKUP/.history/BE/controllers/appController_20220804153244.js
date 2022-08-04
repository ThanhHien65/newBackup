"user strict";
const Backup = require("../models/appModel.js");
export.getAllinfoserver = (req,res) =>{
    Backup.getAllinfoserver((err,result)=>{
        console.log("showSuccess");
        if(err) res.send()
    })
}
