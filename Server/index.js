import express from 'express';
import dotenv from 'dotenv'
import ConnectDB from './Configs/ConnectDB.js';
import authRouter from './Routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config()
import cors from 'cors'

const app = express();
app.use(cors({
origin: 'http://localhost:5173/',
credentials: true
}))

app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.json("Hello from Server");
})

app.use("/api/auth", authRouter)
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
    ConnectDB()
})