require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('client'));


/******** Client Files ***********/
const { getHomeHTML, getCSS, getHomeJS, addHouseHTML, addHouseJS, myHousesHTML, myHousesJS, resourcesHTML, resourcesJS } = require('./clientController');

app.get('/', getHomeHTML);
app.get('/css', getCSS);
app.get('/homejs', getHomeJS);
app.get('/addhouse', addHouseHTML);
app.get('/addhousejs', addHouseJS);
app.get('/myhouses', myHousesHTML);
app.get('/myhousesjs', myHousesJS);
app.get('/resources', resourcesHTML);
app.get('/resourcesjs', resourcesJS);


/******** action endpoints **********/



const port = process.env.PORT || 4005

app.listen(port, console.log(`server running on ${port}`));