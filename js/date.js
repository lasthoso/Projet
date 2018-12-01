var today = new Date();

var year = document.getElementById('year');
year.innerHTML = today.getFullYear();

var month = document.getElementById('month');
var m = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
month.innerHTML = m[today.getMonth()] + " ";

var day = document.getElementById('day');
day.innerHTML = today.getDate() + " ";