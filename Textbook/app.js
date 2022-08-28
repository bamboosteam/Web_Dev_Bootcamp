// // const req = new XMLHttpRequest();

// // req.onload = function(){
// //     console.log("IT LOADED");
// //     const data = JSON.parse(this.responseText);
// //     console.log(data);
// // }

// // req.onerror = function (){
// //     console.log("ERROR");
// //     console.log(this);
// // }

// // req.open("GET", "https://swapi.dev/api/people/1")
// // req.send();

// // fetch("https://swapi.dev/api/people/1")
// // .then(res => {
// //     console.log("RESOLVED", res);
// //     res.json().then(data => console.log("JSON DONE", data))
// // })
// // .catch((e) => {
// //     console.log("ERROR". e);
// // });

// // axios.get("https://swapi.dev/api/people/1")
// // .then(res => {
// //     console.log(res);
// // });


// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }

// const getDadJoke = async () => {
//     const config = { headers:{Accept: 'application/json'}}
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     return res.data.joke;
// }

// button.addEventListener('click', addNewJoke);


class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0){
        return `rgb(${this.innerRGB()}, ${a})`;
    }
}

const red = new Color(255, 67, 89, 'toamto');
const white = new Color(255, 255, 255, 'white');