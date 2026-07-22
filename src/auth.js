const jwt = require('jsonwebtoken');
const secret = 'super-secret-key-CHANGE-ME';

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = { authenticate };
