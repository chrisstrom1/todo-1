let express = require("express");

let router = express.Router();

let controller = require("./controller");


// add items
router.post("/items", controller.addItem);

// get all items(summary)
router.get("/items", controller.listItems);

// get an item (details)
router.get("/items/:id",controller.getItem);

// delete an item
router.delete("/items/:id", controller.deleteItem);

// update an item
router.put("/items/:id", controller.updateItem);


module.exports = router;

/**
 POST - add item
 DELETE - remove item
 PUT - update item
 GET - list items (summary)
 GET - get item details
 */