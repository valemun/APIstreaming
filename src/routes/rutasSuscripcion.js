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

router.get("/SeleccionarSuscripcion/:tipo", (req, res) => {
    const {tipo} = req.params;

    suscripcion.forEach (suscripcion =>{
        if (suscripcion.tipo == tipo) {
                res.json (suscripcion);
                console.log (suscripcion.tipo, suscripcion.precio);
        } else {
            console.log ("error");
        }
    });

});

});

module.exports = router;

