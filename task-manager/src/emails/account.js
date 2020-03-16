const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//   to: 'felix.au.liu@gmail.com',
//   from: 'liuzhengyangg@gmail.com',
//   subject: 'This is my first creation!',
//   text: 'I hope this one actually gets to you'
// })

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'felix.au.liu@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'felix.au.liu@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}. I hope to see you back sometimes soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}