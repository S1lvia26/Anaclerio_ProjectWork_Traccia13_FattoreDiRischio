// genera il QR code
/*
new QRCode(document.getElementById("qrcode"), {
    text: "https://s1lvia26.github.io/Basic_calculator_test/esercizio12/ciao.html",  // da aggiustare link e fare git pages
    width: 150,
    height: 150
});
*/

// calcolo

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
    


    console.log('ciao');
    document.querySelectorAll("select.pericolo, select.gravita").forEach(select => {
        select.addEventListener("change", function() {

            // Trova la riga di questa select
            const row = this.closest("tr");

            // Prendi i valori delle due select della stessa riga
            const pericolo = Number(row.querySelector("select.pericolo").value) || 0;
            const gravita = Number(row.querySelector("select.gravita").value) || 0;

            // Calcola il rischio
            const rischio = pericolo * gravita;

            // Aggiorna l'input della colonna rischio
            row.querySelector("input.rischio").value = rischio;

        });
    });

    
});


/*
let num1= document.querySelector('#postazione_pericolo').value;
console.log(num1);
let num2= document.querySelector('#postazione_gravita').value;
console.log(num2);
let calcola3=document.querySelector('#calcola3');
let total= document.querySelector('#postazione_rischio');

function moltiplicazione (valore1,valore2) {
    let moltiplicazione= Number(valore1) * Number(valore2);
    return moltiplicazione;
}


calcola3.addEventListener('click',()=>{
    total.value = moltiplicazione(num1.value,num2.value);

});
*/