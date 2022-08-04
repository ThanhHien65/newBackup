"user strict";
const Backup = require("../models/appModel.js");
export.getAllinfoserver = (req,res) =>{
    Backup.getAllinfoserver((err,result)=>{
        console.log("show success");
    })
}
