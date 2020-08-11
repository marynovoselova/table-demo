const allowedOrigins = process.env.ALLOWED_ORIGINS.split(' ');

function checkCors(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true)
    }
    return callback(new Error("This origin is not allowed"), {origin: false});
}

module.exports = checkCors;
