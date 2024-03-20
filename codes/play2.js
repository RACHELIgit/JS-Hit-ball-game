let restart=document.getElementById("restart")
let country=0;
// שיעורי בית 





// ----------------
restart.addEventListener("click",f_c)
let color = ["#ee92f4", "#91eaf5", "#1c34ad", "#7feac3", "#d6469e", "#7b2bf8"]
let arr=new Array();
//let arr = new Array(4) // ההגרלה של המחשב- שבה תלו הנצחון 
let arr3 = new Array(4) // יעזור לי להשוות אחרי כל 4 את המצב 
let index1 = 0;// האינדקס שממלא את הלחיצה בצבעים הנלחצים
let countmat = 0;
let x = 0;// לדעת את מספר השורה
//let count = 0 // ישמש להצבת ההצבע שבו לחצו במקומו הנכון 
let arrchek = new Array(4)// מערך עזר להשוואת הבול 
let secbp = document.getElementById("bp")// SEC לבול או פגיעה 
let mySec = document.getElementById("seccolor")// SEC הצבעים האופציונלים 
let mySecgusses = document.getElementById("mygusses")// SEC של מערך חיפוש ראשי 
let sectries = document.getElementById("mytries");// SEC של ההיסטוריה 
let countclik=0
// arr-------------------------------------------
for (let i = 0; i < 4;) {
  let y = Math.floor(Math.random() * color.length)// הגרלה של מיקום 
  let guss = color[y] // הצבע שהוגרל
  if (arr.indexOf(guss) == -1) {
    arr[i] = guss
    i++
  }
}
//-------------------------------------------------

// יוצר את מערך הכפתורים של ששת הצבעים האופצוינלים 
// let mySec = document.getElementById("seccolor")
for (let index = 0; index < 6; index++) {
  let btn = document.createElement("input")
  btn.setAttribute("type", "button")
  btn.setAttribute("class", "colors")
  btn.setAttribute("value", " ")
  btn.setAttribute("data-index", index)
  btn.style.backgroundColor = color[index]
  mySec.appendChild(btn)
  if (index == 2) {
    mySec.appendChild(document.createElement("br"))
  }
  btn.addEventListener("click", f_clickbtn)
}



// מערך ראשי של ניחושים 
let mygusses = new Array(4)
// let mySecgusses = document.getElementById("mygusses")
for (let index = 0; index < mygusses.length; index++) {
  let btnguss = document.createElement("input")
  btnguss.setAttribute("type", "button")
  btnguss.setAttribute("class", "colors1")
  btnguss.setAttribute("value", " ")
  btnguss.setAttribute("data-i", index)
  btnguss.setAttribute("id", "g_" + index)


  mySecgusses.appendChild(btnguss)
}

function f_clickbtn() {

countclik++
//--------------------------------------
if(countclik==36){
  alert("שים לב: נסיון אחרון")
}


if(countclik==40){
  
  window.location="gameover.html"
}
console.log(countclik)
  //debugger
  // יעזור לי להשוות אחרי כל 4 את המצב 
  let r = event.target.getAttribute("data-index")
  let a = document.querySelectorAll(".colors1");
  if(arrchek.indexOf(color[r])==-1){// בדיקה שלא מכניס כפולים
  a[index1].style.background = color[r];
  arrchek[index1] = color[r];
  console.log(arrchek[index1])

  // console.log(arr3)
  //arr3[index1]=color[r];
  // console.log(arr3)
  index1++;
  


  }
}
// מערך הנסיוןנות
// let sectries = document.getElementById("mytries");
let arrtries = new Array(10)
for (let i = 0; i < 10; i++) {
  let mygusses = new Array(4)
  for (let j = 0; j < 4; j++) {
    let gussbtn = document.createElement("input")
    gussbtn.setAttribute("type", "button")
    gussbtn.setAttribute("class", "colors2")
    gussbtn.setAttribute("id", i + "_" + j)
    sectries.appendChild(gussbtn)
  }

  sectries.appendChild(document.createElement("br"))
  sectries.appendChild(document.createElement("br"))
 // sectries.appendChild(document.createElement("br"))



}
//------------------------------------------------------

