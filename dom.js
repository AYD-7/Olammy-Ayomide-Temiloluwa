/*
    DOM Manipulation
        1. Accessing elements
            a. getElementById()
            b. getElementsByClassName()
            c. getElementsByTagName()
            d. querySelector()
            e. querySelectorAll()

        2. Manipulating content
            a. innerHTML 
            b. innerText
            c. textContent
*/ 

const heading = document.getElementById("heading");
console.log(heading);
const contents = document.getElementsByClassName("content");
console.log(contents);
const btns = document.getElementsByTagName("button");
console.log(btns);

const tagline = document.querySelector("#tagline");
console.log(tagline);
const outsideParagraph = document.querySelector("body > p")
console.log(outsideParagraph);
const insideParagraphs = document.querySelectorAll("div.wrapper > p")
console.log(insideParagraphs);

console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

function randomColorChanger () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    heading.innerHTML = `<span style="color: rgb(${r}, ${g}, ${b})">DOM and DOM Manipulation</span>`
    
}

setInterval(randomColorChanger, 5000);

