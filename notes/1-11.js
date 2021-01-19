// //creating an array
// let myself = ["estrella", 17, "brown", "goodyear", "hanging out with friends"];

// //home city
// console.log(myself[3]);

// //age
// console.log(myself[1])

// let newSelf = {
//     name: "Estrella",
//     age: 17,
//     homeTown: "goodyear",
//     hobby: "hanging out with friends"
// };

// console.log(newSelf["homeTown"]);

// //collection of information with very specific keys, helps us organize and find things easier

// //sloth bear

// let slothBear = {
//     furColor: "black",
//     avgWeight: 250,
//     country: "India, Sri Lanka, Nepal",
//     lifeSpan: 40,
//     population: 8500,
//     diet: "leaves, honey, flowers and fruits"
// }

// ////////////////////////////////////////////////////////////////////////////

// let names = `Khaleesi Duncan
// Ariana Craft
// Poppy Mckeown
// Johanna Hampton
// Justine Glover
// Forrest Reeves
// Emmie Morrow
// Lea Russell
// Safia Turner
// Louis Sharp
// Carys Howarth
// Martha Johnston
// Dougie Wickens
// Roksana Mohammed
// Nicole Francis
// Ella Vaughan
// Matas Rollins
// Elis Grimes
// Raj Macgregor
// Alec Guzman
// Asha Zimmerman
// Agata Seymour
// Myra Mccallum
// Hendrix Conner
// Carrie Peterson
// Aditya Proctor
// Aneesha Currie
// Radhika Murillo
// Lily-Rose Johns
// Glenn Anthony
// Josh Alvarez
// Cai Sanchez
// Ewen Mayo
// Eshaan Long
// Halima Burgess
// Laiba Holmes
// Jonty Escobar
// Pawel Reynolds
// Elisa Kearney
// Elsa Duarte
// Talia Raymond
// Connagh Young
// Ava O'Connor
// Kaleem Cabrera
// Arabella Gregory
// Rudi Huerta
// Enrico Barton
// Oisin Khan
// Alena Robinson
// Kacey Hobbs
// Barney Bush
// Kaiya Odling
// Matt Yates
// Brittney Mccullough
// Maddie Paterson
// Marwa Stephenson
// Anees Hensley
// Sanya John
// Xena Cervantes
// Leticia Goddard
// Griffin Sims
// Elis Sandoval
// Jamie-Leigh Redfern
// Lucie Bright
// Kamran Galindo
// William Estes
// Luka Haynes
// Naseem Archer
// Irene Busby
// Kaja Mcconnell
// Clementine Hail
// Ceara Watkins
// Cheyenne Bain
// Amman Fleming
// Korban Spears
// Ines Spence
// Thiago Magana
// Rayhan Whittle
// Yousif Roman
// Chanelle Holcomb
// Shanna Jacobson
// Menachem Wilson
// Romy Bruce
// Lochlan Pennington
// Kayson Montoya
// Xanthe Hendricks
// Marta Franks
// Annalise Deacon
// Shahzaib Wilde
// Paige Dejesus
// Reegan Broughton
// Maxim Anthony
// Clarke Haas
// Amna Krueger
// Star Fulton
// Alejandro Reilly
// Aisling Solis
// Alfie-Jay Werner
// Zhane Mccabe
// Matteo Melton`;
// let namesArray = names.split("\n");
// let typingSpeed = {};


// function createList(array){
//     for(let i = 0; i < array.length; i++){
//         let name = array[i];
//         let speed = Math.floor(Math.random()*20+80)
        
//         typingSpeed[name] = speed;
//         console.log(typingSpeed[name]);
//     }
// }

// createList(namesArray);
// console.log(typingSpeed);

// // if you want to be hired you need a LinkedIn
// // python - data basing, AI -- jetbrain
// // web development - php

// let tvStatus = {};

