import fs from 'fs';
const files = await fs.promises.readdir('../public/books');
console.log(files);    