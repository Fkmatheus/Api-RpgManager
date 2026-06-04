const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const connection = require("./database/connection");

const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

connection
    .authenticate()
    .then(() => {
        console.log("Conectado ao banco!");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/", routes);

app.listen(45000, () => {
    console.log("API Rodando");
});