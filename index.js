const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data.json');
const allCourses = require("./course.json")

app.get('/', (req, res) => {
    res.send('Edtech API Running');
});

app.get('/category', (req, res) => {
    res.send(category)
})
app.get('/allcourses', (req, res) => {
    res.send(allCourses)
})

app.listen(port, () => {
    console.log('Server running on port', port);
})