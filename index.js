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
            pass: "tmqunoerxgwaspte"
        }
    });


    

   


    const maillist = ['oguzhaneee@gmail.com'];
    

    const mailOptions = {
        from: "irmak@uniqgene.com",
        to: maillist,
        subject: 'Sending Email using Node.js',
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Title of the document</title>
            
            </head>

            <body class
    style="background-color: #eaebed; font-family: Poppins; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body"
        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;"
        width="100%" bgcolor="#eaebed">
        <tr>
            <td style="font-family: Poppins; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            <td class="container"
                style="font-family: Poppins; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;"
                width="580" valign="top">
                <div class="content"
                    style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
                    <table role="presentation" class="main"
                        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; border-radius: 3px; width: 100%;
                        ; align-items:center">
                      
                        <tr>
                            <td class="wrapper"
                                style="font-family: Poppins; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                                valign="top">
                               
                                    <img src="cid:radar" style="width: 100%; height: auto;"
                                        />
                                
                            
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>

        <!-- END MAIN CONTENT AREA -->
    </table>

  
   
</body>
        </html>
                                        
                                    
                         `,	
        attachments: [
            
            {
                filename: "radarplot_tr.png",
                path: path.join(__dirname,"./assets/00a9e5.png"),
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