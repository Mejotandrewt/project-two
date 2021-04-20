var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

function toggle() {
  links.classList.toggle("active");
}

toggleButton.addEventListener("click", toggle);

/** Here is the link where I got the core code for these accordion sections 
 * https://www.w3schools.com/howto/howto_js_accordion.asp. This javascript is
 * basicaly making a function for the various accordion buttons, and is allowing 
 * the according buttons to work. When the accordion is clicked it is actived
 * this actavation triggers for the pannel text to be active and then drop down 
 * and display. The for part is making the different buttons into arrays with each
 * one to have an increased value to i. This allows for many different unquie arrays/
 * accordian buttons which all have the button affect.
\
 **/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
