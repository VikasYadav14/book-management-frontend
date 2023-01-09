const express = require("express");
const router = express.Router();

const { createUsers, login } = require("../controllers/userControllers");
const { createBooks, getBooks, getBookById, updateBook, deleteBookById } = require("../controllers/bookControllers");
const { authenticate, authorize } = require("../middlewares/auth");
const { createReview, updateReview, deleteReview } = require("../controllers/reviewControllers");


//---------User Api's----------//
router.post("/register", createUsers);
router.post("/login", login)

//-----------Book Api's----------//
router.post("/book", authenticate,authorize, createBooks)
router.get("/book", getBooks)
router.get("/book/:bookId",  getBookById)
router.put("/book/:bookId", authenticate, authorize, updateBook)
router.delete("/book/:bookId", authenticate, authorize, deleteBookById)

//------------review Api's----------//
router.post("/book/:bookId/review",  createReview)
router.put("/book/:bookId/review/:reviewId",  updateReview)
router.delete("/book/:bookId/review/:reviewId",  deleteReview)


module.exports = router