const express = require("express");
const connnectToDB = require("./config/db");

const app = express();
//Connect to Mongo DB Atlas
connnectToDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
