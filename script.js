// genarating random numbers between 10 - 50

function randomDistance(){
    distance =  Math.floor((Math.random() * 4 + 1) * 10);
    return distance;
}

let racingTurtles = ["./images/turtle01.png", "./images/turtle02.png", "./images/turtle03.png"]
while (1){

    for(let i = 0; i < 3; i++){


        racingTurtles[i].style.left = 5 + 'px';

        setInterval(moveForward, 200);
        console.log("hdbcjhb")
    }
    
}

