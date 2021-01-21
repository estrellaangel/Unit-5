// Extending a Class
// You can create "child classes" where they have all the same properties of the parent class adn then you can define more
// I.E. if you have an animal class you make a cat subclass
//     They will share many properties with other animals but you can add a few that only cats have like lives

//                 EVERY CLASSS NEEDS CONSTRUCTOR

class staff{
    constructor(name, id, age){ 
        this.name = name;
        this.id = id;
        this.age = age;
    }
}

class admin extends staff{
    set priviledge(acess){
        this.access = acess;
    }
}

class intern extends staff{
    set leaveDate(date){
        this.date = date;
    }
}

let jimmy = new intern("Jimmy", 1224, 21);
jimmy.leaveDate = "3030";
console.log(jimmy);

//You are allowed to extend any expression you want including not just classes
//This is not as common but sometimes you need to create a class using a function, now you can extend it

//SUPER METHODS
//Normally we don't want to overwrite a method when using it in a child class but we do want to modify it
//To do this we use the super keywoed in order to refer to the parent class

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with a speed of ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} is standing still`);
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} is hiding`);
    }
    stop(){
        //this OVERWRITES the parent
        //this will be used for Rabbit.stop
        //to fix this 
        super.stop(); //calls the parent stop
        this.hide(); //then it hides
    }//super is used POLYMORPHISM so that one thing can be done different ways depending on class
}

let peter = new Rabbit("peter");

peter.run(10);
peter.stop();

//Date Object
//The date object is a built in object that allows us to use time a bunch of different ways
//Normally we would need to create a ton of different methods to access the day or month or find time between days, now don't have to

//New Date
//We create new dates just like any other object
    let date = new Date();
//Inside of the parameters you have some options 
    //Milliseconds 
        // If you are putting in millisecondons it is calculated from Jan 1st of 1970 at midnight (0:00)
        //(days*hours*minutes*seconds*1000)
    //Datestring
        //A string will be parased automatically
        let date = new Date("2021-01-20");
        //If the time is not it is assumed to be midnight GMT and is adjusted accourding to timezone for instance:
            //Thu Jan 20 2021 11:00:00
            //Wed Jan 19 2021 16:00:00
    //Year, Month, date, hours, minutes, seconds, ms
        //Only the year and month are required
        //You can also create a date in the local time zone using just numbers
            //Year, just be 4 digits
            //Month, starts at 0(jan) and goes to 11(dec)
            //Date, starts at 1 
                //if left blank it is assumed1
            //Hours, minutes, seconds, ms
                //all start at 0 and if they are left blank it is assumed 0;

    //DATE METHODS
    getFullYear()
        //Get the year in 4 digits
    getMonth()
        //Get the month from 0 to 11
    getDate()
        //get the day of the month from 1 to 31
    getHours, minutes, etc...
    getDay()
        //Will return the day of the week O(sunday) to 6(saturday)\
    Date.now()
        //Returns the current time on the decive rhat you are using
        //This is the same as saying new Date().getTime() but saves your computer from creating a new date object


    //AUTO CORRECTING

        //The date object also auto corrects errors for you
            let date = new Date(2013, 0, 32); // 32 January 2013
            alert(date); //is 1st Feb 2013
        //This is often used to find a time that is x minuted from the old time
        

