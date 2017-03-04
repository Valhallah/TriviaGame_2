//variables
//===================================
var questionAnswer = [{
    question: "Han shot first.",
    choices: [true, false],
    answer: 0
}, {
    question: "In Episodes 4 and 5 Luke's lightsaber is green.",
    choices: [true, false],
    answer: 1
}, {
    question: "On the planet of Jakku, Rey lives inside the remains of an AT-AT.",
    choices: [true, false],
    answer: 0
}, {
    question: "The creature Han cuts open, after it's death, to keep Luke warm on Hoth is called a Wampa.",
    choices: [true, false],
    answer: 1
}, {
    question: "Luke Skywalker is not mentioned in the Opening crawl of The Force Awakens.",
    choices: [true, false],
    answer: 1
}, {
    question: "The Ewoks are from the planet Endor.",
    choices: [true, false],
    answer: 0
}, {
    question: "Kylo Ren is a Sith.",
    choices: [true, false],
    answer: 1
}];

var rightAns = 0;
var wrongAns = 0;
var score = 0;

var currentQuestion = 0;


//functions
//===================================



//main processes
//===================================
$(document).ready(function () {
    $("#wrapper").fadeIn(2000);
    
    $('#scoreBox').text(score);
    
    // When question is answered.
    $('input[type=checkbox][name=answer]').change(function() {
        $('#questionDiv').hide();
        //if question is not equal to the answer stored
        if (this.value != questionAnswer[currentQuestion].answer) {
            //show wrong message
            $("#wrongDisplay").show();
            //fade wrong message over 3 seconds
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        //if question is equal to the answer stored
        else if (this.value == questionAnswer[currentQuestion].answer) {
            //show right message
            $("#correctDisplay").show();
            //fade right message over 3 seconds
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        
        //increment question
        currentQuestion++;
        
        //if current question is greater than or equal to the amount of questions 
        if (currentQuestion >= questionAnswer.length) {
            //display score
            $('#resultsDisplay').text("Congrats! You got " + rightAns + " of 7 questions correct!");
            $('#resultsDisplay').show();
        } else {
            // otherwise display next question
            $('#questionLabel').text(questionAnswer[currentQuestion].question);
            $('#scoreBox').text(score);
            $('#questionDiv').fadeIn(1000);
        }
    });
	
    // When question2 is answered.
   /* $('input[type=checkbox][name=answer2]').change(function() {
        $('#question2').hide();
        if (this.value == 'true') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        else if (this.value == 'false') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        
        $('#scoreBox').text(score);
        $('#question3').fadeIn(1000);
    });
    
    // When question3 is answered.
    $('input[type=checkbox][name=answer3]').change(function() {
        $('#question3').hide();
        if (this.value == 'true') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        else if (this.value == 'false') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        
        $('#scoreBox').text(score);
        $('#question4').fadeIn(1000);
    });
    
    // When question4 is answered.
    $('input[type=checkbox][name=answer4]').change(function() {
        $('#question4').hide();
        if (this.value == 'true') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        else if (this.value == 'false') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        
        $('#scoreBox').text(score);
        $('#question5').fadeIn(1000);
    });
    
    // When question5 is answered.
    $('input[type=checkbox][name=answer5]').change(function() {
        $('#question5').hide();
        if (this.value == 'true') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        else if (this.value == 'false') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        
        $('#scoreBox').text(score);
        $('#question6').fadeIn(1000);
    });
    
    // When question6 is answered.
    $('input[type=checkbox][name=answer6]').change(function() {
        $('#question6').hide();
        if (this.value == 'true') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }
        else if (this.value == 'false') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        
        $('#scoreBox').text(score);
        $('#question7').fadeIn(1000);
    });
    
    // When question7 is answered.
    $('input[type=checkbox][name=answer7]').change(function() {
        $('#question7').hide();
        if (this.value == 'true') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        else if (this.value == 'false') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }*/
        
        //displays score
        
    });
	
 

	


   
   










