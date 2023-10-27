let first=document.getElementById("first")
let second=document.getElementById("second")
let three=document.getElementById("three")

let numtry=sessionStorage.getItem("country")
let name=localStorage.getItem("key")
let custname=sessionStorage.getItem("name")

// localStorage.setItem("winner1","חוה")
// localStorage.setItem("winner2","ללי")
//  localStorage.setItem("winner3","מיכל")
first.value=localStorage.getItem("winner1")
second.value=localStorage.getItem("winner2")
three.value=localStorage.getItem("winner3")
// localStorage.setItem(1,"name")
// localStorage.setItem(2,"name")
// localStorage.setItem(3,"name")
// first.value=localStorage.getItem(1)
// second.value=localStorage.getItem(2)
// three.value=localStorage.getItem(3)

if(numtry==1){
    // first.value= " שחקן :"+ name+"  "+numtry+"נסיונות"
 localStorage.setItem("winner1",custname)
}
if(numtry==2){
    localStorage.setItem("winner2",custname)
}
if(numtry==3){
    localStorage.setItem("winner3",custname)
}