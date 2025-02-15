//your JS code here. If required.
let timing = document.getElementById("timer");
let date = new Date();
let formattedDate = date.toLocaleString("en-US", { hour12: true });
timing.innerHTML = formattedDate;