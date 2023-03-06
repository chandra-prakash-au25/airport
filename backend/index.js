const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const cors=require('cors')
app.use(cors())
const routes=require('./routes/routes')



app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/',routes)


app.listen(4000,()=>{
    console.log("server is running")
})