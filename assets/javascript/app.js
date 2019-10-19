$(document).ready(function () {
    // gobal variables
    var number = 60;

    var intervalId;

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

    // Questions array
    var questions = [{
        question: "Which fictional city is the home of Batman?",
        answerList: ["Gotham City", "Asgard", "Metropolis", "Smallville"],
        answer: 0
    }, {
        question: "Spinach is high in which mineral?",
        answerList: ["Omega-3", "Vitiman B", "Iron", "Copper"],
        answer: 2
    }, {
        question: "What is a Geiger Counter used to detect?",
        answerList: ["Earthquakes", "Paranormal Activity", "Electrical Current", "Radiation"],
        answer: 3
    }, {
        question: "Which type of dog has breeds called Scottish, Welsh and Irish?",
        answerList: ["Toy Breed", "Working Breed", "Herding Breed", "Terrier Breed"],
        answer: 3
    }, {
        question: "Babe Ruth is associated with which sport?",
        answerList: ["Football", "Baseball", "Basketball", "Rugby"],
        answer: 1
    }];

    $("#start").on("click", function () {
        // Hide Start button
        $(this).hide();

        // 60 secound timer
        $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");

        // Start timer
        run();

        // Reuseable function for each question
        // Question 1
        $("#question1").html("<h3>" + questions[0].question + "</h3>");
        $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
            + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
            + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
            + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
        );

        // Question 2
        $("#question2").html("<h3>" + questions[1].question + "</h3>");
        $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
            + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
            + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
            + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
        );

        // Question 3
        $("#question3").html("<h3>" + questions[2].question + "</h3>");
        $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
            + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
            + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
            + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
        );

        // Question 4
        $("#question4").html("<h3>" + questions[3].question + "</h3>");
        $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
            + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
            + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
            + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
        );

        // Question 5
        $("#question5").html("<h3>" + questions[4].question + "</h3>");
        $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
            + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
            + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
            + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
        );

        // Submit button
        $("#submit").html("<button id='done' class='btn'>Done</button>");


        $("#done").on("click", function () {

            // Keepscore correct, incorrect, or unanswered
            keepingScore();

            // Display 
            displayResults();

        });
    });

    // Timer function
    function run() {

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }


    function decrement() {

        number--;

        //  Show the number in the #time tag
        $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

        if (number === 0) {

            // Run stop function to stop timer countdown
            stop();

            keepingScore();
            displayResults();

        }
    }

    function stop() {

        //  Clears intervalId
        clearInterval(intervalId);
    }

    // Function used for displaying results
    function displayResults() {

        $("#time").hide();
        $("#question1").hide();
        $("#answer1").hide();
        $("#question2").hide();
        $("#answer2").hide();
        $("#question3").hide();
        $("#answer3").hide();
        $("#question4").hide();
        $("#answer4").hide();
        $("#question5").hide();
        $("#answer5").hide();
        $("#submit").hide();

        $("#resultsMessage").html("<h3>All Done!</h3>");
        $("#correct").html("Correct Answers: " + correctAnswers);
        $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
        $("#unanswered").html("Unanswered: " + unanswered);
    }

    // Function keepscore and reusable block of code
    function keepingScore() {

        var playerAnswer1 = $("input[name='answer1']:checked").val();
        var playerAnswer2 = $("input[name='answer2']:checked").val();
        var playerAnswer3 = $("input[name='answer3']:checked").val();
        var playerAnswer4 = $("input[name='answer4']:checked").val();
        var playerAnswer5 = $("input[name='answer5']:checked").val();


        // Question 1
        if (playerAnswer1 === undefined) {

            unanswered++;
        }
        else if (playerAnswer1 == questions[0].answer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 2
        if (playerAnswer2 === undefined) {

            unanswered++;
        }
        else if (playerAnswer2 == questions[1].answer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 3
        if (playerAnswer3 === undefined) {

            unanswered++;
        }
        else if (playerAnswer3 == questions[2].answer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 4
        if (playerAnswer4 === undefined) {

            unanswered++;
        }
        else if (playerAnswer4 == questions[3].answer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 5
        if (playerAnswer5 === undefined) {

            unanswered++;
        }
        else if (playerAnswer5 == questions[4].answer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }


    }

})

