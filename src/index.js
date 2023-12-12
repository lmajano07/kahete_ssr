import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import customerRouter from "./routes/customer.router.js";

const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(customerRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
