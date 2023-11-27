// jwt-util.js
const jwt = require('jsonwebtoken');
const secret = "test"
const db = require("./database");


module.exports = {
  sign: (user) => { // access token 발급
    const payload = { // access token에 들어갈 payload
      id: user.id,
      email: user.email,
    };

    return jwt.sign(payload, secret, { // secret으로 sign하여 발급하고 return
      algorithm: 'HS256', // 암호화 알고리즘
      expiresIn: '1h', 	  // 유효기간
    });
  },
  verify: (token) => { // access token 검증
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        ok: true,
        id: decoded.id,
        email: decoded.email,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
  refresh: () => { // refresh token 발급
    return jwt.sign({}, secret, { // refresh token은 payload 없이 발급
      algorithm: 'HS256',
      expiresIn: '14d',
    });
  },
  refreshVerify: async (token, userId) => { // refresh token 검증
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해줍니다.*/
    
    try {
	  const data = await db.execute("SELECT * FROM USER WHERE id = ?;", [userId]);	
	  const refreshToken = data._results[0].refreshToken;
      if (token === data) {
        try {
          jwt.verify(token, secret);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};