var express = require("express");

var router = express();

router.get("/", (req, res, next) => {
    var users = [];
    return res.json({ users: users });
});

module.exports = router;
