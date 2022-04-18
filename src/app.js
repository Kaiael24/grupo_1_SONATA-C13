const express = require("express")
const app = express()
const path = require("path")
const process =  require("process")
const methodOverride = require("method-override")
/* se tiene que instalar el dotenv: npm install dotenv */
require('dotenv').config()
const PORT = process.env.PORT || 3000
/* Path para el rutear el public */
const pathResolve = path.join(__dirname, "../public")

/* Ruta del puerto */
app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`))

/* Views cofings */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views")) 

/* Para fijar el public como carpeta de imagenes y estilos. */
app.use(express.static(pathResolve))
/* Para poder usar el metodo POST */
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
/* Para usar el metodo put/delete */
app.use(methodOverride("_method"))

/* Rutas */
const indexRouter = require("./routers/indexRouter")
const userRouter = require("./routers/userRouter")
const productRouter = require("./routers/productRouter")
const adminRouter = require("./routers/adminRouter")

/* Middlewares de Rutas (pedidos) */
app.use("/", indexRouter) // Home - contact
app.use("/usuario", userRouter) // listado, detalle
app.use("/producto", productRouter) // Login, Registro, Perfil
app.use("/admin", adminRouter) // Admin, ABM products, ABM proyectos(emprendimientos)

