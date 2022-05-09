/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const btnRed = document.getElementById('red');

    btnRed.addEventListener('click', function onClick () {

        document.body.style.backgroundColor = 'red'

    })

    const btnGreen = document.getElementById('green');

    btnGreen.addEventListener('click', function onClick () {

        document.body.style.backgroundColor = 'green';
    })

    const btnBlue = document.getElementById('blue');

    btnBlue.addEventListener('click', function onClick () {

        document.body.style.backgroundColor = 'blue';
    })

    const btnYellow = document.getElementById('yellow');

    btnYellow.addEventListener('click', function onClick () {

        document.body.style.backgroundColor = 'yellow';
    })


})();

