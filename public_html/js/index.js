// Get the container element
var navigation = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
var navItems = navigation.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
