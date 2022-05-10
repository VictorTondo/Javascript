/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () =>
    {
        let d1 = document.getElementById('dob-day').value;
        let m1 = document.getElementById('dob-month').value;
        let y1 = document.getElementById('dob-year').value;

        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth() +1;
        let y2 = date.getFullYear();

        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(d1 > d2){
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
        if(m1 > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }

        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;


        window.alert("your age is : " + y + " years and " + m + " months and " + d + " days!");
    })

})();

