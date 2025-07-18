const express = require("express");
const server = express();
const productRouter = require("./router/productRouter");
// const imageRouter = require("./router/imageRouter");





server.use(productRouter);
// server.use(imageRouter)
server.set("view engine", "ejs"); // Corrected to view engine
server.listen(5000, () => {
    console.log("Server is running on port: 5000");
});