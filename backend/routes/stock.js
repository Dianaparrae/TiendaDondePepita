let express = require("express");
let Stock = require("../controllers/stock");

let api = express.Router();
api.post("/stock/registroStock", Stock.registroStock);

module.exports = api;
