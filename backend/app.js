const express = require("express")
const app  = express();
const cors = require("cors")
const errorMiddleware = require("./middleware/error")

app.use(express.json())
app.use(cors())

//route imports

const product = require("./routes/productRoute")
app.use("/api/v1",product);

//middleware for error
app.use(errorMiddleware)

module.exports = app;