var dropdown = document.getElementsByClassName("dropdown-btn");
var i;


for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        var sidebarHover = document.getElementsByClassName("navbar")
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        while (sidebarHover.getElementsByClassName().) {

        }
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}