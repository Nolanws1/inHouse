const router = require("express").Router();
const postRoutes = require("./posts");
const itemRoutes = require("./items");
const layoutRoutes = require("./layout");
const warehouseRoutes = require("./warehouse");
const inventoryRoutes = require("./inventory");
const inventoryRoutes = require("./binQty");

// Post routes
router.use("/posts", postRoutes);
router.use("/items", itemRoutes);
router.use("/layout", layoutRoutes);
router.use("/warehouse", warehouseRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/binQty", binQtyRoutes);

module.exports = router;
