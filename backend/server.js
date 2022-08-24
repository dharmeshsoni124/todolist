const express = require("express");
const app = express();
const mongoose = require("mongoose");
const signupModal = require("./models/signup-Modal");
const { checkExistinguser, generatePasswordHash } = require("./utility")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
require('dotenv').config();


const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//starting the server
app.listen(process.env.PORT || 3010, (err)=> {
    if(!err) {
        console.log("Server started at port 3010")
    } else {
        console.log(err);
    }
});

mongoose.connect("mongodb+srv://dharmesh:dharmesh124@instaclone1.wupz9sm.mongodb.net/Todo?retryWrites=true&w=majority",()=>{
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});




app.post("/register", async (req, res) => {
    if (await checkExistinguser(req.body.username)) {
        res.status(200).send("user already exist")
    } else {
        generatePasswordHash(req.body.password).then((passwordHash) => {
            signupModal.create({ username: req.body.username, password: passwordHash }).then((data) => {
                res.status(200).send("user signedup sucessfully")
            }).catch((err) => {
                res.status(400).send(err.message)
            })

        })

    }
})


app.post("/signin", (req, res) => {
    signupModal.find({ username: req.body.username }).then((userData) => {

        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val) => {
                if (val) {
                    const authToken = jwt.sign(userData[0].username, process.env.SECRET_KEY);
                    console.log(1)
                    res.status(200).send({ authToken });
                } else {
                    res.status(400).send("invalid password please enter correct password")
                }
            })
        } else  {
            res.status(400).send("user not exist please signup")
        }
    })
})

app.post("/logout", (req, res) => {
    authToken = ""
    res.status(200).send("Loggedout sucessfully")
})