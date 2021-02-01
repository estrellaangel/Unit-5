let hover = function(){
    this.style.background ="red";
    }

let makeWhite = function(){
    this.style.background = "white";
    }

let makeGreen = function(){
    this.style.background = "green"
    this.removeEventListener(`mouseover`, hover);
    this.removeEventListener(`mouseleave`, makeWhite);
}

for(let i = 0; i<105; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", hover);
    square.addEventListener("mouseleave", makeWhite);
    square.addEventListener(`click`, makeGreen);
    main.appendChild(square);
}

