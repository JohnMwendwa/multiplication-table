
const table = document.querySelector('.table');
const form = document.querySelector('form').addEventListener('submit',printTable)
const inputs = document.querySelectorAll('input')

//Print a default table when the page loads
window.addEventListener('load',printTable)

function printTable(e){

    //Ensure numbers that are submitted are whole numbers 
let number= parseInt(document.querySelector('#numStart').value || 5) ;

range= parseInt(document.querySelector('#numEnd').value || 5);

    table.innerHTML = `
    <tr>
    <th>Multiplication for ${number}</th><th>Results</th>
    </tr>
    `
    for(let i = 1; i<= range;i++){  
        const result = i * number;
        table.innerHTML += `
        <tr>    
        <td> ${number} x ${i}</td>
        <td>${result}</td>
        </tr>
    
        `
    }
// Prevent page from reloading after submitting values
e.preventDefault();

//Clear inputs after submitting the form
inputs.forEach(input=>input.value = '')
}

