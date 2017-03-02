//variables
//===================================
var rightAns = 0;
var wrongAns = 0;
var score = 0;



//functions
//===================================



//main processes
//===================================
$(document).ready(function () {
	
	
	$('#scoreBox').text(score);
	
	// When question1 is answered.
	$('input[type=checkbox][name=answer1]').change(function() {
	    $('#question1').hide();
        //if true display correct message
        if (this.value == 'true') {
            $("#correctDisplay").show();
            $("#correctDisplay").fadeOut(3000);
            rightAns++;
            score += 10;
        }//if false diplay wrong message
        else if (this.value == 'false') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(3000);
            wrongAns++;
        }
        
        $('#scoreBox').text(score);
        $('#question2').fadeIn(1000);
    });
	
    // When question2 is answered.
    $('input[type=checkbox][name=answer2]').change(function() {
        $('#question2').hide();
        if (this.value == 'true') {
            $("#wrongDisplay").show();
            $("#wrongDisplay").fadeOut(1000);
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
        }
        
        //displays score
        $('#scoreBox').text(score);
        //displays results at end
        $('#resultsDisplay').text("Congrats! You got " + rightAns + " of 7 questions correct!");
        $('#resultsDisplay').show();
    });
	
 
});

	


   
   










