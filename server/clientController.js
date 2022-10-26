const path = require('path');

module.exports = {
    getHTML: (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/index.html'));
    },

    getCSS: (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../client/main.js'))
    }
}