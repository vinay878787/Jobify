const Contact = require("../models/contactModel");

const contactForm = async (req, res, next) => {
  try {
    console.log(req.body);
    await Contact.create(req.body);

    res.status(200).json({ message:"message sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "message not sent ..." });
  }
};

module.exports = contactForm;