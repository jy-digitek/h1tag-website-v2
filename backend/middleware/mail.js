var nodemailer = require("nodemailer");

module.exports = {
  sendEmail: (req, res) => {
    try {
      var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1a2b3c4d5e6f7g",
          pass: "1a2b3c4d5e6f7g",
        },
      });

      var mailOptions = {
        from: '"Example Team" <from@example.com>',
        to: "user1@example.com, user2@example.com",
        subject: "Nice Nodemailer test",
        text: "Hey there, it’s our first message sent with Nodemailer ",
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
        attachments: [
          {
            filename: "mailtrap.png",
            path: __dirname + "/mailtrap.png",
            cid: "uniq-mailtrap.png",
          },
        ],
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
      });
    } catch (error) {}
  },
};
