const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../controllers/booksController");
require("dotenv").config();
router.route("/all").post((req, res)=>{
  console.log("hello")
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+ "moby dick"+"&key="+process.env.BOOK_API).then((data)=>{
    console.log(data)
    res.json(data)
  }).catch ((err)=>{
    console.log(err)
    res.json(err)
  })
})
// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;

