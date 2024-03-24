const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
// console.log('JWT_SECRET:', secret);
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
            const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, userName, email, password, _id }) {
        const payload = { firstName, userName, email, password, _id };

        // console.log(process.env.JWT_SECRET);
        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: expiration });
    },
};