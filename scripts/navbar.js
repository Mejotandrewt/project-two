var toggleButton = document.querySelector(".toggle");
var links = document.querySelector(".links");

function toggle(){
    links.classList.toggle("active")
}

toggleButton.addEventListener("click", toggle);