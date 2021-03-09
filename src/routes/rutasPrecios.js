const {Router} = require("express");
const router = Router();
//const express = require("express");
//const router = express.Router();

router.get("/", (req, res) =>{
    res.send("si funciona!"); //.send es para mandar string
});

router.get("/home", (req, res) =>{
    res.json({"name": "John Doe"}); //.json es para json
});

router.get("/json", (req, res) =>{
    const data = {"name": "John Doe",
    "id": "1234"
    }
    res.json(data); //.json es para json
});

module.exports = router;

