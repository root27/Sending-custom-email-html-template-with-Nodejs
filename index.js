const express = require('express');

const cors = require('cors');

const app = express();

const nodemailer = require('nodemailer');

const handlebars = require('handlebars');

const fs = require('fs');

const multer = require('multer');

const upload = multer({dest: 'uploads/'});



app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.urlencoded({ extended: true }));


app.post("/upload", upload.single("file"), (req, res) => {

    const file = req.file;
    console.log(file)
    const transporter = nodemailer.createTransport({
        service: "",
        host: "",
        port: ,
        secure: true,


        auth: {
            user: "",
            pass: ""
        }
    });

    const filestream = fs.createReadStream(file.path);

    

    // const source = filestream;

    // const template = handlebars.compile(source);



    const mailOptions = {
        from: "",
        to: ',
        subject: 'Sending Email using Node.js',
        html: filestream,
        
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }
    );






})





app.listen(3001, () => {
    console.log("Server is running on port 5000");
    }
)