const {Router} = require("express");
const router = Router();

router.get("/", (req, res) =>{
    res.send("si funciona!"); //.send es para mandar string
});

//router.get("/:id/:otroid", (req, res) =>{
//   console.log(req.params);
//    const {id, otroid} = req.params;
// });

module.exports = router;