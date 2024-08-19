require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')
const tasksRouter = require('./routes/tasks')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
// app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
app.use("/api", tasksRouter.router)
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

mongoose.connect(process.env.MONGO_URL);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
