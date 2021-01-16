import axios from "axios";

export default {
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/posts", postData);
  },
  // Gets all layout
  getLayouts: function () {
    return axios.get("/api/layout");
  },
  // Gets the layout with the given id
  getLayout: function (id) {
    return axios.get("/api/layout/" + id);
  },
  // Deletes the layout with the given id
  deleteLayout: function (id) {
    return axios.delete("/api/layout/" + id);
  },
  // Saves a layout to the database
  saveLayout: function (postData) {
    return axios.post("/api/layout", postData);
  },
  // Gets all items
  getItems: function () {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function (id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function (id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function (postData) {
    return axios.post("/api/items", postData);
  },
  // Gets all items
  getWarehouses: function () {
    return axios.get("/api/warehouse");
  },
  // Gets the item with the given id
  getWarehouse: function (id) {
    return axios.get("/api/warehouse/" + id);
  },
  // Deletes the item with the given id
  deleteWarehouse: function (id) {
    return axios.delete("/api/warehouse/" + id);
  },
  // Saves a item to the database
  saveWarehouse: function (postData) {
    return axios.post("/api/warehouse", postData);
  },
  // Gets all items
  getInventories: function () {
    return axios.get("/api/inventory");
  },
  // Gets the item with the given id
  getInventory: function (id) {
    return axios.get("/api/inventory/" + id);
  },
  // Deletes the item with the given id
  deleteInventory: function (id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a item to the database
  saveInventory: function (postData) {
    return axios.post("/api/inventory", postData);
  },
  // Gets all items
  getBinQuantities: function () {
    return axios.get("/api/binQty");
  },
  // Gets the item with the given id
  getBinQuantity: function (id) {
    return axios.get("/api/binQty/" + id);
  },
  // Deletes the item with the given id
  deleteBinQuantity: function (id) {
    return axios.delete("/api/binQty/" + id);
  },
  // Saves a item to the database
  saveBinQuantity: function (postData) {
    return axios.post("/api/binQty", postData);
  }
};
