const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const category = require('./data/category.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('This is server site of p skool')
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = category.find(c => c.id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})