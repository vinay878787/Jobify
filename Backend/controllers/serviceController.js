const Service = require("../models/serviceModel");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({message:"error fetching the service data"});
      return;
    }
    res.status(200).json({message:response});
  } catch (error) {
    console.log("error finding service page: ", error);
  }
};
module.exports = services;
