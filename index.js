function updateClock() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
  document.getElementsByClassName("phone-time")[0].innerHTML = time;
  document.getElementsByClassName("phone-time")[1].innerHTML = time;
  setTimeout(updateClock, 1000);
}
updateClock(); 

function phone_unlock(){
  document.getElementsByClassName("lock-screen")[0].style.display="none";
  document.getElementsByClassName("home-screen")[0].style.display="block";
  document.getElementsByClassName("phone-lower-slot")[0].style.animation="none";
}