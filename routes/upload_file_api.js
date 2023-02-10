var express = require('express');
var router = express.Router();
const uniqueFilename = require('unique-filename')
router.post('/', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;

            let randomTmpfile = uniqueFilename('./uploads/')
            randomTmpfile+=avatar.name;


            //Use the mv() method to place the file in the upload directory (i.e. "uploads")
            // avatar.mv('./uploads/' + avatar.name);
            avatar.mv('./' + randomTmpfile);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;