// function createTVObject(arrayObject){
//     for(let i = 0; i < arrayObject.length; i++){
//         let key = arrayObject[i];
//         let randy = Math.ceil(Math.random()*3);
//         let value = "";
//         if(randy == 1){
//             value = "off";
//         }else{
//             value = Math.ceil(Math.random()*99);
//         }

//         tvStatus[key] = value;
//     }
// }

// createTVObject(namesArray);

// console.log(tvStatus);

// //create obj that will say the income of people you employ
// //use same name array
// //obj is gonna be a value
// //50 names
// //:intern 10% chance
// //:low level 10000 - 20000 30%
// //:mid level 30000 - 50000 50%
// //:high level 80000 - 120000 10%
// //: 1 person CEO: 250000 

// let salaries = {};

// function createSalary(arrayObject){
//     for(let i = 0; i<arrayObject.length; i++){
//         let key = arrayObject[i];
//         let randy = Math.ceil(Math.random()*10);
//         let value = "";
//         if(randy == 1){
//             value = "intern";
//         }else if(randy == 2 || randy == 3 || randy == 4){
//             value = Math.ceil(Math.random()*10000+10000);
//         }else if(randy > 4 && randy <=9){
//             value = Math.ceil(Math.random()*20000+30000);
//         }else{
//             value = Math.ceil(Math.random()*40000+80000);
//         }

//         salaries[key] = value; 
//     }
//     let CEO = arrayObject[Math.ceil(Math.random()*(arrayObject.length-1))];
//     let CEOSalary = 250000;
//     salaries[CEO] = CEOSalary; 
// }

// createSalary(namesArray);

// console.log(salaries);

// ////////////////////////////////////////////////////////////

// //Best way to right random number
// //       Math.floor(Math.random()Max - Min +1) + min;

// // let employees = 0;
// // let CEO = "";

// // for(let key in salaries){
// //     if(salaries[key] != `intern` && salaries[key] != 250000){
// //         salaries[key] = salaries[key] - 5000;
// //         employees++;
// //     }
// //     if(salaries[key] == 250000){
// //         CEO = key;
// //     }
// // }

// // salaries[CEO] += 5000 * employees;

// // console.log(salaries);

// // console.log(`${CEO} makes ${salaries[CEO]}`);

// // TAKE HALF OF EMPLOYEES MONEY
// // GIVE IT EQUALLY TO ALL THE INTERNS

// let intern = 99;
// let totalPerIntern = 0;
// console.log(salaries);
// for(keys in salaries){
//     if(salaries[keys] != "intern" && salaries[keys] != 250000){
//         totalPerIntern += (salaries[keys]/2);
//         salaries[keys] = Math.floor((salaries[keys]/2));
//         intern--;
//     }
// }
// totalPerIntern = Math.floor(totalPerIntern/intern);
// for(keys in salaries){
//     if(salaries[keys] == "intern"){
//         salaries[keys] = totalPerIntern;
//     }
// }

// console.log(salaries);
// console.log(`There are ${intern} interns`);
// console.log(`The interns make ${totalPerIntern}`);

///////////////////////////////////////////////////////////

// let calculator = {
//     //a: ##
//     read(){
//         this.a = Number(prompt(`What is the first number`, 0));
//         this.b = Number(prompt(`What is the second number?`, 0));
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


// let ladder = {
//     step: 0,
//     up(){
//         if(this.max == undefined || this.step <= this.max){
//             this.step++;
//             return this;
//         }else{
//             return this;
//         }
//     },
//     down(){
//         if(this.step > 0){
//             this.step--;
//             return this;
//         }else{
//             return this;
//         }
//     },
//     showStep(){
//         console.log(`Your on step ${this.step}`)
//     },
//     height(max){
//         this.max = max;
//         return this;
//     }
// }

// ladder.height(10).down().up().up().up().down().showStep();

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.admin = false;
// }

// let tommy = new User("Tom", 12345);

// console.log(tommy.name); //'Tom'
// console.log(tommy.id); //12345
// console.log(admin); //false

