/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var getName = null;

    while (getName === null || !isNaN(getName)){
        getName = prompt("What is your name ? ");

        if (getName === null || !isNaN(getName)){
            alert("Invalid name, please try again");
        }else{
            alert("Hello " +  getName);
        }
    }

})();
