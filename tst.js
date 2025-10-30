require('dotenv').config();
const fs = require('fs');
console.log('PWD:', process.cwd());
console.log('__dirname:', __dirname);
console.log('.env exists:', fs.existsSync('.env'));
console.log('raw .env (first 5 lines):');
if (fs.existsSync('.env')) {
  console.log(fs.readFileSync('.env','utf8').split(/\r?\n/).slice(0,5).join('\n'));
}
console.log('DATABASE_URL env var:', process.env.DATABASE_URL || '<VAZIO>');
