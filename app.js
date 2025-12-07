const express = require("express");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(express.json()); //  only parse json body

// Parse form submissions (URL-encoded bodies)
app.use(express.urlencoded({ extended: true }));

app.use(adminRouter);
app.use(shopRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running or port ${PORT}`);
});
