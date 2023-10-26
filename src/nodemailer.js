const nodemailer = require('nodemailer')

const transportador = nodemailer.createTransport({
    host: 'smtp.mailosaur.net',
    port: 587,
    auth: {
        user: '7tlvhdnv@mailosaur.net',
        pass: '0T1IlgewdJMVems7iqwKDcNDbyKT8rLc'
    },
    secure: false,
    tls: { rejectUnauthorized: false }
})

module.exports = transportador