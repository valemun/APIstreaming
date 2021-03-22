const {Router} = require("express");
const router = Router();
const usuarios = require('./dataUsuarios.json');

//router.get("/", (req, res) =>{
  //  res.send("si funciona!"); //.send es para mandar string
//});
router.get('/', (req,res) =>{
 
    res.json(usuarios);
});

router.get("/:id", (req, res) =>{
  const {id} = req.params;

  usuarios.forEach(cont => {
      if(cont.id == id){
          res.json(cont);
      }
  });
});

router.get("/:id/suscripcion", (req, res) =>{
  const {suscripcion} = req.params;
  const {id} = req.params;
  usuarios.forEach(cont =>{
    if(cont.id == id){
      res.json(cont.Suscripcion);
    }
  });
});

module.exports = router;