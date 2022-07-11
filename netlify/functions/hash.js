require('dotenv').config();
const crypto = require('crypto');

exports.handler = function(event, context, callback) {
    let identifier = event.queryStringParameters.identifier;
    let output;
    if (identifier) {
        output = getJsonOutput('200', 'OK', hash(identifier));
    } else {
        output = getJsonOutput('400', 'Required querystring property is missing.', '');
    }

    callback(null, { statusCode: Number(output.status), body: JSON.stringify(output) });
}

function hash(identifier) {
    return crypto.createHmac('SHA256', process.env.SHARED_SECRET).update(identifier).digest('base64');
}

function getJsonOutput(status, message, hash) {
    return { status, message, hash };
}
