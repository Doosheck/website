var ageDifMs = Date.now() - new Date("1999/05/10 00:00:00").getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
document.getElementById("age").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970) + "-year-old";