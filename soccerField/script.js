field.onclick= function(event){
    let fieldCoords = this.getBoundingClientRect();

    let ballCords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2,
    }

    //prevent ball from moving out of bounds

    if(ballCords.top < 0){
        ballCords.top = 0;
    }

    if(ballCords.left < 0){
        ballCords.left = 0;
    }

    if(ballCords.left+ ball.clientWidth > field.clientWidth){
        ballCords.left = field.clientWidth - ball.clientWidth;
    }
    if(ballCords.top+ ball.clientHeight > field.clientHeight){
        ballCords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCords.left+`px`
    ball.style.top = ballCords.top+`px`

}

