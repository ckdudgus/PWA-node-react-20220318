var express = require('express')
var router = express.Router();

router.post('/' , (req , res) => {
    res.send('postcyhsend요청 응답')
})

module.exports = router;