let countinue = document.getElementById("continue")
countinue.addEventListener("click", f_clic)




function f_clic() {
  
  country++
  // מציב בהסטוירת הנסיונות את הנסיון הנוכחי ושולח לבדיקת בול
  if (index1 != 4) {
    alert("לא סיימת ארבע ניחושים")
  }
  else {
    let a = document.querySelectorAll(".colors1");
    for (let i = 0; i < 4; i++) {
      document.getElementById(x + "_" + i).style.backgroundColor = arrchek[i]
      a[i].style.background = "";
      
    }
    
    index1 = 0;
    i = 0;
    x++;
    f_search();
  }
 
}







// בודק בול ופגיעה 
function f_search() {


  secbp.appendChild(document.createElement("br"))
  let bool = 0;
  let pgiha = 0;

  for (let i = 0; i < 4; i++) {
    if (arrchek[i] == arr[i] && arrchek[i]!=arrchek[i]-1 ) {
      bool++;
      console.log(bool)
    }

    console.log(bool)
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 4; j++) {
      if (arrchek[i] == arr[j] )
        pgiha++;
      console.log(pgiha)

    }
  }
  pgiha = pgiha - bool;
  //document.getElementById("bp").innerHTML = "יש לך :"+bool +"בולים";

// ניצחון 
  if (bool == 4 && pgiha == 0 && country<=3 ) {
    localStorage.setItem(custname,country)
    sessionStorage.setItem("country",country)
    f_by1();
     
  }
  if (bool == 4 && pgiha == 0 && country>3 ) {

    f_by();
   }
  if(countclik==36){
    alert("שים לב: ניסיון אחרון")
  }
  if(countclik==40){
  
    window.location="gameover.html"
  }
  // הצבת בול ופגיעה
  if (bool > 0 || pgiha > 0) {

    for (let n = 0; n < bool; n++) {

      let btnbp = document.createElement("input")
      btnbp.setAttribute("type", "button")
      btnbp.setAttribute("class", "btnbp")
      btnbp.setAttribute("id", bool + "_" + i)
      secbp.appendChild(btnbp)
      btnbp.style.backgroundColor = "white"

    }
    for (let i = 0; i < pgiha; i++) {

      let btnbp = document.createElement("input")
      btnbp.setAttribute("type", "button")
      btnbp.setAttribute("class", "btnbp")
      btnbp.setAttribute("id", pgiha + "_" + i)
      secbp.appendChild(btnbp)
      btnbp.style.backgroundColor = "#e1005c"
      btnbp.style.borderColor = "white"

    }

  }
  secbp.appendChild(document.createElement("br"))
  secbp.appendChild(document.createElement("br"))

  bool = 0;
  pgiha = 0;
arrchek=new Array(4)
}

// כפתור איפוס 

function f_c(){

  window.location="play2.html"
}

// נצחון
function f_by(){
  
  window.location="by.html"
}
function f_by1(){
localStorage.setItem(custname,country)
  window.location="sihim.html"
  
}
// if(country==1){
//   first.value=" בניסיון ה " +country+" "+"  שבר/ה  שיא " +custname
//  }
//  if(country==2){
//    second.value=" בניסיון ה " +country+" "+"  שבר/ה  שיא " +custname
//   }
//   if(country==3){
//    three.value=" בניסיון ה " +country+" " +custname
//   }
//-------------------------------------------------------------------------




// let turn=document.getElementById("turn")
// turn.addEventListener("click",tt)

// function tt(){
//   // window.location="play2.html"
//   alert("fghn")
// }




function f_gameover(){
  window.location="gameover.html"
}
// ................שיעורי בית .........................


