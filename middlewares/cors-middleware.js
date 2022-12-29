//what is cors? https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
//what is cors middleware? https://www.npmjs.com/package/cors
//what is cors middleware for? https://www.npmjs.com/package/cors#enabling-cors-pre-flight
//Handling dynamic origin in cors? https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin

const cors = require("cors");
const allowedOrigins = ["http://localhost:3000", "http://yourapp.com"];// implement splitting from env variable or export a function to update this array dynamically

const corsMiddleware = cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);// if no origin, then it is a local request
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = "The CORS policy for this site does not allow access from the specified Origin.";
        console.log(origin, "is not allowed by CORS")
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })

module.exports = corsMiddleware;