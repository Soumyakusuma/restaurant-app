//selecting=document.querySelectorAll('.veg');


let i=1;
let answer=document.querySelectorAll('button');
let total=0;
let arr=Array.from(answer);
arr.forEach(button=>{
  //console.log(button)
  button.addEventListener('click',()=>{
    //console.log(button)
    //let btn = document.getElementsById("adding");
    let val = button.value;
    total=total+parseInt(val);
   //console.log(val);
   console.log(total);
  })
})
console.log(total)


function generate(){
    alert("the total bill is "+total);
}