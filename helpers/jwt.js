let { expressjwt: expressJwt } = require("express-jwt");

function authJwt(){
    const secret = process.env.SECRET;
    const api = process.env.API_URL;

    return expressJwt({
        secret,
        algorithms: ['HS256']
    }).unless({
        path: [
            `/users`,
            `/users/login`,
        ]
    });
}

module.exports = authJwt;
