import app from "./app";
import { dbConnect } from "./src/Service/mongo";

//connect to mongoDB database

const startServer = async () => {
    await dbConnect();
    const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on PORT: http://localhost:${PORT}`);
})
}

startServer();


