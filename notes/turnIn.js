
let names = `Khaleesi Duncan
Ariana Craft
Poppy Mckeown
Johanna Hampton
Justine Glover
Forrest Reeves
Emmie Morrow
Lea Russell
Safia Turner
Louis Sharp
Carys Howarth
Martha Johnston
Dougie Wickens
Roksana Mohammed
Nicole Francis
Ella Vaughan
Matas Rollins
Elis Grimes
Raj Macgregor
Alec Guzman
Asha Zimmerman
Agata Seymour
Myra Mccallum
Hendrix Conner
Carrie Peterson
Aditya Proctor
Aneesha Currie
Radhika Murillo
Lily-Rose Johns
Glenn Anthony
Josh Alvarez
Cai Sanchez
Ewen Mayo
Eshaan Long
Halima Burgess
Laiba Holmes
Jonty Escobar
Pawel Reynolds
Elisa Kearney
Elsa Duarte
Talia Raymond
Connagh Young
Ava O'Connor
Kaleem Cabrera
Arabella Gregory
Rudi Huerta
Enrico Barton
Oisin Khan
Alena Robinson
Kacey Hobbs
Barney Bush
Kaiya Odling
Matt Yates
Brittney Mccullough
Maddie Paterson
Marwa Stephenson
Anees Hensley
Sanya John
Xena Cervantes
Leticia Goddard
Griffin Sims
Elis Sandoval
Jamie-Leigh Redfern
Lucie Bright
Kamran Galindo
William Estes
Luka Haynes
Naseem Archer
Irene Busby
Kaja Mcconnell
Clementine Hail
Ceara Watkins
Cheyenne Bain
Amman Fleming
Korban Spears
Ines Spence
Thiago Magana
Rayhan Whittle
Yousif Roman
Chanelle Holcomb
Shanna Jacobson
Menachem Wilson
Romy Bruce
Lochlan Pennington
Kayson Montoya
Xanthe Hendricks
Marta Franks
Annalise Deacon
Shahzaib Wilde
Paige Dejesus
Reegan Broughton
Maxim Anthony
Clarke Haas
Amna Krueger
Star Fulton
Alejandro Reilly
Aisling Solis
Alfie-Jay Werner
Zhane Mccabe
Matteo Melton`;
let namesArray = names.split("\n");



let salaries = {};

function createSalary(arrayObject){
    for(let i = 0; i<arrayObject.length; i++){
        let key = arrayObject[i];
        let randy = Math.ceil(Math.random()*10);
        let value = "";
        if(randy == 1){
            value = "intern";
        }else if(randy == 2 || randy == 3 || randy == 4){
            value = Math.ceil(Math.random()*10000+10000);
        }else if(randy > 4 && randy <=9){
            value = Math.ceil(Math.random()*20000+30000);
        }else{
            value = Math.ceil(Math.random()*40000+80000);
        }

        salaries[key] = value; 
    }
    let CEO = arrayObject[Math.ceil(Math.random()*(arrayObject.length-1))];
    let CEOSalary = 250000;
    salaries[CEO] = CEOSalary; 
}

createSalary(namesArray);

console.log(salaries);

let intern = 99;
let totalPerIntern = 0;
console.log(salaries);
for(keys in salaries){
    if(salaries[keys] != "intern" && salaries[keys] != 250000){
        totalPerIntern += (salaries[keys]/2);
        salaries[keys] = Math.floor((salaries[keys]/2));
        intern--;
    }
}
totalPerIntern = Math.floor(totalPerIntern/intern);
for(keys in salaries){
    if(salaries[keys] == "intern"){
        salaries[keys] = totalPerIntern;
    }
}

console.log(salaries);
console.log(`There are ${intern} interns`);
console.log(`The interns make ${totalPerIntern}`);

let first = {cash: 20};
let second = first;

first.cash = 10;

console.log(first.cash); // 10
console.log(second.cash); // 10

Object.assign(destinaiton, sorce1, source2, moreSources);

let users = {
    name: "jessie",
    sayhi = function(){
        console.log(`hello ${this.name}`);
    }
}

users.sayhi(); // "hi jessie"

let newUser = {}
Object.assign(newUser, user);

newUser.name = "jimmy";

newUser.sayhi(); // "hi jimmy"