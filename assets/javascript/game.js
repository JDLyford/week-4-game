var ranScore = 0;
var wins = 0;
var loses = 0;
var totalScore = 0;
var overTotal = false;

function reset() {
    ranScore = 0; wins = 0; loses = 0; totalScore = 0; overTotal = false;
    $("#wins", "#loses", "#score").empty();
    $("#score").text("0");
    ranNum();
}

function round() {
    ranScore = 0; totalScore =0; overTotal = false;
    $("#score").empty();
    $("#score").text("0");
    ranNum();
    $(".gem").each(function( index ) {
        $(this).val(Math.floor(Math.random() * 8) + 1);
        console.log(("Value of each gem " + $(this).val()));
    });
    
    
}

function ranNum() {
for (var i = 0; i < 1; i++) {
ranScore = Math.floor(Math.random() * 20) + 30;
$("#total").text(ranScore);
console.log(ranScore);
}};

$(".gem").on('click', function () {
    if (overTotal == false) {
        points = $(this).val();
        totalScore = (parseInt(points) + totalScore);
        $("#score").text(totalScore);
        console.log(totalScore);
        if (totalScore > ranScore) {
            overTotal = true;
            alert("You went over the score");
            loses++;
            $("#loses").text(loses);
            console.log(loses);
            round();
        } else if (totalScore === ranScore) {
            alert("You Won!");
            wins++;
            $("#wins").text(wins);
            console.log(wins);
            round();
        }
    };
});

ranNum();
