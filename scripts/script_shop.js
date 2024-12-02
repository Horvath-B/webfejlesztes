function show_cats(){
    document.getElementById("s_cats").style.display = "flex";
    document.getElementById("s_habitats").style.display = "none";
}
function show_habitats(){
    document.getElementById("s_cats").style.display = "none";
    document.getElementById("b_cats").class = "notactive";
    /*document.getElementById("b_cats").style.backgroundColor = '#21273C';
    document.getElementById("b_cats").style.color = '#ECEDF0'*/
    document.getElementById("s_habitats").style.display = "flex";
}
document.getElementById('b_cats').addEventListener('click',show_cats)
document.getElementById('b_habitats').addEventListener('click',show_habitats)
document.getElementById('buy').addEventListener('click', function(){alert("Nincs elég pénzed!")})