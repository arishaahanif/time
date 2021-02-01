var dest = new Date("Dec 31,2021 12:00:00").getTime()
var x = setInterval(function(){

var now = new Date().getTime();
var diff = dest - now;
var days = Math.floor (diff/(1000*60*60*24))
console.log(days)
var hours = Math.floor (diff%(1000*60*60*24)/(1000*60*60))
console.log(hours)

var mins = Math.floor (diff%(1000*60*60)/(1000*60))
console.log(mins)

var sec = Math.floor (diff%(1000*60)/(1000))
console.log(sec)
document.getElementById('demo').innerHTML = days+"d, "+hours+"hrs:, "+mins+"m: "+sec+"s"
},1000)
