const inputData = document.querySelector("#validation-input");
const borderInputValid = document.querySelector("#validation-input.valid");


const handleMakeInput = (event) => {
    let inputLength = event.currentTarget.value.length;
    if (inputLength === Number(inputData.getAttribute('data-length'))) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
            }
            else {
                event.target.classList.remove('valid');
                event.target.classList.add('invalid');
            }
} 


inputData.addEventListener('blur', handleMakeInput );
