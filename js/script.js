   class Base2Calculator {
       static add(a, b) {
           return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
       }

       static subtract(a, b) {
           return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
       }

       static multiply(a, b) {
           return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
       }

       static divide(a, b) {
           return (parseInt(a, 2) / parseInt(b, 2)).toString(2);
       }
   }

   // Get DOM elements
   const input1 = document.getElementById('input1');
   const input2 = document.getElementById('input2');
   const operation = document.getElementById('operation');
   const calculateButton = document.getElementById('calculate');
   const resultDiv = document.getElementById('result');

   // Add event listener to the calculate button
   calculateButton.addEventListener('click', () => {
       console.log("Button clicked");
       const a = input1.value;
       const b = input2.value;
       console.log(`Inputs: ${a}, ${b}`);
       let result;

       switch(operation.value) {
           case 'add':
               result = Base2Calculator.add(a, b);
               break;
           case 'subtract':
               result = Base2Calculator.subtract(a, b);
               break;
           case 'multiply':
               result = Base2Calculator.multiply(a, b);
               break;
           case 'divide':
               result = Base2Calculator.divide(a, b);
               break;
       }

       console.log(`Calculated result: ${result}`);
       resultDiv.textContent = `Result: ${result}`;
       console.log("Result should be displayed now");
   });