document.getElementById("demo6").onclick = myFunction;
function myFunction(){
    const x = document.getElementById("demo7");
    if(x.style.display === "block"){
        x.style.display = "none";
     
        document.getElementById("demo6").style.color = "wheat";
        document.getElementById("demo6").style.backgroundColor = "blueviolet";
        document.getElementById("demo6").style.padding = "7px";
    }else{
        x.style.display = "block";
           document.getElementById("demo6").style.color = "white";
        document.getElementById("demo6").style.backgroundColor = "red";
        document.getElementById("demo6").style.padding = "20px";
        x.scrollIntoView();
    }
}