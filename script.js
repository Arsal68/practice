let btn=document.querySelectorAll(".btn");
let rst=document.querySelector(".rbtn");
let wincnt=document.querySelector(".wincnt");
let xcount=0;
let ocount=0;
let turnx=true;
let winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
btn.forEach((btn) => {
  btn.addEventListener("click",()=>{
    console.log("button was clicked");
   if(turnx){
     btn.innerText="X";
     turnx=false;
   }
    else{
    btn.innerText="O";
    turnx=true;}
    btn.disabled=true;
    checkwin();
  });});
const checkwin=()=>{
 
  for(let pattern of winning)
    {
    let b1=btn[pattern[0]].innerText;
    let b2=btn[pattern[1]].innerText;
    let b3=btn[pattern[2]].innerText;
      if (rst.innerText=="X WON" || rst.innerText=="O WON")
      {
        btn.forEach.disabled=true;
      }
  if ((b1 && b2 && b3)!="")
      {if(b1==b2 &&  b2==b3 && b1==b3)
        
    {
      if(btn[pattern[0]].innerText=="X"){
        rst.innerText="X WON";
        xcount++;
        updatewin();
        dissablebtn();
        break;
      }
      else{
        rst.innerText="O WON";
         ocount++;
        updatewin();
        dissablebtn();
        break;
      }
      
    }
      
         }
      }
}        
const dissablebtn=()=>{
  for(let dbtn of btn){
    dbtn.disabled=true;
  }
}
rst.addEventListener( "click",()=>{
  btn.forEach((btn)=>{
    btn.innerText="";
    btn.disabled=false;
    rst.innerText="Reset game";
    rst.style.color="black";
    });
    console.log("1509");
})
const updatewin=()=>{
  let win=`Win Counter: \nPlayer1 (X): ${xcount} \n Player2 (O): ${ocount}`;
wincnt.innerText=win;}
updatewin();