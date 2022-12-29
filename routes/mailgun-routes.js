const mailgunRouter = require("express").Router();
const formidableMiddleware = require("../middlewares/formidable-middleware");
mailgunRouter.use(formidableMiddleware);

const mailgunController = require("../controllers/mailgun-controller");

mailgunRouter.post("/", mailgunController.incommingMail);

module.exports = mailgunRouter;
