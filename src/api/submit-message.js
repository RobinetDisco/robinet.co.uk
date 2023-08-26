// Adapted from https://rodneylab.com/gatsby-cloud-functions-recaptcha/
import axios from 'axios'
import nodemailer from 'nodemailer'

const recaptchaValidation = async ({ recaptchaToken }) => {
  const result = await (async () => {
    try {
      const response = await axios({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'POST',
        params: {
          secret: process.env.RECAPTCHA_V3_SECRET_KEY,
          response: recaptchaToken,
        },
      })
      return { successful: true, message: response.data.score }
    } catch (error) {
      let message
      if (error.response) {
        message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`
      } else if (error.request) {
        message = `No reCAPTCHA response received: ${error.request}`
      } else {
        message = `Error setting up reCAPTCHA response: ${error.message}`
      }
      return { successful: false, message }
    }
  })()
  return result
}

const sendEmail = async ({
  email,
  googleCaptchaScore,
  markedSpam,
  message,
  name,
  subject,
}) => {
  const result = await (async () => {
    try {
      const text =
        'Name: ' +
        name +
        '\n' +
        'Email: ' +
        email +
        '\n' +
        'Subject: ' +
        subject +
        '\n' +
        'Message: ' +
        message +
        '\n\n' +
        '(Recaptcha score: ' +
        googleCaptchaScore +
        ', marked spam: ' +
        markedSpam +
        ')\n'

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_SECRET,
        },
      })

      // uncomment for additional help debugging
      // await transporter.verify();

      let info

      if (markedSpam || recaptchaValidation <= 0) {
        info = await transporter.sendMail({
          from: process.env.SMTP_SENDER,
          to: process.env.SPAM_EMAIL,
          subject: 'robinet.co.uk Contact Form Message (SPAM?) from ' + name,
          text,
        })
      } else {
        info = await transporter.sendMail({
          from: process.env.SMTP_SENDER,
          to: process.env.CONTACT_EMAIL,
          subject: 'robinet.co.uk Contact Form Message from ' + name,
          text,
        })
      }

      return { successful: true, message: info.messageId }
    } catch (error) {
      return { successful: false, message: JSON.stringify(error, null, 2) }
    }
  })()

  return result
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
  } else {
    const { botField, email, message, name, recaptchaToken, subject } = req.body
    const markedSpam = botField != null && botField.length > 0

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken,
    })

    if (!recaptchaValidationResult.successful) {
      res.status(400).send(recaptchaValidationResult.message)
    } else {
      const googleCaptchaScore = recaptchaValidationResult.message

      const sendEmailResult = await sendEmail({
        email,
        googleCaptchaScore,
        markedSpam,
        message,
        name,
        subject,
      })
      if (!sendEmailResult.successful) {
        res.status(400).send(sendEmailResult.message)
      } else {
        res.status(200).send('All good!')
      }
    }
  }
}
