import express from "express";
import db from "./models";
import dotenv from "dotenv";
import { depositeRoutes } from "./routes/deposite.routes";
import cors from "cors";

const app: express.Application = express();

const corsOption = {};

dotenv.config();
const port: number = 8000;

// depositeRoutes(app);
app.get("/", (_req, _res) => {
  _res.send("TypeScript With Express");
});

app.use(cors(corsOption));

app.use("/", depositeRoutes);

app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

db.sequelize
  .sync()
  .then(() => console.log("sync_ok"))
  .catch((err) => console.log(err));
