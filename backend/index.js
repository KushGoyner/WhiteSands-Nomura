const express  = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require("./config/db")

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 9000;

// Connect to Mongodb
connectDB();

app.get('/',(req,res)=>{
    res.send("Server Running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})