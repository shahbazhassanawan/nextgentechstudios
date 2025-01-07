const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir); 
    },
    filename: function (req, file, cb) {
        const identifier = req.body.fullName ? req.body.fullName.replace(/\s+/g, '_') : 'unknown';
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const sanitizedOriginalName = file.originalname.replace(/\s+/g, '_');
        cb(null, `${identifier}-${uniqueSuffix}-${sanitizedOriginalName}`);
    },
});

const fileFilter = (req, file, cb) => {
   
    const allowedMimeTypes = [
        'image/jpeg', 'image/png', 'image/gif',
        'application/pdf',                     
        'application/msword',                
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',                         
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); 
    } else {
        cb(new Error('Only images, text files, and specific documents are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, 
});

module.exports = upload;
