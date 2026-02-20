const express = require("express")
const users = require("./anime_fake_Data.json")
const app = express()

app.get("/", (req, res) => {
    res.send("HOME PAGE")
})

app.get("/data", (req, res) => {
    return res.json(users)
})

app.get("/data/user/:id", (req, res) => {
    let id = Number(req.params.id)

    const singleUser = users.find((user) => user.id === id)

    return res.json(singleUser)
})

app.listen(3000, () => {
    console.log("done")
})