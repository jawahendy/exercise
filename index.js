const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080, ()=>{
    console.log('Server Berjalan di Port : 8080');
});