const buttons = document.querySelectorAll('button');
let scoreJoueur = 0;
let scoreOrdi = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        const stone = document.querySelector(".stone").innerHTML;
        const leaf = document.querySelector(".leaf").innerHTML;
        const cisor = document.querySelector(".cisor").innerHTML;
        let resultat = "";
    //Les règles du jeu
        if (joueur === robot) {
            resultat = "Egalité";
            scoreJoueur = scoreJoueur++;
            scoreOrdi = scoreOrdi++;
        }
        else if ((joueur === stone && robot === cisor) || (joueur === leaf && robot === stone) || (joueur === cisor && robot === leaf)) {
            resultat = "Gagné";
            scoreJoueur = scoreJoueur+2;
        }
        else {
            resultat = "Perdu";
            scoreOrdi=scoreOrdi+2;
        }
    //afficher le cumul de point
        document.querySelector("#scoreJ").innerHTML = `Score joueur: ${scoreJoueur}`;
        document.querySelector("#scoreO").innerHTML = `Score Robot: ${scoreOrdi}`;
        /*document.getElementById('scoreJ').innerHTML= "Score joueur : " + scoreJoueur;
        document.getElementById('scoreO').innerHTML= "Score ordinateur : " + scoreOrdi;*/
    //afficher le combat et les résultats immédiats
        document.querySelector(".resultat").innerHTML = 
        `Joueur : ${joueur}</br>
         Robot : ${robot}</br>
         ${resultat}`;

         if (scoreJoueur >= 20){
             alert("Vous êtes un WINNER\n\n YOU: " + scoreJoueur + "\n\nROBOT: " + scoreOrdi);
             if (confirm){
                 document.location.reload();
                }
         }
         else if (scoreOrdi >= 20){
            alert("Vous êtes un LOOSER\n\n YOU: " + scoreJoueur + "\n\nROBOT: " + scoreOrdi);
            if (confirm){
                document.location.reload();
               } 
         }
    })
}