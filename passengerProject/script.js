"use strict";

let searchBy = 0;
//If searchBy = 0 then you are searching by NAME if it = 1 then you are searching by ID
// 0=NAME
// 1=ID

let numberID = 5;
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

    document.getElementById(`firstName`).value = "";
    document.getElementById(`lastName`).value = "";
    document.getElementById(`birthday`).value = "";
    document.getElementById(`startingCity`).value = "";
    document.getElementById(`startingDate`).value = "";
    document.getElementById(`endingCity`).value = "";
    document.getElementById(`returningDate`).value = "";
    document.getElementById(`baggage`).value = "";
    document.getElementById(`meal${M}`).checked = false;
    for(let i = 0; i < E.length; i++){
        document.getElementById(`extra${E[i]}`).checked = false;
    };
    numberID++;
    console.log(passengerNames);
}

function searchByNameButton(){
    searchBy = 0;
}

function searchByIdButton(){
    searchBy = 1;
}

function showPasInfo(array, num){
    document.getElementById("specPasInfo").classList.add("specificPassengerSearch");
    document.getElementById("EditBtn").classList.remove("hide");
    document.getElementById("closeBtn").classList.remove("hide");
    document.getElementById(`pname`).innerHTML = `${array[num].firstName} ${array[num].lastName}`;
    document.getElementById('pbirthday').innerHTML = `Birthday: ${array[num].birthday}`;
    document.getElementById(`pID`).innerHTML = `ID: ${array[num].id}`;
    document.getElementById(`pstartingCity`).innerHTML = `Starting City: ${array[num].startingCity}`;
    document.getElementById(`pstartingDate`).innerHTML = `Leaving Date: ${array[num].departure}`;
    document.getElementById(`preturnDate`).innerHTML = `Returning Date: ${array[num].returnDate}`;
    document.getElementById(`pendingCity`).innerHTML = `Destination: ${array[num].endingCity}`;
    document.getElementById(`pbaggage`).innerHTML = `Baggage Count: ${array[num].baggageN}`;
}

function close(){
    document.getElementById("specPasInfo").classList.remove("specificPassengerSearch");
    document.getElementById("EditBtn").classList.add("hide");
    document.getElementById("closeBtn").classList.add("hide");

}

function searchList(){
    //SEARCHING BY NAME
        if(searchBy == 0){
            let name = document.getElementById(`searchbar`).value;
            let newArr = name.split(" ");
            console.log(newArr.length);
            if(newArr.length > 1){
                for(let i = 0; i<passengerNames.length; i++){
                    if(passengerNames[i].firstName == newArr[0] && passengerNames[i].lastName == newArr[1]){
                    showPasInfo(passengerNames, i);
                }}
            }else{
                alert(`Incorrect First or Last Name`);
                return;
            }
        }
    //SEARCHING BY ID
        else{
            let id = document.getElementById(`searchbar`).value;
            for(let i=0; i<passengerNames.length; i++){
                if(passengerNames[i].id == id){
                    showPasInfo(passengerName, i);
                }
                else{
                    alert(`Incorrect ID`);
                    return;
                }
            };
        }
        document.getElementById(`searchbar`).value = "";
    }
