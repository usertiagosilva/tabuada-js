// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicatorNumber) => {

    // Limpar resultados
    multiplicationTable.innerHTML = "";
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const multiplicationNumber = +numberInput.value;

   const multiplicatorNumber = +multiplicationInput.value;

    //  Se nao digitar valores retorne
   if (!multiplicationNumber || !multiplicatorNumber) return;

   createTable(multiplicationNumber, multiplicatorNumber);
});