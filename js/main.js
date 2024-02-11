import { Modal } from './modal.js';
import {alertError} from './alert-error.js';
import {calculateIMC, notNumber} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (e) => {
    e.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;
       
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
    
    if (weightOrHeightIsNotANumber) {
        alertError.open();
        return;        
    }
    
    alertError.close();   
    
    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message;    
    Modal.open();
}

form.oninput = () => {
    alertError.close();
}

