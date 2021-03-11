const {Router} = require("express"); //hola
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

   contenido.forEach(cont => {
       if(cont.id == id){
           res.json(cont);
       }
   });
});

router.get("/genero/:genre", (req, res) =>{
    const {genero} = req.params;
    const peliculas = [];

    contenido.forEach(cont => {
        if(cont.genero == genero){
            peliculas.push(cont);
        }
    });

    res.send(peliculas);
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