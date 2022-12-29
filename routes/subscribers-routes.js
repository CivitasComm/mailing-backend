const subcriberRouter = require("express").Router();


const subscriberController = require("../controllers/subscriber-controller");

subcriberRouter.post("/register", subscriberController.register);

module.exports = subcriberRouter;
