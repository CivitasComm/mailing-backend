require('dotenv').config()

const express = require("express");
const app = express();
app.use(express.json());

const dbConnect = require("./utils/db-conn-util");
dbConnect();

// const corsMiddleware = require("./middlewares/cors-middleware");
// app.use(corsMiddleware);

require("./routes/routing")(app);


app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is running on port ${process.env.PORT || 5500}`);
});
