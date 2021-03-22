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
    const {genre} = req.params;
    const peliculas = [];

    contenido.forEach(cont => {
        if(cont.genero == genre){
            peliculas.push(cont);
        }
    });

    res.send(peliculas);
 });

 router.get("/seleccionarCatalogo/:edad", (req, res) =>{
    const {edad} = req.params;
    const peliculas = [];

    if(edad < 13){
       

        contenido.forEach(cont => {
            if(cont.rating == "g" || cont.rating == "pg"){
                peliculas.push(cont);
            }
        });

    }

    if (edad >= 13 && edad < 18){

        contenido.forEach(cont => {
            if(cont.rating != "r" && cont.rating != "nc-17"){
                peliculas.push(cont);
            }
        });

    }

    if (edad >= 18){

        contenido.forEach(cont => {
            if(cont.genero != "infantil"){
                peliculas.push(cont);
            }
        });

    }

    res.send(peliculas);
    
 });

 router.get("/seleccionarContenido/:suscripcion", (req, res) =>{
    const {suscripcion} = req.params;
    const peliculas = [];

    if(suscripcion == "kids"){
       

        contenido.forEach(cont => {
            if(cont.rating == "g" || cont.rating == "pg" && cont.tipo == "suscripcion"){
                peliculas.push(cont);
            }
        });

    }

    if(suscripcion == "familiar"){
       

        contenido.forEach(cont => {
            if(cont.tipo == "suscripcion"){
                peliculas.push(cont);
            }
        });

    }

    if(suscripcion == "premium"){
       

        contenido.forEach(cont => {
            if(cont.tipo == "premium"){
                peliculas.push(cont);
            }
        });

    }

    res.send(peliculas);
    
 });

module.exports = router;