// // for(let i = 0; i < 10; i++){
// //     console.log("hello from first script");
// // }

// const cats = require('./shelter');
// console.log(cats);
// // const math = require('./math');
// // console.log(math.add(1,2));
// // console.log(cats);

var giveMeAJoke = require('give-me-a-joke');
const colors = require('colors');
// const cowsay = require('cowsay');
giveMeAJoke.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
});