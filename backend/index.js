import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import connectDB from './src/congif/db.js';



const PORT = process.env.PORT || 3000

connectDB()
.then(() => {

    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (err) {
        console.log("Error while running server", err.message)
    }

}).catch((err) => {
    console.log("Database connection error ", err.message)
})