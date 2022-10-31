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
app.get('/addhousepage', addHouseHTML);
app.get('/addhousejs', addHouseJS);
app.get('/myhousespage', myHousesHTML);
app.get('/myhousesjs', myHousesJS);
app.get('/resourcespage', resourcesHTML);
app.get('/resourcesjs', resourcesJS);


/******** action endpoints **********/
let { addHouse, getAllHouses, deleteHouse, getAllContactedHouses, changeContacted, undoContacted, archiveHouse, getArchived, undoArchive } = require('./controller')
app.post('/api/addHouse', addHouse)
app.get('/api/getHouses', getAllHouses)
app.delete('/api/houses/:id', deleteHouse)
app.get('/api/getContactedHouses', getAllContactedHouses)
app.put('/api/houses/:id', changeContacted)
app.put('/api/houses/undo/:id', undoContacted)
app.put('/api/houses/archive/:id', archiveHouse)
app.get('/api/getArchived', getArchived)
app.put('/api/houses/undoArchive/:id', undoArchive)


const port = process.env.PORT || 4005

app.listen(port, console.log(`server running on ${port}`));