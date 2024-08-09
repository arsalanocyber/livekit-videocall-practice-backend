// app.js
import express from "express";
import bodyParser from "body-parser";
import livekitRoutes from "./livekitRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());
app.use("/api/livekit", livekitRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
