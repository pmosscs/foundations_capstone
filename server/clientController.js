const path = require('path');

module.exports = {
    getHomeHTML: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/home.html'));
    },

    getCSS: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getHomeJS: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/home.js'))
    },

    addHouseHTML: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/add-house.html'))
    },

    addHouseJS: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/add-house.js'))
    },

    myHousesHTML: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/my-houses.html'))
    },

    myHousesJS: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/my-houses.js'))
    },

    resourcesHTML: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/resources.html'))
    },

    resourcesJS: (req, res) => {
        // console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/resources.js'))
    }
}