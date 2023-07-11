
function calculate_the_tip(){
let amount_to_pay=document.getElementById('amount').value;
console.log(amount_to_pay);
let service=document.querySelector("#type");
let peoples=document.querySelector("#people")
console.log(service)
let result=(amount*service)/peoples;
console.log(result);
}
