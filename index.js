const fs = require('fs');
let buffer = new Buffer.from('', 'utf-8');
const readStream = fs.createReadStream('1.txt', { highWaterMark: 1 });
readStream
  .on('data', (chunk) => {
    buffer += Number(chunk) + 1;
  })
  .on('end', () => fs.createWriteStream('1.txt').write(buffer));
