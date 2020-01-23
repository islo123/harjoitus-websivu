document.getElementById("demo4").onclick = myFunction;
function myFunction(){
    const x = document.getElementById("demo5");
    if(x.style.display === "block"){
        x.style.display = "none";
     
        document.getElementById("demo4").style.color = "wheat";
        document.getElementById("demo4").style.backgroundColor = "blueviolet";
        document.getElementById("demo4").style.padding = "7px";
    }else{
        x.style.display = "block";
           document.getElementById("demo4").style.color = "white";
        document.getElementById("demo4").style.backgroundColor = "red";
        document.getElementById("demo4").style.padding = "20px";
        x.scrollIntoView();
    }
}