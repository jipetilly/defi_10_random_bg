
function randombg(){
    var random= Math.floor(Math.random() * 6) + 0 ;
    var bigSize = ["url(../img/bg1.jpg)",
                    "url(../img/bg2.jpg)",
                    "url(../img/bg3.jpg)",
                    "url(../img/bg4.jpg)",
                    "url(../img/bg5.jpg)",
                    "url(../img/bg6.jpg)"];
    document.querySelector("header").style.backgroundImage=bigSize[random];
  }

/*



let randomNumber = Math.floor(Math.random()*6+1);
let myHeader = document.querySelector('.header');

myHeader.style.backgroundImage = "url('img/bg"+randomNumber+".jpg')"; */