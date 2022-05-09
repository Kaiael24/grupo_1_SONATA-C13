const express = require("express")
const router = express.Router()
/* const methodOverrise */
const adminController = require("../controllers/admin/adminController")
const adminProductController = require("../controllers/admin/adminProductController")
const uploadFile = require("../middlewares/uploadProductImg")
const validateAddProduct = require("../validations/adminAddProduct")

// Get - index
router.get("/", adminController.index)

router.get("/search", adminController.search)

/* router.get("/producto/:id", adminController.product) */

/* CRUD  PRODUCTS*/

// Get - Lista productos
router.get("/products", adminProductController.list)

// Get - Agregar producto (Pero no los crea)
router.get("/products/create", adminProductController.productAdd)

// Post - Crear un producto en DB
router.post("/products", uploadFile.single("image"), validateAddProduct ,adminProductController.productCreate)


// Get - Editar producto

router.get("/products/edit/:id", adminProductController.productEdit)

//Put - actualizar producto

router.put("/products/:id", uploadFile.single("image"), adminProductController.productUpdate)

router.delete("/products/eliminar/:id", adminProductController.productDelete)


module.exports = router;