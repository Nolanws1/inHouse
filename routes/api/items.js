const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAllItems)
  .post(postsController.createItem);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findItemById)
  .put(postsController.updateItem)
  .delete(postsController.removeItem);

module.exports = router;
