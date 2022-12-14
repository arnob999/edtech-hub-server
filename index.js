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


app.get("/category/:id", (req, res) => {
    //Find data With Category Id

    const id = req.params.id;
    if (id == "7") {
        res.send(allCourses);
    } else {
        const selectedCat = allCourses.filter((n) => n.cat_id === id);
        res.send(selectedCat);
    }

});
app.get("/courses/:id", (req, res) => {

    //Find Course Detailed Data Upon Clicked
    const id = req.params.id;
    const selectedcourses = allCourses.filter((n) => n.course_id == id);
    res.send(selectedcourses);
});

app.listen(port, () => {
    console.log('Server running on port', port);
})
//console.log