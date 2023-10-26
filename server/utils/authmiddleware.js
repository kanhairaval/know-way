const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token;

        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ').pop().trim();
        }

        if (req.body.token) {
            token = req.body.token;
        }

        if (req.query.token) {
            token = req.query.token;
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, userName, email, password, _id }) {
        const payload = { firstName, userName, email, password, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};