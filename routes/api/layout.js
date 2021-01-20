const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAllLayouts)
  .get(postsController.findBins)
  .post(postsController.createLayout);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findLayoutById)
  .put(postsController.updateLayout)
  .delete(postsController.removeLayout);

module.exports = router;
