let health = 5;
let point = 0;    
let place = Math.floor(Math.random() * 9)+1; /*w3_schools*/

function mouse_clicked1(){    
    if(1 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked2(){    
    if(2 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked3(){    
    if(3 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked4(){    
    if(4 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked5(){    
    if(5 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked6(){    
    if(6 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked7(){    
    if(7 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked8(){    
    if(8 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}
function mouse_clicked9(){    
    if(9 == place){
        //alert(" ")
        document.getElementById(`mouse${place}`).src = "../images/empty.svg";
        health++;
        point++;
        document.getElementById('point_text').innerText = `Pont: ${point}`
        //jatek();
    }
}

function game_end(){
    for(i = 1; i < 10; i++){
        document.getElementById(`mouse${i}`).src = "../images/empty.svg";
    }
}

function jatek(){
    health--;
    document.getElementById(`mouse${place}`).src = "../images/empty.svg";
    place = Math.floor(Math.random() * 9)+1; /*w3_schools*/
    document.getElementById(`mouse${place}`).src = "../images/mouse.svg";
    document.getElementById('health_text').innerHTML = `Élet: ${health}`;
    if(health>0)setTimeout(`jatek()`,5000);
    else game_end();    
}
function jatek_indito(){
    health = 6;
    point = 0;    
    place = Math.floor(Math.random() * 9)+1; /*w3_schools*/
    document.getElementById("game_start").style.display= "none";
    jatek()
}
document.getElementById("game_start").addEventListener("click", jatek_indito);
document.getElementById("mouse1").addEventListener("click", mouse_clicked1);
document.getElementById("mouse2").addEventListener("click", mouse_clicked2);
document.getElementById("mouse3").addEventListener("click", mouse_clicked3);
document.getElementById("mouse4").addEventListener("click", mouse_clicked4);
document.getElementById("mouse5").addEventListener("click", mouse_clicked5);
document.getElementById("mouse6").addEventListener("click", mouse_clicked6);
document.getElementById("mouse7").addEventListener("click", mouse_clicked7);
document.getElementById("mouse8").addEventListener("click", mouse_clicked8);
document.getElementById("mouse9").addEventListener("click", mouse_clicked9);