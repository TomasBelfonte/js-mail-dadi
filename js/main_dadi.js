const lancioDadi = document.getElementById("lancio");

lancioDadi.addEventListener("click", function () {
    let num_pc1=Math.round(Math.random()*5+1);

    document.getElementById("numero_pc1").innerHTML ="Lancio computer = " + num_pc1;

    let totale_pc=num_pc1;
    document.getElementById("totale_pc").innerHTML =" , il punteggio del computer è di " + totale_pc;

    let num_1=Math.round(Math.random()*5+1);

    document.getElementById("numero_1").innerHTML ="Tu hai ottenuto = " + num_1;
    let totale1=num_1;
    document.getElementById("totale1").innerHTML =" , ed hai totalizzato " + totale1 + " punti";
    
    if(totale1 > totale_pc) {
    document.getElementById("vinto").innerHTML = "Hai Vinto";
    } else {
    document.getElementById("vinto").innerHTML = "Hai Perso";
    }
});