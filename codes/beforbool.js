let next=document.getElementById("nexto")
next.addEventListener("click",f_clic)
// שיעורי בית 
let hello=document.getElementById("hello")
let custname=sessionStorage.getItem("name")

hello.value="שלום " +  custname
function f_clic(){
    window.location="play2.html"
}