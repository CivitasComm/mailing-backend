//controller for subscriber

const subscriberController = {
    register: (req, res) => {
        console.log(req);
        res.send("OK");
    }
};

module.exports = subscriberController;