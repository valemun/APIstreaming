const {Router} = require("express");
const router = Router();
//const express = require("express");
//const router = express.Router();

const contenido = require("./dataContenido.json");
//console.log(contenido);

router.get("/", (req, res) =>{
    res.json(contenido);
});

router.get("/:id", (req, res) =>{
   const {id} = req.params;

   contenido.forEach(contenido => {
       if(contenido.id == id){
           res.json(contenido);
       }
   });
});

router.get("/:genre", (req, res) =>{
    const {genre} = req.params;
 
    contenido.forEach(contenido => {
        if(contenido.genre == genre){
            res.json(contenido);
        }
    });
 });

 router.get("/seleccionarPaquete/:edad", (req, res) =>{
    const {edad} = req.params;
    
    if(edad < 13){
       
        contenido.forEach(contenido => {
            if(contenido.rating == "g"){
                res.json(contenido);
            }
        });

    }
    if (edad > 13){

        contenido.forEach(contenido => {
            if(contenido.rating == "g" || contenido.rating == "pg-13"){
                res.json(contenido);
            }
        });

    }
    
 });

module.exports = router;