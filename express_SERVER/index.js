const express= require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("you'r on the home page")
})
app.get("/about",(req,res)=>{
    res.send("you are on about us page")
})
app.get("/search",(req,res)=>{
    res.send("you are on search page")
})
app.listen(3000,()=>{
    console.log("done")
})