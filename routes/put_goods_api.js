var express = require('express');
var router = express.Router();

var http = require('http');
const jsonParser = express.json();

var name = "name";
var price = "price";
var count = "0";
var description = "nothing";


router.all("/", jsonParser, function (req, res) {


    try {
        var mName = req.param('name');
        var mPrice = req.param('price');
        var mCount = req.param('count');
        var mDescription = req.param('description');


        if (typeof mName !== 'undefined' && mName !== null) {
            name = mName;
        } else {
            let s = '{"error":' + "no param name" + '}';
            res.send(s);
            return;
        }

        if (typeof mPrice !== 'undefined' && mPrice !== null) {
            price = mPrice;
        } else {
            let s = '{"error":' + "no param price" + '}';
            res.send(s);
            return;
        }

        if (typeof mCount !== 'undefined' && mCount !== null) {
            count = mCount;
        } else {
            let s = '{"error":' + "no param count" + '}';
            res.send(s);
            return;
        }

        if (typeof mDescription !== 'undefined' && mDescription !== null) {
            description = mDescription;
        } else {
            let s = '{"error":' + "no param description" + '}';
            res.send(s);
            return;
        }

        var data = {
            name: mName,
            price: mPrice,
            count: mCount,
            // ping: (pingMS2 - pingMS1),
            description: mDescription
        };

        let answer = JSON.stringify(data);
        res.send(answer);

        // var answ = '';
        //
        // switch (device_type) {
        //     case null:
        //         kordon_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        //     case 'undefined':
        //         kordon_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        //     case kordonID:
        //         kordon_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        //     case vocordID:
        //         vocord_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        //     case orlanID:
        //         orlan_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        //     default:
        //         kordon_driver.getFullCamInfoData(login, password, ip, port, timestampStart, timestampEnd, res);
        //         break;
        // }

    } catch (e) {

        console.log(e);
        res.send(e);
    }

});

module.exports = router;