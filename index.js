const exec = require('child_process').execSync;

const username = process.env.USERNAME;

console.log(`${username} say: hello world`)