const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'dist/mean-ng6')));
app.use(bodyParser.json());
// performane for parsing json
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api', require('./server/api'));

app.use('*', (req, res) => {
    res.sendfile(path.join(__dirname), 'index.html');
});

const server = app.listen(8001, () => {
    const port = server.address().port;
    console.log('Server is running.. at port : ' + port);
});