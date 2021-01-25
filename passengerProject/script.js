"use strict";

let searchBy = 0;
//If searchBy = 0 then you are searching by NAME if it = 1 then you are searching by ID
// 0=NAME
// 1=ID

let numberID = 1;
//Starting by 1 then every new passenger is added on

let passengerNames = [];
//List of all passengers, have to refer by elements of the element

class Passenger{
    constructor(first, last, birthday, startingCity, departure, endingCity, returnDate, meal, extras, baggageN){
        this.firstName = first;
        this.lastName = last;
        this.birthday = birthday;
        this.startingCity = startingCity;
        this.departure = departure;
        this.endingCity = endingCity;
        this.returnDate = returnDate;
        this.id = numberID;
        this.meal = meal;
        this.extras = extras;
        this.baggageN = baggageN
    }
}

function addPassenger(){
    let FN = document.getElementById("firstName").value;
    if(FN == ""){
        alert(`Enter First Name`);
        return;
    }//Making first name and checking that there is a first name 

    let LN = document.getElementById("lastName").value;
    if(LN == ""){
        alert(`Enter Last Name`);
        return;
    }//Making last name and checking that there is a last name

    let BD = document.getElementById("birthday").value;
    if(document.getElementById(`birthday`).value < )
    
    let SC = document.getElementById("startingCity").value;
    if(SC == ""){
        alert(`Enter Starting Destination`);
        return;
    }//Making starting city and checking that it is in the right format

    let DD = document.getElementById(`startingDate`).value;

    let EC = document.getElementById("endingCity").value;
    if(EC == ""){
        alert(`Enter Final Desitination`);
        return;
    }

    let RD = document.getElementById(`returningDate`).value;

    let M = 0; //Stands for Meals
        for(let i = 1; i<=4; i++){
            if (document.getElementById(`meal${i}`).checked){
                console.log(`Meal ${i} is checked`)
                M = i;
                break;
            }
        }
        if(M == 0){
            alert("Enter Meal Selectin")
        }
    //This loop finds which meal is selected

    let E = []; //FInds which extra(s) where selected
        for(let i = 1; i<=5; i++){
            if(document.getElementById(`extra${i}`).checked){
                E.push(i);
                console.log(`Extra ${i} is selected`)
            }
        }
        //This loop finds which Extra(s) are selected

    let B = document.getElementById("baggage").value;
    

    var newPassenger = new Passenger(FN, LN, BD, SC, DD, EC, RD, M, E, B);

    passengerNames.push(newPassenger);
    numberID++;
    console.log(passengerNames);
}


function searchByNameButton(){
    searchBy = 0;
}

function searchByIdButton(){
    searchBy = 1;
}