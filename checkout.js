const plus = document.getElementById('increment');
const decr = document.getElementById('decr');
const input = document.getElementById("ourinput");
const pricevalue = document.querySelector(".price");


const increment = document.getElementById('plus2');
const input2 = document.getElementById('input2');
const decrement =document.getElementById('mince2');
const pricevalue2 = document.getElementById('pricevalue2')

plus.addEventListener('click',function(){
    input.value++;
    pricevalue.textContent = input.value * 17.51 +"$";
})
decr.addEventListener('click',function(){
    if(input.value > 1){
        input.value--;
    }
   
    pricevalue.textContent = input.value * 17.51 +"$";
})

increment.addEventListener('click', function(){
    input2.value++;
    pricevalue2.textContent = input2 * 24,65 + "$";
})
decrement.addEventListener('click', function(){
    if(input2.value > 1)
    input2.value--;
    pricevalue2.textContent = input2 * 24,65 + "$";
})
