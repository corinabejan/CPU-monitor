const express = require("express");
const app = express();
const corsMiddleware = require("cors");
const jsonParser = express.json();

const PORT = 4000;

const cpuInfoRouter = require('./cpu.js')

app.use(corsMiddleware());
app.use(jsonParser);

app.use('/info', cpuInfoRouter)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
