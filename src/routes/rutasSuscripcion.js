const {Router} = require("express");
const router = Router();

const contenido = require("./dataSuscripcion.json");
//console.log(suscripcion);

router.get("/", (req, res) =>{
    res.send("si funciona!"); //.send es para mandar string
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    contenido.forEach(cont => {
        if (cont.id == id) {
            res.json(cont);
        }
    })
})

router.get("/seleccionarTipo/:tipo", (req, res) => {
    const {tipo} = req.params;
    
})
module.exports = router;

