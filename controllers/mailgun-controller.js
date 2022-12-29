//controller for mailgun

const mailgunController = {
    incommingMail: (req, res) => {
        console.log(req);
        res.send("OK");
    }
};

module.exports = mailgunController;