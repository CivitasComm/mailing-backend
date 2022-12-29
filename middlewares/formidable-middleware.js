// Description: This middleware is used to parse the form data and files from the request. It uses the formidable package to do this.
// What is formidable? https://www.npmjs.com/package/formidable
// What is the formidable.parse() method's callback function? https://www.npmjs.com/package/formidable#formidableformidableparseform-callback
// what is multipart/form-data https://www.geeksforgeeks.org/define-multipart-form-data/

const formidable = require('formidable');
const path = require('path');

options = {
    uploadDir:path.join(__dirname, '../uploads'),
    keepExtensions: true,
    multiples: true
} // we can implement this middleware in a way where these are the default options, but we can also pass in options as a parameter to the middleware function
// so that we can override the default options



const formidableMiddleware = (req, res, next) => {
    const form = formidable(options);
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err)
            next(err);
            return;
        }
        req.body = fields;
        req.files = files;
        next();   
    });
}

module.exports = formidableMiddleware;