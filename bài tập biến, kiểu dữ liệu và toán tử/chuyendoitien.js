function chuyendoi(){
    let dauvao= document.getElementById('giatridau').value;
    let Result=document.getElementById('ketqua').value;
    if(document.getElementById('tien').value=="VND"&&document.getElementById('te').value=="VND"){
    Result="Result:" + (dauvao) + "VND";
    }
    else if(document.getElementById('tien').value=="$"&&document.getElementById('te').value=="$"){
    Result="Result:" + (dauvao) + "$";
    }
    else if(document.getElementById('tien').value=="$"&&document.getElementById('te').value=="VND"){
    Result="Result:" + (dauvao*23000) + "VND"
    }
    else {Result="Result:" + (dauvao/23000) + "$"}
    document.getElementById('ketqua').innerHTML=Result;
    }    