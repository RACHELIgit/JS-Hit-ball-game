let bool=document.getElementById("bool")
bool.addEventListener("click",f_clic)
let name=document.getElementById("t_name")

// מעבר למשחק הבול פגיעה 
function f_clic(){
    if(name.value.length!=0)//t_name.value=="")
    {
         window.location="beforbool.html"
         sessionStorage.setItem("name",t_name.value)
    }
   
    else
    {
      alert("נא לכתוב שם ") 
      //  window.location="page1.html"
    }
   
}
let btngames5=document.getElementById("btngames5")
btngames5.addEventListener("click",mm)


function mm(){
    if(name.value.length!=0)//t_name.value=="")
    {
         alert("המשחק לא נטען בהצלחה")
         sessionStorage.setItem("name",t_name.value)
    }
   
    else
    {
      alert("נא לכתוב שם ") 
      //  window.location="page1.html"
    }
  


}




