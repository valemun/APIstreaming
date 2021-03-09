const {Router} = require("express");
const router = Router();

router.get("/", (req, res) =>{
    res.send("si funciona!"); //.send es para mandar string
});

module.exports = router;