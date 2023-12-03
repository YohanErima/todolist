const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todosRoutes");

require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("Je suis actif sur le port 3000");
});
