document.getElementById("demo2").onclick = myFunction;
function myFunction(){
    const x = document.getElementById("demo3");
    if(x.style.display === "block"){
        x.style.display = "none";
        document.getElementById("demo2").style.color = "wheat";
        document.getElementById("demo2").style.backgroundColor = "blueviolet";
        document.getElementById("demo2").style.padding = "7px";
    }else{
        x.style.display = "block";
           document.getElementById("demo2").style.color = "white";
        document.getElementById("demo2").style.backgroundColor = "red";
        document.getElementById("demo2").style.padding = "20px";
        x.scrollIntoView();
    }
}