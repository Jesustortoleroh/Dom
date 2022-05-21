
const visits = document.querySelector(".visitor");

let MSPERDAY = 86400000
let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem('dateVisited');
let daysBwtnVisits, difference;
 
if (numVisits !== 0) {
    localStorage.setItem("dateVisited", today);
    difference = today - lastVisit
    daysBwtnVisits = Math.round(difference / MSPERDAY)
}else {
    localStorage.setItem('visits', 1)
    localStorage.setItem("dateVisited", today);
    daysBwtnVisits = "Welcome, this is your first visit!"

}

numVisits++

localStorage.setItem('visits', numVisits)

visits.textContent = daysBwtnVisits