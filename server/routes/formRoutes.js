const express = require('express');
const {submitForm,downloadFile} = require('../controllers/formController')
const upload = require('../config/multerUpload')

const router = express.Router()


//Post route to handle form submission
router.post('/submit',upload.single("file"),submitForm)

router.get('/download/:filename',downloadFile)

module.exports = router