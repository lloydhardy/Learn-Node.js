console.log('Starting app.js');
const fs = require('fs');
fs.appendFile('helloWorld.txt', `Hello World!`);

/* Writes to the file helloWorld.txt in the same directory (creating it if it doesn't exist) */
