function updateClock() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
  document.getElementsByClassName("phone-time")[0].innerHTML = time;
  document.getElementsByClassName("phone-time")[1].innerHTML = time;
  setTimeout(updateClock, 1000);
}
updateClock(); 

function phone_unlock(){
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementsByClassName("lock-screen")[0].style.display="none";
  document.getElementsByClassName("home-screen")[0].style.display="block";
  document.getElementsByClassName("phone-lower-slot")[0].style.animation="none";
}

function openInfo() {
  document.getElementsByClassName("info-container")[0].style.display = "block";
}
function closeInfo() {
  document.getElementsByClassName("info-container")[0].style.display = "none";
}

let shut= document.querySelectorAll(".info-shutter");
function closeOthers(){
  for (i = 0; i < shut.length; i++) {
 shut[i].style.display='none';
  }
}

 function openAbout(){
   closeOthers();
   openInfo();
   document.getElementById("about-container").style.display="block";
 }
 function openEducation(){
   closeOthers();
   openInfo();
   document.getElementById("education-container").style.display="block";
 }
 function openSkills(){
   closeOthers();
   openInfo();
   document.getElementById("skills-container").style.display="block";
 }
 function openExperiences(){
   closeOthers();
   openInfo();
   document.getElementById("experiences-container").style.display="block";
 }
 function openInterests(){
   closeOthers();
   openInfo();
   document.getElementById("interests-container").style.display="block";
 }
 function openContact(){
   closeOthers();
   openInfo();
   document.getElementById("contact-container").style.display="block";
 }

 window.onload = function(){
  alert('This website is currently under construction! Some features will become functional in the coming days. Thanks for your cooperation😊');
 }
