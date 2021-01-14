
function createKnight(name, color, quest, swallow){
    return{
        name,
        color,
        quest,
        swallow
    }
}

function run(){
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let quest = document.getElementById("quest").value;
    let swallow = document.getElementById("swallow").value;

    sirLancelot = createKnight(name, color, quest, swallow);

    console.log(sirLancelot);

}