document.addEventListener("DOMContentLoaded", function() {

    const qrElement = document.getElementById("qrcode");
    if(qrElement){
        // codice generazione QR
        new QRCode(document.getElementById("qrcode"), {
            text: "https://s1lvia26.github.io/Basic_calculator_test/esercizio12/ciao.html",  // da aggiustare link e fare git pages
            width: 150,
            height: 150
        });
    } else {
        console.log("QR element non presente, salto questo codice");
    }
    
    document.querySelectorAll("select.probabilita, select.gravita").forEach(select => {
        select.addEventListener("change", function() {

            // Trova la riga di questa select
            const row = this.closest("tr");

            // Prendi i valori delle due select della stessa riga
            const probabilita = Number(row.querySelector("select.probabilita").value) || 0;
            const gravita = Number(row.querySelector("select.gravita").value) || 0;

            // Calcola il rischio
            const rischio = probabilita * gravita;

            // Aggiorna l'input della colonna rischio
            row.querySelector("input.rischio").value = rischio;

        });
    });

    
});

