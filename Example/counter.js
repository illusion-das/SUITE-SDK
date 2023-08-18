const count = document.getElementById("count");

function count_up()    { count.innerHTML = parseInt(count.innerHTML) + 1; }
function count_reset() { count.innerHTML = "0"; }