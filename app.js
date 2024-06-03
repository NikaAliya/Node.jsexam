import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import companyRoutes from "./routes/companyRoutes.js";
import companyProfileRoutes from "./routes/companyProfileRoutes.js";

const app = express();
const PORT = 5000;

connectDB();

app.use(bodyParser.json());

app.use(companyRoutes);
app.use(companyProfileRoutes);

app.listen(PORT, () => {
  console.log(`Serveris veikia ant http://localhost:${PORT}`);
});
