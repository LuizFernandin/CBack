const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var cors = require('cors');
app.use(cors());

require('./controller/pessoa')(app);
require('./controller/evento')(app);
require('./controller/auth')(app);

app.listen(3000);