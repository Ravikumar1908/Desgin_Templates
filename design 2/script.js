function changezindex2(){
    var z=document.getElementById("secondcont");
    if(z.style.zIndex==="-1")
    {
        z.style.zIndex="0";
    }
    else{
        z.style.zIndex="-1";
    }
}
function changezindex1(){
    var y=document.getElementById("firstcont");
    if(y.style.zIndex==="0")
    {
        y.style.zIndex="-2";
    }
    else{
        y.style.zIndex="1";
    }
}