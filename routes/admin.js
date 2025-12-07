const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res
    .status(200)
    .send(
      `<form action="/product" method="POST"><input type='text' name='title' placeholder='Enter Product Name'/><button type="submit">Submit</button></button></button></form>`
    );
});

router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});

module.exports = router;
