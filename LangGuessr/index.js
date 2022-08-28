import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';
// const colors = require('colors');
// let franc = require('franc');
const str = process.argv[2];
const langCode = franc(str);
if (langCode === 'und' || !langs.where('3', langCode)){
    console.log('ERROR, TRY WITH MORE WORDS!'.red);
}else{
    const language = langs.where('3', langCode).name;
    console.log(language)
}
// console.log(langs.where("3", "eng")['name']);
// console.log(langs.has("3","sco"));
// console.log(str);
// console.log(franc(str));