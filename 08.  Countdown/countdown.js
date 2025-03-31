/**
 * JS - Countdown
 *@author Nicolas José 
 */
 var check = false;
 function xequeMate(){
    if(check == false){
        var timer1 = setInterval(function() {start()}, 1000);
        var timer2 = setTimeout(function() {end()}, 13200);
        var count = 10;
        function start(){
            soundBeep();
            document.getElementById("time").innerHTML = count;
            if(count == 0){
                clearInterval(timer1);
                soundThunder();
                document.getElementById("fire").src = "img/explosion.gif";
                document.getElementById("time").innerHTML = "GAME OVER!";
            }
            count--;
        }
        check = true;
    }
 }

 function soundThunder(){
    var beep = new Audio();
    beep.src = "img/Thunder_Crack.mp3";
    beep.play();
 }

 function soundBeep(){
    var beep = new Audio();
    beep.src = "img/Beep_Short.mp3";
    beep.play();
 }

 function end(){
    document.getElementById("fire").src = "img/clean.png"
 }