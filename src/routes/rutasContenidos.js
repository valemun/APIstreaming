const {Router} = require("express");
const router = Router();
//const express = require("express");
//const router = express.Router();

const contenido = require("./dataContenido.json");

router.get("/", (req, res) =>{
    res.json(contenido);
});

router.get("/{idContenido}", (req, res) =>{
    res.json({"name": "John Doe"}); //.json es para json
});

module.exports = router;