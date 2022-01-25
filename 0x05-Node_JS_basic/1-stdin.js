const firstLine = 'Welcome to Holberton School, what is your name?\n';
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question(`${firstLine}`, (name) => {
  console.log(`Your name is: ${name}`);
  readLine.close();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
