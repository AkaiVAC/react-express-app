const express = require("express");
const connectDB = require("./db/driver");

const app = express();

const port = process.env.port || 5000;
connectDB();

let uuid = 0;
const users = [
    { id: uuid++, name: "Arun", age: 27 },
    { id: uuid++, name: "Anand", age: 25 },
    { id: uuid++, name: "Bhanu", age: 28 },
    { id: uuid++, name: "Rakesh", age: 26 },
    { id: uuid++, name: "Vikesh", age: 24 },
    { id: uuid++, name: "Ramu", age: 29 }
];

app.use("/api/customerModel", require("./api/customer"));

app.get("/users", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234");
    res.json(users);
});

app.listen(port, console.log(`Listening on port: ${port}`));
