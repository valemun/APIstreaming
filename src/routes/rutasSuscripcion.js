const {Router} = require("express");
const router = Router();
const suscripcion = require("./dataSuscripcion.json");
//console.log(suscripcion); 

router.get("/", (req, res) =>{
    res.send(suscripcion); //.send es para mandar string
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    suscripcion.forEach(cont => {
        if (cont.id == id) {
            res.json(cont);
        }
    })
});

router.get("/Tipo/:tipo", (req, res) => {
    const {tipo} = req.params;

    suscripcion.forEach (suscripcion =>{
        if (suscripcion.tipo == tipo) {
                res.json (suscripcion);
                console.log (suscripcion.tipo, suscripcion.precio);
        }
    });

});

//esta mal, solo es guia qwq
router.get("/numusuarios/:usuarios", (req, res) => {
    const {usuarios} = req.params;

    suscripcion.forEach (suscripcion =>{
        if (suscripcion.usuarios == usuarios) {
                res.json (suscripcion);
                console.log (suscripcion.tipo, suscripcion.usuarios);
        }
    });

});

module.exports = router;

