// get all input by class name    
const inputs = document.querySelectorAll('input.input-box');
button = document.getElementById('button');
// add event listener to button
console.log(inputs,button);
inputs.forEach((input,index1) => {
    input.addEventListener("keyup", (e) => {
        const cr =  input,
         next =  input.nextElementSibling,
         prev =  input.previousElementSibling;
         if(cr.value.length > 1){
            cr.value = "";
             return;
         }
         if(next && next.hasAttribute('disabled') && cr.value !== ""){
            next.removeAttribute('disabled');
            next.focus();
         }
         if(e.key=== "Backspace"){
            inputs.forEach((input,index2) => {
                if(index1 <= index2 && prev){
                    input.setAttribute('disable',true);
                    cr.value = "";
                    prev.focus();
                }
            });
         }
         if(!inputs[3].disabled && inputs[3].value !== ""){
            button.classList.add('active');
            return;
         }
         button.classList.remove('active');
    })
});

button.addEventListener('load' , () => inputs[0].focus());

