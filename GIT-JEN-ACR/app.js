'use strict';

const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';
JWT_SECRET=mfefkuhio3k2rjkofn2mbikbkwjhnkj

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World 219')
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
