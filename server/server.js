var express = require("express");
var app = express();
const port = 3000;

app.get("/", (req, res) => {
    return res.json({ message: "Wellcome to Devmuscles" });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
});
