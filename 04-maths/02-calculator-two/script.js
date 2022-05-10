/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


 const performOperation = function (operation) {

    let numberONe = document.getElementById('op-one').value;console.log(numberONe)
    let numberTwo = document.getElementById('op-two').value;console.log(numberTwo)

        switch (operation) {
            case 'addition':
                let sum = parseInt(numberONe) + parseInt(numberTwo);
                alert("Result is = " + sum);
                break;
            case 'subtraction':
                let rest = parseInt(numberONe) - parseInt(numberTwo);
                alert("Result is = " + rest);
                break;
            case 'multiplication':
                let mult = parseInt(numberONe) * parseInt(numberTwo);
                alert("Result is = " + mult);
                break;
            case 'division':
                let div = parseInt(numberONe) / parseInt(numberTwo);
                alert("Result is = " + div);
                break;

        }
 };
Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        performOperation($btn.id);
    });
});
