const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
router
    .route("/")
    .get(postsController.findAllBinQty)
    .post(postsController.createBinQty);

// Matches with "/api/posts/:id"
router
    .route("/:id")
    .get(postsController.findBinQtyById)
    .put(postsController.updateBinQty)
    .delete(postsController.removeBinQty);

module.exports = router;
