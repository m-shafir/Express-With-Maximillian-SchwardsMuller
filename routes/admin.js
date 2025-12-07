const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res
    .status(200)
    .send(
      `<form action="/admin/add-product" method="POST"><input type='text' name='title' placeholder='Enter Product Name'/><button type="submit">Submit</button></button></button></form>`
    );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
