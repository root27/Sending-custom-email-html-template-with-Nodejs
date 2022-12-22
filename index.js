const express = require('express');

const cors = require('cors');

const app = express();

const nodemailer = require('nodemailer');

const handlebars = require('handlebars');

const fs = require('fs');

// const multer = require('multer');

// const upload = multer({dest: 'uploads/'});

const path = require('path');


app.use(express.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.urlencoded({ extended: true }));


app.get("/send", (req, res) => {

   
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,


        auth: {
            user: "oguzhaneee@gmail.com",
            pass: ""
        }
    });

    const filepath = path.join(__dirname,"./extra-mails/6_tablehtml_newyear_tr.html");

    const source = fs.readFileSync(filepath, "utf8").toString();


    const template = handlebars.compile(source);
    

   


    const maillist = ['oguzhaneee@gmail.com'];
    

    const mailOptions = {
        from: "oguzhaneee@gmail.com",
        to: maillist,
        subject: 'Sending Email using Node.js',
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Title of the document</title>
            
            </head>

            <body>

            <table role="presentation" 
            style="border-collapse: separate;mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;"
            >
          
            <tr>
                <td  style="background: url('cid:mainlogo'); height: 100vh; width: 600px; border-radius: 70px; background-repeat: no-repeat;
                background-position: center; background-size: 50% 100%;">
                    
                        
                    
                    
                        <img src="cid:radar"
                            style=" 
                            margin-right: 200px;
                            margin-bottom:300px;
                            width: 418px;
                            border-radius: 250px;" />
                    
                    
                
                </td>
            </tr>
        </table>
            </body>
        </html>
                                        
                                    
                         `,	
        attachments: [
            {
                filename: "newyear.JPG",
                path: path.join(__dirname,"./assets/newyear.JPG"),
                cid: "mainlogo"
            },
            {
                filename: "radarplot_tr.png",
                path: path.join(__dirname,"./assets/radarplot_tr.png"),
                cid: "radar"

            }
        ]

        
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
    console.log("Server is running on port 3001");
    }
)