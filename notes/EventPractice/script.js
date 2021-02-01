// let main = document.getElementsByTagName("body")
// main = main[0];
// console.log(main);

// // // main.innerHTML= "<div>Hello World<div>";

// // // let div = document.createElement("div");
// // // div.addEventListener("mouseover", function(){
// // //     alert(this);
// // // });
// // // main.appendChild(div);

// // let first = function(){
// //     alert(`first`);
// // }

// // let second = function(){
// //     this.removeEventListener(`click`, first);
// // }

// // let div = document.createElement(`div`);
// // div.addEventListener(`click`, first);
// // div.addEventListener(`click`, second);
// // main.appendChild(div);

// let song = [];

// let faBtnAdd = function(){
//     song.push("fa");
//     console.log(`added fa`)
// };

// let laBtnAdd = function(){
//     song.push("la");
// }

// let ahBtnAdd = function(){
//     song.push("ah");
// }

// let babyBtnAdd = function(){
//     song.push("baby");
// }

// let display = function(){
//     let div = document.createElement(`div`);
//     div.innerHTML = song.join("-");
//     main.appendChild(div);
// }
//     let faBtn = document.getElementById('faBtn');
//     let laBtn = document.getElementById('laBtn');
//     let ahBtn = document.getElementById('ahBtn');
//     let babyBtn = document.getElementById('babyBtn');
//     let displayBtn = document.getElementById('display');
//     faBtn.addEventListener(`click`, faBtnAdd);
//     laBtn.addEventListener(`click`, laBtnAdd);
//     ahBtn.addEventListener(`click`, ahBtnAdd);
//     babyBtn.addEventListener(`click`, babyBtnAdd);
//     displayBtn.addEventListener(`click`, display);


function handler(event){
    if(text.style.display != "none"){
        text.style.display = "none";
    }else{
        text.style.display = "block";
    }
}

toggle.addEventListener("click", handler);

for(let i = 0; i<9; i++){
    let square = document.createElement(`div`);
    square.addEventListener(`mouseover`, testing);
    main.appendChild.square;
}
