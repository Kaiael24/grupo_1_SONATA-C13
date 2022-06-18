const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", productController.list)
router.get("/:id", productController.detalle)
/* router.get("/carrito", productController.carrito) */


module.exports = router