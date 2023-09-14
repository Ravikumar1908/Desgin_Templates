function dropdown(){
    var a=document.getElementById("dropdown");
    if(a.style.display==="none")
    {
        a.style.display="block";
    }
        else{
            a.style.display="none";
        }
    }
    
    function booked()
    {
    var b=document.getElementById("booknow");
    if(b.innerText==="BOOK NOW")
    {
        b.innerText="BOOKED";
        b.style.fontWeight="600";
        b.style.border="1px solid black";
        b.style.backgroundColor="green";
        b.style.Color="white";
    }
   
    }
function bodychange(){
    var c=document.getElementById("body");
    if(c.style.backgroundColor==="gold")
    {
        c.style.backgroundColor="red";
    }
}