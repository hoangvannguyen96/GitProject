function move1(){
    if(document.getElementById('len').innerText=='top'){
        document.getElementsByClassName('xe')[0].src='img/top.png';
    }
}
function move2(){
    if(document.getElementById('xuong').innerText=='down'){
        document.getElementsByClassName('xe')[0].src='img/down.png';
    }
}
function move3(){
    if(document.getElementById('trai').innerText=='left'){
        document.getElementsByClassName('xe')[0].src='img/left.png';
    }
}
function move4(){
    if(document.getElementById('phai').innerText=='right'){
        document.getElementsByClassName('xe')[0].src='img/right.png';
    }
}