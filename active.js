/*jslint plusplus:true*/

//Watch the clock working
var div = document.getElementById("date");

var date = new Date();

div.innerHTML = date.toLocaleDateString();