const fs = require('fs');

const imgReadBuffer = fs.readFileSync('test-pattern.jpg');

const imgHexEncode = new Buffer.from(imgReadBuffer).toString('hex');

const imgHexDecode = new Buffer.from(imgHexEncode, 'hex');

fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
