// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

// Funções
// Criar tabuada
const createTable = (number, multiplicatorNumber) => {

    // Limpar HTML
    multiplicationTable.innerHTML = "";

    // Loop para percorrer tabuada
    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        // Template string
        const template = ` <div class= "row">
                   <div class="operation"> ${number} x ${i} = </div>
                   <div class="result"> ${result} </div>  
            </div>`;

        //  Transferir string para o HTML
        const parser = new DOMParser(); 

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    // Exibir numero da tabuada
    multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const multiplicationNumber = +numberInput.value;

   const multiplicatorNumber = +multiplicationInput.value;

    //  Validação : Se nao digitar valores retorne
   if (!multiplicationNumber || !multiplicatorNumber) return;

   createTable(multiplicationNumber, multiplicatorNumber);
});