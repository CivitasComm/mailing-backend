
module.exports = (app) => {
app.use("/mailgun", require("./mailgun-routes"));
app.use("/api", require("./subscribers-routes"));
}