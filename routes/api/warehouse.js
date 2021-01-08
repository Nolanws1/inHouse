const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAllWarehouse)
  .post(postsController.createWarehouse);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findWarehouseById)
  .put(postsController.updateWarehouse)
  .delete(postsController.removeWarehouse);

module.exports = router;
