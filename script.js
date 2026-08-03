// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");


const loopContainer = document.getElementById("loop-container");

console.log(loopContainer);


// for loop
// for (let i = 0; i < 8; i++) {
//     loopContainer.innerHTML += `<p>Hello World ${i+1}</p>`;
//     console.log("Hello World!", i);     
// }

let firstName = "Ayomide";
let lastName = "Oluwafemi";
// let fullName = firstName + lastName;


// Template literal
let fullName = `${firstName} ${lastName}`

console.log(fullName);

// Finding the multiples of 7 from 1 - 1000
for (let i = 7; i <= 1000; i++) {
    if (i % 7 === 0) {
        loopContainer.innerHTML += `<p>${i} is a multiple of 7.</p>`;
    };
};
1 === "1"

const names = [
    {name: "Ayodeji Aronimo", profession: "Software Developer", gender: "male"},
    {name: "Olamide Obilana", profession: "Computer Engineer", gender: "female"},
    {name: "Ayomide Oluwafemi", profession: "3D Artist", gender: "male"},
];

// An array of animals
const animals = ["Antelope", "Bear", "Cattle", "Dog", "Elephant", "Falcon", "Giraffe", "Horse", "Iguana", "Jaguar", ];

console.log(animals);
console.log(animals.length);

// console.log(animals[3]);
for (let i = 0; i < animals.length; i++){
    // backtick `
    console.log(`${animals[i].charAt(0)} is for ${animals[i]}`);
    
}


const myArray = ["Olammy", "Isla", "Midexz", "A*Y*D",];

console.log(myArray[0]);

myArray[3] = "Ayodeji";

console.log(myArray);
console.log(typeof myArray);
let myString = myArray.join(", ");
console.log(myString);

console.log(myArray.slice(1, 3));

/*
    Object
        1. dot notation
        2. Object.keys()
        2. Object.values()
        2. Object.entries()

*/ 
// const myself = ["Ayodeji", false, "software developer"];

const myself = {
    firstName: "Ayodeji",
    lastName: "Aronimo",
    isMarried: false,
    profession: "Software Developer",
}

console.log(myself.firstName);

myself.gender = "Male";
console.log(myself);

console.log(Object.keys(myself)); // [firstName, lastName, isMarried, profession]
console.log(Object.values(myself)); 
console.log(Object.entries(myself));

// Array of objects
const laptops = [
    {brand: "HP", config: {gen: "7th", core: "i5", storage: "512SSD", RAM: "16 GB"}, color: "silver", price: 500000, quantity: 16, inStock: true,},
    {brand: "Dell", config: {gen: "5th", core: "i7", storage: "256SSD", RAM: "16 GB"}, color: "black", price: 450000, quantity: 40, inStock: true,},
    {brand: "Lenovo", config: {gen: "5th", core: "i7", storage: "256SSD", RAM: "8 GB"}, color: "purple", price: 300000, quantity: 0, inStock: false,},
];

// Extracting just the ram of the HP laptop from the laptops array
console.log(laptops[0].config.RAM);

// for...of
for (laptop of laptops) {
    console.log(`${laptop.brand}: \n color: ${laptop.color} \n price: ${laptop.price} \n available: ${laptop.quantity > 0 ? "Available" : "Not available"}`);
}
console.log(laptops[2].config.RAM);

/* 
    Functions
        1. Function Declaration
        2. Function Expression
        3. Arrow Function

*/ 

// let username = window.prompt("What is your name?");

console.log(greeting("Naomi!"));

// function declaration
function greeting (name) {
    return `Hi ${name}!`
}

// window.alert(greeting(username));


// function expression
const add = function (a, b){
    return a + b;
};

console.log(add(10, 21));
console.log(add(7, 8));


// arrow function
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));


// convention syntax 
const temperatureConverter = (temp, scale) => {
    let result = ""
    if (scale === "C" || scale === "c") {
        result = `The conversion of ${temp} from Celsius to Fahrenheit is ${((temp * (9 / 5)) + 32).toFixed(2)}`;
    } else {
        result = `The conversion of ${temp} from Fahrenheit to Celsius is ${((temp - 32) * 5 / 9).toFixed(2)}`;
    }

    return result

}

console.log(temperatureConverter(45, "C"));
console.log(temperatureConverter(45, "F"));
console.log(temperatureConverter(25, "C"));


/*
    A function is a reusable block of code
*/ 

function order () {
    console.log("Clean the table!");
    console.log("Clean the chair!");
    console.log("Plug your laptop!");
}

order()

order()

const socialMediaUsers = ["Olammy", "A*Y*D", "Midex", "Isla", "Dammytee"];

function searchUser (user){
    // storing found user in a variable
    const foundUser = socialMediaUsers.includes(user);

    // finding out if the user exists
    if (foundUser){
        return `${user} exists in the database`
    } else {
        return `${user} does not exist`
    }
}

console.log(searchUser("Olammy"));
console.log(searchUser("Dapo"));
console.log(searchUser("olammy"));


function searchLaptop (query, laptops) {
    // // checking the datatypes of the query and database
    if (typeof query !== "string" && typeof laptops !== "object") {
        return "Invalid request!"
    }


    const foundLaptops = laptops.filter(laptop => laptop.brand.toLowerCase() === query.toLowerCase())

    if (foundLaptops.length <= 0) {
        return `Cannot find ${query} `;
    } else {
        return foundLaptops;
    }

    return foundLaptops;
}


console.log(searchLaptop(23, "rat")
)

console.log(searchLaptop("hP", laptops));
console.log(searchLaptop("MacBook", laptops));





btn.addEventListener("click", function (){
    const text = document.getElementById("text");
    const textValue = text.value;
    const btn = document.getElementById("btn");
    console.log(textValue);
    
    alert(searchUser(textValue));
    text.value = ""
})

/*
    Asynchronous JS
        1. Callback
        2. Promise
        3. Async/await
*/ 

console.log(1);
// executes after 5 seconds
setTimeout(() => {
    console.log(2);
}, 5000)

// executes after 2 seconds
setTimeout(() => {
    console.log(3);
}, 2000)
console.log(4);
console.log(5);

// setTimeout(() => {
//     alert("It's 10 seconds")
// }, 10000);


let count = 0
// setTimeout(() => {
//     count++
//     console.log(`Count is at: ${count}`);

// }, 5000);

// setInterval(() => {
//     count++
//     console.log(`Count is at: ${count}`);
// }, 1000);


// Callback function

// Function that performs an action
const performAction = (action) => {
    console.log(`${action} was performed!`); 
};

// Function that executes another function
const actionActivator = (action, callback) => {
    setTimeout(performAction(action), 10000)
};

actionActivator("Bark like a dog", performAction);

const  fetchUsers = new Promise ((resolve, reject) => {
    const users = ["Olamitide", "Midexz"]
    setTimeout(() => {
        users.length <= 0 ? reject("404 Error. No user found") : resolve(`List of users: ${users.join(", ")}`)
    }, 2000)
});


fetchUsers.then((msg) => console.log(msg)).catch((err) => console.log(err)).finally(() => console.log("Finished fetching users!"));

const getComments = async () => {
    try {
        // Getting the response from the server
        const res = await fetch("https://jsonplaceholder.typicode.com/commens");

        if (!res.ok){
            throw new Error("Try again later");
            
        }

        // getting the actual data from the server
        const data = await res.json();

        console.log("res:",res);
        console.log("data:",data);
        
    } catch (error) {
        console.log("Get Comments", error);
        
    } finally {}

}

getComments();

