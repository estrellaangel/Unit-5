let hide = function(){
    if(nameV.value != "" && DOB.value != "")
        if(voteForHubert.checked || voteForRichard.checked ){
            castVote.style.display = "none";
        }
}
castVoteBtn.addEventListener(`click`, hide)


ballot.onclick = function(event){
    let bothImgs = this.getBoundingClientRect();

    let ballotCords = {
        top: event.clientY - ballot.clientHeight,
        left: event.clientX - ballot.clientWidth,
    }

    let ballotBoxCords = {
        top: bothImgs.top - ballotCords.top,
        left: bothImgs. - ballotBox.clientWidth,
    }


};

