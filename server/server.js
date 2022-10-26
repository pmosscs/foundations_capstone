const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('client'));


/******** Client Files ***********/
const { getHTML, getCSS, getJS } = require('./clientController');

app.get('/', getHTML);
app.get('/css', getCSS);
app.get('/js', getJS)



const port = process.env.PORT || 4005

app.listen(port, console.log(`server running on ${port}`));