const router = require("express").Router();
const postRoutes = require("./posts");
const itemRoutes = require("./items");
const layoutRoutes = require("./layout");
const warehouseRoutes = require("./warehouse");
const inventoryRoutes = require("./inventory");
const binQtyRoutes = require("./binQty");

// Post routes
router.use("/posts", postRoutes);
router.use("/items", itemRoutes);
router.use("/layout", layoutRoutes);
router.use("/bin", layoutRoutes);
router.use("/inventoryid", inventoryRoutes);
router.use("/warehouse", warehouseRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/binQty", binQtyRoutes);

module.exports = router;
