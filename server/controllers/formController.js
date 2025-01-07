const transporter = require('../config/smtp')
const {validateEmail} = require('../utils/validators')
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');

const submitForm = async(req,res) => {
    try{
        const {fullName,email,projectType,timeline,phoneNumber,description,budget,nda} = req.body
        
        if (!email || !validateEmail(email)) {
            return res.status(400).json({ error: "Invalid email format. Please provide a valid email address." });
        }

        let uploadedFile = null;
        let fileUrl = "N/A"
        if (req.file) {
          uploadedFile = {
            originalName: req.file.originalname,
            savedName: req.file.filename, 
            path: req.file.path,
            size: req.file.size,
          };
          fileUrl = `http://localhost:5000/api/form/download/${req.file.filename}`;
        }



        //Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to:process.env.TO_EMAIL,
            subject:'New Project Submission',
            html: `<p>You have a new project submission:</p>
            <p><strong>Full Name: </strong> ${fullName || 'N/A'}</p>
            <p><strong>Email: </strong> ${email || 'N/A'}</p>
            <p><strong>Type of Project: </strong> ${projectType || 'N/A'}</p>
            <p><strong>Timeline: </strong> ${timeline || 'N/A'}</p>
            <p><strong>Phone Number: </strong> ${phoneNumber || 'N/A'}</p>
            <p><strong>Description: </strong> ${description || 'N/A'}</p>
            <p><strong>Budget: </strong> ${budget ? `$${budget}` : 'N/A'}</p>
            <p><strong>File: </strong> ${uploadedFile ? `<a href="${fileUrl}" download>${uploadedFile.savedName}</a>` : "N/A"}</p>
            <p><strong>NDA: </strong> ${nda ? nda : "N/A"}</p>`
        }

        //send email
        await transporter.sendMail(mailOptions)
        res.status(200).json({message:'Form submitted successfully.'})
    }catch(error){
        console.log('Error sending email: ',error)
        res.status(500).json({message:'Failed to submit the form'})
    }
}

const downloadFile = async(req,res)=>{
    const {filename} = req.params
    const filePath = path.join(uploadsDir,filename)
    if(fs.existsSync(filePath)){
        res.download(filePath,filename,(err)=>{
            if(err){
                console.log('Error downloading',err)
                res.status(500).send('Error downloading the file.')
            }
        })
    }else{
        res.status(404).send('File not found')
    }
}

module.exports = {submitForm,downloadFile}