const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const path = require("path");
const connection = mysql.createConnection({
  host: "10.0.0.20",
  port: 3307,
  user: "root",
  password: "P@ssw0rd",
  database: "nodelogin",
});