//Constructor Function
//it needs to be a function declaration
//the parameters are the values we define when we call the constructor and it creates a new object pointing to the variable name that it is inside of
//we use new constructor name and give it the values we to have

// function Student(name, id, gradeLevel, currentGrade){
//     this.name = name;
//     this.id = id;
//     this.gradeLevel = gradeLevel;
//     this.currentGrade = currentGrade;
//     this.permissions = "student";

//     this.graduate = function(){
//         this.gradeLevel++;
//     }

//     this.whiteList = function(){
//         this.permissions = "admin";
//     }

//     this.setGrade = function(grade){
//         this.currentGrade = `${grade}`;
//     }
// }

// let tommy = new Student("tommy", 19, 11, "A");

// tommy.graduate();
// console.log(tommy);

// class MyClass {
//     constructor(){
//         //default values
//     }
//     method1()
//     method2()
//     method3()
// }

// class Student {
//     constructor(name, id, gradeLevel){
//         this.name = name;
//         this.id = id;
//         this.gradeLevel = gradeLevel;
//         this.permissions = "Student";
//     }
//     graduate(){
//         this.gradeLevel++;
//     }
//     whiteList(){
//         this.permissions = "Admin";
//     }
//     select(grade){
//         this.currentGrade = grade;
//     }

// }

// let jimbo = new Student("Jimbo", 13, 6);

// jimbo.select("B");
// console.log(jimbo);

// class User{
//     constructor(){
//         this.firstName = "Jimmy";
//         this.lastName = "Smitty";
//     }

//     get fullName(){
//         return  `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(value){
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// }

// let user = new User()

// user.fullName = "Arron Collis"
// console.log(user.fullName);

//class user
//set userNam -> 4 letters
//set password -> 5 letters and 1 num
//Login(username, password) if correct log (`Welcome in (username)`)

// class User{
//     constructor(){
//         this.userName = "";
//         this.password = "";
//     }

//     set checkUserName(name){
//         if(name.length >= 4){
//             let string = name.split("");
//             for(let i = 0; i<string.length; i++){
//             if(string[i] != "1" && string[i] != "2" && string[i] != "3" && string[i] != "4" && string[i] != "5" && string[i] != "6" && string[i] != "7"&& string[i] != "8" && string[i] != "9"){
//                 this.userName = name;
//             }}
//         }
//     }

//     set checkPassword(pass){
//         let string = pass.split("");
//         let num = 0;
//         for(let i = 0; i<string.length; i++){
//             if(string[i] == "1" || string[i] == "2" || string[i] == "3" || string[i] == "4" || string[i] == "5"|| string[i] == "6" || string[i] == "7"|| string[i] == "8" || string[i] == "9"){
//                 num++;
//             }
//         }
//         if((string.length - num) > 4){
//             this.password = pass;
//         }
//     }
// }

// let user = new User();

// user.checkUserName = "eeea"
// user.checkPassword = "3lklkl"

// console.log(user);

class User{
    constructor(){
        this.userName = "";
        this.password = "";
    }

    set checkUserName(name){
        if(name.length >= 4){
            this.userName = name;
            }}

    set checkPassword(pass){
        let string = pass.split("");
        let num = 0;
        for(let i = 0; i<string.length; i++){
            if(string[i] == "1" || string[i] == "2" || string[i] == "3" || string[i] == "4" || string[i] == "5"|| string[i] == "6" || string[i] == "7"|| string[i] == "8" || string[i] == "9"){
                num++;
        }}
        if(num > 0 && pass.length >= 5){
            this.password = pass;
        }}
    }


let user = new User();

user.checkUserName = "cool"
user.checkPassword = "real1"

console.log(user);

function login(obj, userN, pass){
    if(obj.userName == userN && obj.password == pass){
        console.log("login succesful");
    }
}

login(user, "cool", "eijoe");

//Extending a Class
//You can create "child classes" where they have all the same properties of the parent class adn then you can define more
//I.E. if you have an animal class you make a cat subclass
    //They will share many properties with other animals but you can add a few that only cats have like lives

