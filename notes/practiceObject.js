
// let wallet = new Object();

// let student = {
//     name: "Estrella Angel",
//     ID: 19,
//     hairColor: "brown",
//     westmecClass: "coding",
//     sessionTime: 1,
//     cash: 25
// };

// console.log(wallet.card);
// //credit

// console.log(wallet.cash);
// //43

// wallet["is poor"] = true;
// console.log(wallet["is poor"]);



// let money = prompt("how much do you want to take out", "20");
// wallet["cash"] = money;

// let persInfo = {};

// let name = prompt("What is your first name?", "last, first");
// persInfo["name"] = name;

// let favColor = prompt("What is your favorite color?", "color");
// persInfo["favColor"] = favColor;

// let randNum = prompt("What random number are you thinking of?", "#");
// persInfo["randNum"] = randNum;

// console.log(persInfo);

// function createStudent (name, id){
//     return{
//         name: name,
//         id: id
//     };
// }
// let jimmy = createStudent("Jimmy W.", 12345);

// console.log(jimmy[name]);
// //Jimmy W.

function createPerson(name, color, number){
    return{
        name,
        color,
        number
    }
};

let test = createPerson("Test Name", "Test Color", 1);
console.log(test);

"key" in object;
//true or false

"cash" in wallet;
//false if there is no cash in the wallet

for(let key in wallet){
    console.log(key); 
    //card, cash
    console.log(wallet[key]);
    //"debit", 42
}

let list = {
    5: 4,
    10: 3,
    2: 8,
    1: 1
}

console.log(list);
// `1`: 1,
// `2`: 8,
// `5`: 4,
// `10`: 3

