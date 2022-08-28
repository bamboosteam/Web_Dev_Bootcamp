const fs = require('fs');
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true}, (err) =>{
//     if (err) throw err;
// });
const folderName = process.argv[2] || 'Project'
console.log(folderName);
console.log(`${folderName}/index.html`);
let data = 'test';
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, data);
    fs.writeFileSync(`${folderName}/styles.css`, data);
    fs.writeFileSync(`${folderName}/app.js`, data);
} catch (e) {
    console.log(e);
}
