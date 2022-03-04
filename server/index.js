const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));
