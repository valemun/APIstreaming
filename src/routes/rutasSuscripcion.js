const {Router} = require("express");
const router = Router();
const suscripcion = require("./dataSuscripcion.json");
//console.log(suscripcion); 

router.get("/", (req, res) =>{
    res.json(suscripcion); //.send es para mandar string
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
    const sus = [];

    suscripcion.forEach (suscripcion =>{
        if (suscripcion.tipo == tipo) {
               sus.push(suscripcion);
        } else {
            console.log ("error");
        }
    });

    res.send(sus);

});


module.exports = router;

