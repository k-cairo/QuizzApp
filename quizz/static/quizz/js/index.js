$("button").click(function(e) {
    var buttonTarget = e.target.id;
    var userResponse = $("#reponse" + buttonTarget + " h2").text();
    if (userResponse == bonneReponse) {
        $("#reponse" + buttonTarget + " h2").addClass("bonne_reponse_text");
        $("#" + buttonTarget).addClass("bonne_reponse_button");
        score += 1;
    }
    else {
        $("#reponse" + buttonTarget + " h2").addClass("mauvaise_reponse_text");
        $("#" + buttonTarget).addClass("mauvaise_reponse_button");
    };
    $("#1, #2, #3, #4").attr("disabled", true);
    $("a").removeClass("deactivate");
});

$("a").click(function() {
    $("a").addClass("deactivate");
});