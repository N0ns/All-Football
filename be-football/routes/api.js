var express = require('express');
var router = express.Router();
var request = require('request')
/* GET users listing. */
router.get('/getIndex', function (req, res, next) {
    request('https://api.dongqiudi.com/app/global/2/iphone.json?mark=gif&version=576&from=msite_com', (err, response, body) => {
        res.append("Access-Control-Allow-Origin", "*");
        res.send(body);
    })

});

router.get('/getData', function (req, res, next) {

    request(req.query.api, (err, response, body) => {
        res.append("Access-Control-Allow-Origin", "*");
        res.send(body);
    })


});
module.exports = router;