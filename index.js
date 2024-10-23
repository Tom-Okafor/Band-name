import express from "express";
import { sendNames } from "./controller.js";

const APP = express();

APP.use(express.static("public"));

APP.get("/", (request, response) => {
    response.render("index.ejs");
});
APP.get("/name", sendNames);

APP.listen(1510, () => {
    console.log("Server is currently listening at http://localhost:1510");
});
