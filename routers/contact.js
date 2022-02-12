const contactRouter = require('express').Router();
const mailer = require('../utils/mailer');

require('dotenv').config();

// first simple test
// contactRouter.post('/', async (req, res) => {
//   mailer.sendMail({
//     from: 'jean@nemar.com',
//     to: 'lolo@lapin.com',
//     subject: 'hello les amis',
//     text: 'Contact message pour ecrire test',
//   });
//   res.json(req.body);
// });

contactRouter.post('/', async (req, res) => {
  // when request from body => automatic mailer send back email
  const { email, name, content } = req.body;

  // get the message from user back
  mailer.sendMail({
    from: process.env.MAILER_SENDER,
    to: process.env.MAILER_SENDER,
    subject: `${name} vous a contacté`,
    text: content,
  });

  // mailer.sendMail({
  //   from: process.env.MAILER_SENDER,
  //   to: process.env.MAILER_SENDER,
  //   subject: `${name} vous a contacté`,
  //   text: content,
  // });
  mailer.sendMail({
    from: process.env.MAILER_SENDER,
    to: email,
    subject: `Hello ${name} from Bulles`,
    text: 'merci de nous avoir contacté',
    html: { path: 'templates/contact.html' },
    attachments: [
      {
        filename: 'welcomefile.pdf',
        path: 'attachments/welcome.pdf',
      },
    ],
  });
  res.json({
    message: `Bonjour ${name} votre message a bien été pris en compte`,
  });
});

module.exports = contactRouter;
