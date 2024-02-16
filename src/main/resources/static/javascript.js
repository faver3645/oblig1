function valideringInput(){
    let film = document.getElementById("films").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    antall = Number(antall);

    let gyldig = true;

    if (!film.trim()){
        let ut = document.getElementById("filmUt");
        ut.innerHTML = "Velg en Film!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("filmUt").innerHTML = "";
    }

    if(isNaN(antall) || antall <= 0){
        let ut = document.getElementById("antallUt");
        ut.innerHTML = "Skriv inn noe i Antall!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("antallUt").innerHTML = "";
    }

    if(!fornavn.trim()){
        let ut = document.getElementById("fornavnUt");
        ut.innerHTML = "Skriv inn noe i Fornavn!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("fornavnUt").innerHTML = "";
    }

    if(!etternavn.trim()){
        let ut = document.getElementById("etternavnUt");
        ut.innerHTML = "Skriv inn noe i Etternavn!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("etternavnUt").innerHTML = "";
    }

    const telefonRegex = /^\d{8}$/;
    if(!telefonRegex.test(telefonnr.trim())){
        let ut = document.getElementById("telefonnrUt");
        ut.innerHTML = "Ugyldig telefonnr!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("telefonnrUt").innerHTML = "";
    }
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!epostRegex.test(epost.trim())){
        let ut = document.getElementById("epostUt");
        ut.innerHTML = "Ugyldig Epost!";
        ut.style.color = "red";
        gyldig = false;
    }
    else {
        document.getElementById("epostUt").innerHTML = "";
    }

    return gyldig;
}

let array = [];
let ut;
let billett;
function lagreIArray(){

    if(valideringInput()){
        billett = {
            film: document.getElementById('films').value,
            antall: document.getElementById('antall').value,
            fornavn: document.getElementById('fornavn').value,
            etternavn: document.getElementById('etternavn').value,
            telefonnr: document.getElementById('telefonnr').value,
            epost: document.getElementById('epost').value
        };

        array.push(billett);

        ut =  "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>&nbsp;&nbsp;Fornavn</th><th>&nbsp;&nbsp;Etternavn" +
            "</th><th>&nbsp;&nbsp;Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for(let b of array){
            ut+="<tr>";
            ut += "<td>"+b.film+"</td><td>"+" "+"&nbsp;&nbsp;"+b.antall+
                "</td><td>"+"&nbsp;&nbsp;"+b.fornavn+"</td><td>"+"&nbsp;&nbsp;"+b.etternavn+"</td><td>"+"&nbsp;&nbsp;"+b.telefonnr+"</td>" +
                "<td>"+"&nbsp;&nbsp;"+b.epost+"</td>";
            ut+="</tr>";
        }
        let output = document.getElementById("output");
        output.innerHTML = ut;

        document.getElementById("films").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";
    }
}


function slettBillett(){
    array = [];
    let output = document.getElementById("output");
    output.innerHTML = "";
}
