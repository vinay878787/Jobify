const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    console.log("parseBody:", parseBody);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(err);
    const status = 422;
    const message = "Please give proper input"
    const extraDetails = err.errors[0].message;
    const error = { status, message , extraDetails};
    // res.status(400).json({ message: message });
    next(error);
  }
};

module.exports = validate;
