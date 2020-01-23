document.getElementById("demo").onclick = myFunction;
function myFunction(){
    const x = document.getElementById("demo1");
    if(x.style.display === "block"){
        x.style.display = "none";
     
        document.getElementById("demo").style.color = "wheat";
        document.getElementById("demo").style.backgroundColor = "blueviolet";
        document.getElementById("demo").style.padding = "7px";
    }else{
        x.style.display = "block";
           document.getElementById("demo").style.color = "white";
        document.getElementById("demo").style.backgroundColor = "red";
        document.getElementById("demo").style.padding = "20px";
        x.scrollIntoView();
    }
}
