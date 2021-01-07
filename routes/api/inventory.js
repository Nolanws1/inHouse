const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAllInventory)
  .post(postsController.createInventory);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findInventoryById)
  .put(postsController.updateInventory)
  .delete(postsController.removeInventory);

module.exports = router;
