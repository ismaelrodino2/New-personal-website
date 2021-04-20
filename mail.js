
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  'Mdedad865b7a731092e0e74b82bd96d1a-a09d6718-98ca2053', 
        domain: process.env.DOMAIN || 'sandbox12615263c5a447b78371949e707a547f.mailgun.org' 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email, 
        to: 'ismael.rodino@hotmail.com', 
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
