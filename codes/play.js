    let color=["#ce315a","#ff92ae","#ffe0a3","#f8c37d","#e8e2d9","#86d4d9"];
    let arr=new Array(4) // ההגרלה של המחשב- שבה תלו הנצחון 
    let arr3=new Array(4) // יעזור לי להשוות אחרי כל 4 את המצב 
    let index1=0;
    let count=0 // ישמש להצבת ההצבע שבו לחצו במקומו הנכון 


debugger
// הגרלה של 4 צבעים שאותם המשחק צריך לנחש 
for(let i=0;i<4;){
  let y=Math.floor(Math.random()*color.length)// הגרלה של מיקום 
  let guss=color[y] // הצבע שהוגרל
  if(arr.indexOf(guss)==-1){
   arr[i]=guss
     i++ }  
  }
  

// יוצר את מערך הכפתורים של ששת הצבעים האופצוינלים 
     let mySec=document.getElementById("seccolor")
 for( let index=0;index<6;index++){
  let btn=document.createElement("input")
    btn.setAttribute("type","button")
    btn.setAttribute("class","colors")
    btn.setAttribute("value"," ")
    btn.setAttribute("data-index",index)
    btn.style.backgroundColor=color[index]
    seccolors.appendChild(btn)
    btn.addEventListener("click",f_click)
  }
 

//יוצר מערך של 10 מערכים של 4 של כפתורים לניחושים
let arr0=new Array(10)
for(let n=0;n<10;n++){
let mygusses=new Array(4)
let mySecgusses = document.getElementById("mygusses")
mySecgusses.appendChild(document.createElement("br"))// להוריד שורה 
for (let index = 0; index < mygusses.length; index++) {
 let btnguss = document.createElement("input")
  btnguss.setAttribute("type", "button")
  btnguss.setAttribute("class", "colors1")
  btnguss.setAttribute("value", " ")
  btnguss.setAttribute("id","g_"+index)
  
  mySecgusses.appendChild(btnguss)
}
mySecgusses.appendChild(document.createElement("br"))
mySecgusses.appendChild(document.createElement("br"))
}

//---------------------------------
// הצבה לצורך נוחות 
for(let i=0;i<4;){

  document.getElementsByName(9+"_"+i).style.backgroundColor=arr[i]
  }
  //-----------------




// מציב בניחושים את הלחיצות 
function f_click(){
  debugger
   // יעזור לי להשוות אחרי כל 4 את המצב 
    let r=event.target.getAttribute("data-index") // על מה שלחצתי 
    let a=document.querySelectorAll(".colors1");// על מה שרוצה להכניס 
    a[index1].style.background =color[r];
    // console.log(arr3)
    //arr3[index1]=color[r];
    // console.log(arr3)
     index1++;
      f_search();

   //    if(index1==4)
 
  
   }

// function f_search(){
 
  
//   let bool=0;
//   let pgiha=0;

//   for (let i = 0; i < 4; i++) {
//    		if(arrchek[i]==arr[i]) {
// bool++;
//        }

//    console.log(bool)
// 			}
//       for (let i = 0; i <4; i++) {
// 		for (let j = 0; j <= 4; j++) {
// 			if(arrchek[i]==arr[j] )
// 				pgiha++;
//         console.log(pgiha)
			
// 		}
// 			}
//       pgiha=pgiha-bool;



// 	}
 	






    





















