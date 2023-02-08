var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/',function(req,res){
    // res.sendFile(path.join(__dirname+'../../index.html'));
    // res.sendFile(path.join(__dirname+'../../public/html/goods.html'));
    // res.sendFile(path.join(__dirname+'../../public/html/put_goods.html'));
    res.sendFile(path.join(__dirname+'../../public/html/put_goods.html'));
});

function functionToExecute(){

}

module.exports = router;
