"use strict"
//variables

let simple = document.getElementById("simple-js");
let hex = document.getElementById("hex-js");
let color_btn = document.getElementById("color-block__btn");
let color = document.getElementById("color");
let color_block = document.getElementById('color-block');
let mode_status = { simple: 1, hex: 0 };
let dec = document.getElementById("color-bloack__dec");

let simple_colors = [
    '#88d1d3',
    '#cd3407',
    '#6365a4',
    '#2579f3',
    '#1710d5',
    '#05f887',
]

//functions

let get_random_int = (max) => { return Math.floor(Math.random() * max); }

let get_random_hex = () => { return '#' + (Math.random() * 0xFFFFFF << 0).toString(16); }

let get_random_color = (arr) => { return arr[get_random_int(arr.length - 1)]; }


//event listeners


simple.addEventListener('click', () => {
    mode_status.simple = 1;
    mode_status.hex = 0;
    simple.classList.add("active");
    hex.classList.remove("active");
    dec.textContent = "you can choose between 6 random colors";
})


hex.addEventListener('click', () => {
    mode_status.hex = 1;
    mode_status.simple = 0;
    hex.classList.add("active");
    simple.classList.remove("active");
    dec.textContent = "you can choose between infinte number of random colors";
})


color_btn.addEventListener('click', () => {
    if (mode_status.simple === 1) {
        let new_color = get_random_color(simple_colors)
        color.textContent = new_color;
        color_block.style.backgroundColor = new_color;
    }
    else {

        let new_color = get_random_hex(simple_colors)
        color.textContent = new_color;
        color_block.style.backgroundColor = new_color;
    }
})


