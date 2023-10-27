const nodemailer = require('nodemailer')


const transportador = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    secure: false,
    tls: { rejectUnauthorized: false }
});


module.exports = transportador