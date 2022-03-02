const express=require("express");
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello , server is up");
})

app.post("/bfhl",(req,res)=>{
    const comingData=req.body.data;
    console.log(comingData)
    const number =comingData.filter((number)=>{
        if(!isNaN(number)){
            return number;
        }
    })
    const alphabets=comingData.filter((number)=>{
        if(isNaN(number)){
            return number;
        }
    })
    const responseData={
        is_success:true,
        user_id:"john_doe_05092001",
        email:"john@gmail.com",
        rollnumber:12345,
        numbers:number,
        alphabets:alphabets
    }

    res.send(responseData);
})

const port=process.env.PORT || 9001;
app.listen(port,()=>{
    console.log("server running")
})