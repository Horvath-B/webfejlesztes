let num = 1;
function cat_next(){
    num = num + 1;
    if(num>10) num = 1;
    document.getElementById("cat_pic").src=`../images/cat${num}.svg`
}
function cat_prev(){
    num = num - 1;
    if(num==0) num = 10;
    document.getElementById("cat_pic").src=`../images/cat${num}.svg`
}
function c_c_s(){
    document.getElementById("cat_changer").style.display = "flex";
}
document.getElementById('c_prev').addEventListener('click',cat_prev);
document.getElementById('c_next').addEventListener('click', cat_next);
document.getElementById('c_c_s').addEventListener('click', c_c_s);