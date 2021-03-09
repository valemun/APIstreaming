const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuaciones
app.set("port", 3000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev")); //mas detalle "combined"
app.use(express.json());

//Rutas
app.use("/api/contenidos", require("./routes/rutasContenidos"));
app.use("/api/precios", require("./routes/rutasPrecios"));
app.use("/api/usuarios", require("./routes/rutasUsuarios"));
//app.use(require("./routes/rutasAdmin"));

//Empezando el servidor
app.listen(app.get("port"));
console.log("mi primer servidor");