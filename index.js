

const express = require("express");
const app = express();
const path= require("path")

const db = require('./models');

//for user routes
const userRoute = require("./routes/userRoute");


app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);
app.use(express.static(path.join(__dirname, "public")));




//mysql config
(async () => {
  try {
    await db.sequelize.sync();
    app.listen(5000, () => {
      console.log('Server listening on port 5000');
    });
  } catch (error) {
    console.error('Error occurred while synchronizing the database:', error);
  }
})();
