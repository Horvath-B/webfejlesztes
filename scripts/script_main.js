num = 1;
h_num = 1;
f = 1;
ccatt=true;
hhabb=true;
function cat_next(){
    num = num + 1;
    if(num>6) num = 1;
    document.getElementById("cat_pic").src=`../images/cat${num}.svg`
}
function cat_prev(){
    num = num - 1;
    if(num==0) num = 6;
    document.getElementById("cat_pic").src=`../images/cat${num}.svg`
}
function hab_next(){
    h_num = h_num + 1;
    if(h_num>3) h_num = 1;
    document.getElementById("hab_pic").src=`../images/hab${h_num}.svg`
}
function hab_prev(){
    h_num = h_num - 1;
    if(h_num==0) h_num = 3;
    document.getElementById("hab_pic").src=`../images/hab${h_num}.svg`
}
function c_c_s(){
    if (document.getElementById('c_c_s').value != "Kinézet kiválasztása" && ccatt){
        document.getElementById("g_b_2_1").style.display = "flex";
        document.getElementById('c_c_s').value = "Kinézet kiválasztása";
        hhabb = false
        }
    else{
        document.getElementById("g_b_2_1").style.display = "none";
        document.getElementById('c_c_s').value = "Másik kinézet";
        hhabb = true;
    }
}
function h_c(){
    if (document.getElementById('h_c').value != "Alom kiválasztása" && hhabb){
        document.getElementById("g_b_2_2").style.display = "flex";
        document.getElementById('h_c').value = "Alom kiválasztása";
        ccatt = false;
    }
    else{
        document.getElementById("g_b_2_2").style.display = "none";
        document.getElementById('h_c').value = "Másik alom";
        ccatt = true;
    }
}
percent = 80;
function feed(){
    document.getElementById("f_pic").src = `../images/feeding/f${f}.svg`;
    document.getElementById('%').innerText =` ${percent}%`
    f++;
    percent+=2;
    if(percent>100) percent = 100;
    if(f<16) setTimeout(feed,200)
    else{
        f = 1;
        //document.getElementById("f_pic").src = `../images/feeding/f0.svg`;
    }
}
deg = 0.5;
a = 0;
hap = 76;
function zzz(){
    deg = deg * -1;
    document.getElementById('cat_pic').style.transform = `rotate(${deg}deg)`;
    document.getElementById('dor').style.display = 'block';
    document.getElementById('%2').innerText = `${hap}%`;
    a++;
    hap++;
    if (hap>100) hap = 100;
    if(a<10)setTimeout(zzz,100);
    else{
        a = 0;
        document.getElementById('dor').style.display = 'none';
    }
}


document.getElementById('c_prev').addEventListener('click',cat_prev);
document.getElementById('c_next').addEventListener('click', cat_next);
document.getElementById('c_c_s').addEventListener('click', c_c_s);
document.getElementById('h_prev').addEventListener('click',hab_prev);
document.getElementById('h_next').addEventListener('click', hab_next);
document.getElementById('h_c').addEventListener('click', h_c);
document.getElementById('f_s').addEventListener('click', feed)
document.getElementById('cat_pic').addEventListener('click', zzz)
