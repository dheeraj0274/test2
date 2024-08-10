 const body = document.querySelector("body");
 const sidebar = document.querySelector(".sidebar");
 const toggle = document.querySelector(".toggle");
 const searchBtn = document.querySelector(".search-box");
 const modeSwitch = document.querySelector(".toggle-switch");
 const modeText = document.querySelector(".mode-text");

 toggle.addEventListener("click", () => {
   sidebar.classList.toggle("close");
 });
 searchBtn.addEventListener("click", () => {
   sidebar.classList.remove("close");
 });

 modeSwitch.addEventListener("click", () => {
   body.classList.toggle("dark");
   if (body.classList.contains("dark")) {
     modeText.innerText = "Dark Mode";
   } else {
     modeText.innerText = "Light Mode";
   }
 });

 //Flash news section //

 const items = document.querySelectorAll(".headlines li");
 let variable = 0;

 function transition(e) {
    variable = (variable + 1) % items.length;
    items[variable].classList.add("active");
    e.target.removeEventListener("transitionend", transition);
}

 setInterval(() => {
   if (items.length > 0) {
     const prev = items[variable];
     if (prev) {
       prev.classList.remove("active");
       prev.addEventListener("transitionend", transition);
     }
     
   }
 }, 7000);

//  function hideSpan(){
//  if(sidebar.classList.contains('close')){
//   var span =document.getElementById('reText');
//   span.parentNode.removeChild(span);  
//  }
//  }
//  hideSpan();