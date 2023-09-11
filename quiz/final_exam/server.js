const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res, next) => {
    let arr = [1, 2, 3];
    res.send(arr);
})

app.get('/object', (req, res, next) => {
    let obj = { name: "John" };
    res.send(obj);
})

app.use('/pdf', (req, res, next) => {
    res.set('Content-Type', 'application/pdf');
    res.contentType("application/pdf");
    res.sendFile(__dirname + "/lecture.pdf")
})

app.use((err, req, res, next) => {
    console.log('There is an error', err);
    res.send(err);
})

app.listen(3000, () => {
    console.log('server is started')
})