if (questionNumero == 1) {
sessionStorage.setItem("score", "0");
};


if (questionNumero == "") {
    var scoreFinal = parseInt(sessionStorage.getItem("score"));
    $("#score").text(scoreFinal);

    if (scoreFinal / parseInt(questionTotal) == 1) {
        $("#commentaire").text("FELICITATIONS");
    } else if (scoreFinal / parseInt(questionTotal) > 0.8) {
        $("#commentaire").text("BRAVO");
    } else if (scoreFinal / parseInt(questionTotal) > 0.4) {
        $("#commentaire").text("TU PEUX MIEUX FAIRE");
    } else {
        $("#commentaire").text("C'EST PAS TROP CA");
    }};


$("button").click(function(e) {
    var buttonTarget = e.target.id;
    var userResponse = $("#reponse" + buttonTarget + " h2").text();
    var score = parseInt(sessionStorage.getItem("score"));

    if (userResponse == bonneReponse) {
        $("#reponse" + buttonTarget + " h2").addClass("bonne_reponse_text");
        $("#" + buttonTarget).addClass("bonne_reponse_button");
        score += 1;
        sessionStorage.setItem("score", score);
        console.log("Bonne Réponse " + score);
    }
    else {
        $("#reponse" + buttonTarget + " h2").addClass("mauvaise_reponse_text");
        $("#" + buttonTarget).addClass("mauvaise_reponse_button");
        console.log("Mauvaise Réponse " + score);
    };
    $("#1, #2, #3, #4").attr("disabled", true);
    $("a").removeClass("deactivate");
    $("#score").text(score);
});


$("a").click(function() {
    $("a").addClass("deactivate");
});