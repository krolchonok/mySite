const birthDate = new Date(2003, 7 - 1, 26);
const today = new Date();
const diffInTime = today - birthDate;
const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
document.getElementById("years").innerHTML = diffInDays;



function openUrl(url) {
    open(url);
}
