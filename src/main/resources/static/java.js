let array = [];
let ut;
let billett;
function lagreIArray(){

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
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn" +
        "</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for(let b of array){
        ut+="<tr>";
        ut += "<td>"+b.film+"</td><td>"+b.antall+
            "</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td>" +
            "<td>"+b.epost+"</td>";
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

function slettBillett(){
    array = [];
    let output = document.getElementById("output");
    output.innerHTML = "";
}
