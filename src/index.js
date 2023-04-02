const express = require("express");
const route = require("./route/route");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const multer = require("multer")
app.use(multer().any())
mongoose.set('strictQuery', true);
mongoose
    .connect(
        "mongodb+srv://mnu4513:1234qwer@firstcluster.daae6aq.mongodb.net/product-management",
        { UseNewUrlParser: true }
    )
    .then(() => console.log("Mongo-Db is connected"))
    .catch((err) => console.log(err.message))

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log("listening at " + (process.env.PORT || 3000))
})