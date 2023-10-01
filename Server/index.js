import express from "express";
import mongoConnection from "./config/db.js";
import galleryRoutes from "./routes/gallery.js"
import cors from "cors"
import bodyParser from "body-parser"
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use(cors())
app.unsubscribe(express.json())
app.use(express.json());
app.use("/api/v1", galleryRoutes)

const PORT = 8000;
mongoConnection();
app.listen(PORT, ()=>{
    console.log(`api is running on: http://localhost:${PORT}`)
});
