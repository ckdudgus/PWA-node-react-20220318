var express = require('express')
var router = express.Router();

router.get('/' , (req , res) => {
    res.send('mysqlsend요청 응답')
})

module.exports = router;