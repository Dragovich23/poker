
$("div.lista").mouseover(function() {
    $("ul").show(300)
});
$("div.lista").mouseleave(function() {
    $("ul").hide(300)
});
$('[href="#"]:eq(4)').attr('href', './contact.html'); 
$('[href="#"]:eq(3)').attr('href', './index3.html');
$('[href="#"]:eq(2)').attr('href', './index2.html');
$('[href="#"]:eq(1)').attr('href', './uklady.html');
$('[href="#"]:eq(0)').attr('href', './index.html');

$('a:eq(0)').html("Strona główna");
$('a:eq(1)').html("Układy");
$('a:eq(2)').html("Prawdopodobieństwa");
$('a:eq(3)').html("Strategie");
$('a:eq(4)').html("Kontakt");

$(function(){
  $("footer").load("footer.html"); 
});

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("ukl");
    let table="<tr><th><b>Układ</b></th><th><b>Liczba możliwych układów</b></th><th><b>Prawdopodobieństwo</b></th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("nazwa")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("liczba")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("prawd")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("table").innerHTML = table;
  };

$(document).ready(function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET", "szanse.xml");
    xhttp.send();
});

