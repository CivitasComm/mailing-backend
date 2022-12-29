const jwt = require('jsonwebtoken');

jwtUtils =  {
  generateTokens: (payload)=> {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1y' });
    return {token}
  },

   verifyToken:  (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  },

}

module.exports = new JwtUtils();