'use strict';

const crypto = require('crypto');

function generateToken(filename, secret) {
  return crypto.createHmac('sha256', secret).update(filename).digest('hex');
}

function verifyToken(filename, token, secret) {
  const expected = generateToken(filename, secret);
  try {
    return crypto.timingSafeEqual(
      Buffer.from(token, 'hex'),
      Buffer.from(expected, 'hex')
    );
  } catch {
    return false;
  }
}

module.exports = { generateToken, verifyToken };
