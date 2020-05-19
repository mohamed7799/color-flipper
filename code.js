"use strict"
//variables

let simple = document.getElementById("simple-js");
let hex = document.getElementById("hex-js");
let color_btn = document.getElementById("color-block__btn");
let color = document.getElementById("color");
let color_block = document.getElementById('color-block');

let simple_colors = [
    '#88d1d3',
    '#cd3407',
    '#6365a4',
    '#2579f3',
    '#1710d5',
    '#05f887',
]

//functions

function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
}

let get_random = function (arr) {
    let index = getRandomArbitrary(arr.length - 1);
    return arr[index];
}


//event listeners

color_btn.addEventListener('click', () => {
    let new_color = get_random(simple_colors)
    color.textContent = new_color;
    color_block.style.backgroundColor = new_color;
})
