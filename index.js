const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const port = 3111;
app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));
app.listen(port, () => console.log(`App listening to port ${port}`));
// launch all 4 services.
// serve html.
// get the apps through scripts. 
// 
//
//
//