const express = require('express');
const router = express.Router();

router.post('/user', (req, res) => {
    res.end('Hi add api: ' + req.body.name);

})
module.exports = router;