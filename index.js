const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const connection = require("./database/connection");

const routes = require("./routes/routes");

// 🔥 ESSENCIAL (substitui body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


app.listen(45000, "0.0.0.0", () => {
    console.log("API Rodando");
});