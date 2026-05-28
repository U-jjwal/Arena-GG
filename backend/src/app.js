import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Working");
})

export default app;