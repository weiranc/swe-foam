const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const router = require('./router');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
