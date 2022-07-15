

let count=0;
let inc = document.getElementById("increase");
let dec= document.getElementById("decrease");
let res= document.getElementById("reset");
let txt = document.getElementById("display")
inc.onclick=function(){
count++;
  txt.innerHTML=count;
  if(count>0){
  document.body.style.background="green";
}

}
dec.onclick= function(){
  //alert(count);
  count--;
  txt.innerHTML=count;
  if(count<0){
  document.body.style.background="pink";
}
}
res.onclick= function(){
//alert(count);
count=0;
txt.innerHTML=count;
if (count==0){
document.body.style.background="purple";
}
}
