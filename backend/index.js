const express = require("express");
const router = require("./Routes/index");
const userRouter = require("./Routes/user");
const cors = require("cors")
const bodyParser = require('body-parser')


const app = express();

app.use(cors);
app.use(bodyParser.json())
app.use("/api/v1",router)
app.use("/api/v1/user",userRouter)



app.listen(3000,()=>{
    console.log("Server is Running")
})


