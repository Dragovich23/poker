
$("div.lista").mouseover(function() {
    $("ul").show(300)
});
$("div.lista").mouseleave(function() {
    $("ul").hide(300)
});
$('[href="#"]:eq(5)').attr('href', './contact.html'); 
$('[href="#"]:eq(4)').attr('href', './footer.html'); 
$('[href="#"]:eq(3)').attr('href', './index3.html');
$('[href="#"]:eq(2)').attr('href', './index2.html');
$('[href="#"]:eq(1)').attr('href', './uklady.html');
$('[href="#"]:eq(0)').attr('href', './index.html');

$('a:eq(0)').html("Strona główna");
$('a:eq(1)').html("Układy");
$('a:eq(2)').html("Prawdopodobieństwa");
$('a:eq(3)').html("Link 3");
$('a:eq(4)').html("Autorzy");
$('a:eq(5)').html("Kontakt");




