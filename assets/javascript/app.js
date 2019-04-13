console.log("working")



//Audio
var audioElement = document.createElement("audio");
//create source
audioElement.setAttribute("src", "assets/TD.mp3");

// theme Button
$(".theme-button").on("click", function(){
        audioElement.play();
});

//Pause Button
$(".pause-button").on("click", function(){
    audioElement.pause();
});

//now we need to do the window on load function
window.onload = function() {
$("#stop").on("click", stop);
$("#reset").on("click", reset);
};



//now we gotta set the counter
var number = 180;
//now we have to make it run
var intervalId;
//when you hit stop, it stops
$("stop").on("click",stop);
//restart continues the clock
$("#restart").on("click", run);
// must create a function
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);

}
//decrement 1000 is a second
function decrement() {
    //decreases by one
    number--;
    //Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");

    //the number will hit zero
    if (number ===0) {
        //..stops from going into the negative
        stop();
        alert("Dun Dun Dun Times Up")


    }

}

//now we need the stop function
function stop() {
    //this clears the interval
    clearInterval(intervalId);
    clockRunning = false;
}

//now we need the run function
run();


var myQuestions = [
    {
        question: "1.) Where did the show take place?",
        answers: {
            a: 'Texas',
            b: 'Louisana',
            c: 'Arkansas',
        },
        correctAnswer: 'b'
    },
    {
        question: "2.) What is the name of the texas beer thats featured in the show?",
        answers: {
            a: 'Lonestar',
            b: 'Coors',
            c: 'Shiner Beer',
        },
        correctAnswer: 'a'
    },
    {      question: "3.) What is the name of the biker gang?",
    answers: {
        a: 'Hells Angels',
        b: 'The Mighty Ducks',
        c: 'Iron Cruisaders',
    },
    correctAnswer: 'c'
},
{      question: "4.) Who was Reggie Ladoux's Cell mate?",
answers: {
    a: 'Charlie Lang',
    b: 'Steve Geraci',
    c: 'Marty Hart',
},
correctAnswer: 'a'
},
{      question: "5.)   Who is the Yellow King?",
answers: {
    a: 'Reggie Ladoux',
    b: 'Errol Childress',
    c: 'Reverend Tuttle',
},
correctAnswer: 'b'
},
    ];

    console.log(myQuestions)

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
