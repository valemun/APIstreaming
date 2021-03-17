const {Router} = require("express");
const router = Router();
const usuarios = require('./dataUsuarios.json');

//router.get("/", (req, res) =>{
  //  res.send("si funciona!"); //.send es para mandar string
//});
router.get('/', (req,res) =>{
 
    res.json(usuarios);
});


//router.get("/:id/:otroid", (req, res) =>{
//   console.log(req.params);
//    const {id, otroid} = req.params;
// });

module.exports = router;