// let nameEnt = [];
// let speciesEnt = [];
// let colorEnt = [];
// let habitatEnt = [];

// document.getElementById("submit").onclick = function(){
    
//     nameEnt = document.getElementById("name").value;

//     speciesEnt = document.getElementById("species").value;

//     colorEnt = document.getElementById("color").value;

//     habitatEnt = document.getElementById("habitat").value;

//     let animal = enterProperties(nameEnt, speciesEnt, colorEnt, habitatEnt);
//     console.log(animal);

// }

    // console.log(nameEnt, speciesEnt, colorEnt, habitatEnt)

    window.onload = function (){
    document.getElementById("submit").onclick = function(){
        enterValues();
    }}

    let enterValues = () => {
        name1 = document.getElementById("name").value;

        species1 = document.getElementById("species").value;
    
        color1 = document.getElementById("color").value;
    
        habitat1 = document.getElementById("habitat").value;

        let animal = enterProperties(name1, species1, color1, habitat1)
        console.log(animal);
    }

function enterProperties (name, species, color, habitat){

    return{
        name: name,
        species: species,
        color: color,
        habitat: habitat
    }
};

    // let animal = enterProperties(nameEnt, speciesEnt, colorEnt, habitatEnt)
    // console.log(animal);

