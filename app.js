const display = document.getElementById('countresult');
const btn = document.querySelectorAll('.btn');
let count = 0;



btn.forEach(function(item){
    item.addEventListener("click", function(a){
        const style = a.currentTarget.classList;
        if(style.contains('decrease')){
            count --;
        }
        else if(style.contains('increase')){
            count ++;
        }
        else{
            count = 0;
        }
        display.textContent = count;
        if(count > 0){
            display.style.color = "green";
        }
        else if(count < 0){
            display.style.color = "red";
        }
        else{
            display.style.color = "#222";
        }
    });
});









// const display = document.getElementById('countresult');
// const dec = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');

// let result = 0;

// dec.addEventListener("click", function(){
//     result -= 1;
//     display.textContent = result;
//     color(result);
// })
// reset.addEventListener("click", function(){
//     result = 0;
//     display.textContent = result;
//     color(result);
    
// })
// increase.addEventListener("click", function(){
//     result += 1;
//     display.textContent = result;
//     color(result);
   
// })
// function color(result){
//     if(result < 0){
//         display.style.color = "red";
//     }
//     else if(result > 0){
//         display.style.color = "green";
//     }
//     else{
//         display.style.color = "black";
//     }
// }
