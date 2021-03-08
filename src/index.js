const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuaciones
app.set("port", 3000);

//Middlewares
app.use(morgan("dev")); //mas detalle "combined"
app.use(express.json());

//Rutas
app.use(require("./routes/rutas"));
//app.use(require("./routes/rutasAdmin"));

//Empezando el servidor
app.listen(app.get("port"));
console.log("mi primer servidor");