"use strict";

let searchBy = 0;
//If searchBy = 0 then you are searching by NAME if it = 1 then you are searching by ID
// 0=NAME
// 1=ID

function searchByNameButton(){
    searchBy = 0;
}

function searchByIdButton(){
    searchBy = 1;
}

class Passenger{
    constructor(first, last, startingCity, endingCity, id){
        this.firstName = first;
        this.lastName = last;
        this.startingCity = startingCity;
        this.endingCity = endingCity;
    }
}

function addPassenger(){
    let FN = document.getElementById("firstName").value;
    let LN = document.getElementById("lastName").value;
    var newPassenger = new Passenger(FN)
}
