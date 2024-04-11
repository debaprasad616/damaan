const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Page");
});

const port = 8000; // Change this to the port number you want to use

app.listen(port, () => {
  console.log(`Site is running on port http://127.0.0.1:${port}`);
});

