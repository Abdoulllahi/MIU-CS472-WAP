const express = require('express');
const cors = require('cors');
const bookRouter = require('./router/bookRouter');

const app = express();

app.use(cors());
app.use(express.json())
app.use(bookRouter);

app.listen(9000, ()=> {
    console.log('Listening on port 9000')
})