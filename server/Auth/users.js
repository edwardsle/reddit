const express = require('express');
const db = require("../db");
let router = express.Router();

// const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const session = require('express-session');

router
    .route("/register")
    .post(async (req, res) => {
        const { userName, email, password } = req.body;
        // const hashVal = await bcrypt.genSalt(20);
        // const hashPass = await bcrypt.hash(password, hashVal);
        // console.log(hashPass);
        db.query("insert into reddit.customers (username,email,pass) values ($1,$2,$3)",
            [userName, email, password], function (err, result) {
                if (err) {
                    res.send({ err: err });
                }
                else {
                    res.send({
                        "message": "Sucessfully register user"
                    });
                }
            });
    });


const verifyJWT = (req, res, next) => {
    const token = req.headers["Bearer "];
    if (!token) {
        res.send("You need token")
    }
    else {
        jwt.verify(token, "datatest", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Authentification failed" })
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

router
    .route("/login")
    .post(async (req, res) => {
        const username = req.body.userName;
        const password = req.body.password;
        db.query("select * from reddit.customers where customers.username = $1;",
            [username], function (err, result) {
                if (err) {
                    return res.send({ err: err });
                }
                if (result.rowCount > 0) {
                    if (result.rows[0].pass == password) {
                        const id = result.rows[0].id;
                        const name = result.rows[0].username;
                        const token = jwt.sign({ id, name }, "datatest", {
                            expiresIn: 300,
                        })
                        res.json({ message: "success", token: token, user: result.rows[0]});
                        req.session.user = result.rows[0];
                    }
                    else {
                        res.json({ message: "failed", message: "Wrong username/password" })
                    }
                }
                else {
                    res.json({ message: "failed", message: "User doesn't exist" })
                }
            });
    })
    .get(verifyJWT ,async (req, res) => {
        res.json({message:"Authication Sucessfully", user: req.session.user});
    })

module.exports = router;