let hidden = 0;
let hide = function(){
    if(nameV.value != "" && DOB.value != "")
        if(voteForHubert.checked || voteForRichard.checked ){
            castVote.style.display = "none";
            hidden++;
            console.log(hidden)
            ballot.addEventListener(`mousemove`, moveBallot);
        }
}
castVoteBtn.addEventListener(`click`, hide);

let moveBallot = function(){
    let ballotLeft = ballot.style.left;
    let ballotTop = ballot.style.top;

    ballot.style.left = (event.clientX - 100) + `px`;
    ballot.style.top = (event.clientY - 50) + `px`;


    // ballotLeft.split("px");

    // ballotTop.replace("px", "");

    console.log(ballotLeft, ballotTop)
    
    // if(ballot)
    // if(ballot.style.top - 10 == ballotBox.style.top){
    //     for(ballot; ballot.style.top + 10 < ballotBox.style.top;){
            
    //     }
    // }
    // let ballotCords = {
    //     top: event.clientY - ballot.clientHeight,
    //     left: event.clientX - ballot.clientWidth,
    // }

    // let ballotBoxCords = {
    //     top: bothImgs.top - ballotCords.top,
    //     left: bothImgs.left - ballotBox.clientWidth,
    // }
}

// if(hidden > 0){
//     console.log("iej")
//     ballot.addEventListener(`click`, moveBallot) 
// };

