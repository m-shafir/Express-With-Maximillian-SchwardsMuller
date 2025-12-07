const path = require("path");

const express = require("express");

const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(express.json()); //  only parse json body

// Parse form submissions (URL-encoded bodies)
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running or port ${PORT}`);
});
