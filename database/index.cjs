const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./db.cjs");
const cors = require("cors");

const app = express();
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(cors());

const router = require("./routers/userRouter.cjs");
const port = process.env.HTTP_PORT;
dbConnection();

app.use("/users", router);

app.get("/", (req, res) => {
    res.send("Server working");
});

app.listen(port, () => {
    console.log("Server running on port:", port);
});
