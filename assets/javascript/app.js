
alert("Working");

//clock will run when page starts
window.onload = function() {
    $("#start").on("click",start);
    $("#reset").on("click",reset);
};

var intervalId;

//set up display
$("#display").text("03:00");

//need to set up start/reset   
function start () {
    if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    }
}

function reset() {
    clearInterval(intervalId);
    clockRunning = false;
}

    //We need to set up questions and answers
    $(document).ready(function () {

        //questions log
        var questions = 
        [
            {
            question: "What state did the show take place?"
            answers: {
                a: 'Texas',
                b: 'North Carolina',
                c: 'Louisana',
                d: 'Arkansas'
            },
            rightAnswer: 'd'
        },
        {
            question: "what is the name of the texas beer?"
            answers: {
                a: 'Lonestar',
                b: 'Coors',
                c: 'Shiner Beer',
                d: 'Bud Light'
            },
            rightAnswer: 'a'
        },
        {

            question: "What is the name of the biker gang?"
            answers: {
                a: 'Hells Angels',
                b: 'The Mighty Ducks',
                c: 'Iron Cruisaders',
                d: 'AHHH REAL MONSTERS',
        },
        rightAnswer: 'c'
}

];
