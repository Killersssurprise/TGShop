var express = require('express');
var router = express.Router();
const _ = require('lodash');
const uniqueFilename = require('unique-filename')

router.post('/', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let data = [];

            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];
                // var filename = uuidv4()+photo.name;
                // returns something like: '/tmp/c5b28f47'
                let randomTmpfile = uniqueFilename('./uploads/')

                randomTmpfile+=photo.name;
                console.log("1: "+randomTmpfile);
                console.log("2: "+'./uploads/' + photo.name);
                //move photo to uploads directory
                // photo.mv('./uploads/' + photo.name);
                photo.mv('./' + randomTmpfile);
                // photo.mv('./uploads/' + filename);

                //push file details
                data.push({
                    name: photo.name,
                    upload_name: randomTmpfile,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            });

            //return response
            res.send({
                status: true,
                message: 'Files are uploaded',
                data: data
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;