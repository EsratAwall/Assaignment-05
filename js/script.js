// sticky navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  var tobNavColor = document.getElementById("navbar-color");
  if (window.scrollY > 100) {
    navbar.style.backdropFilter = "blur(10px)";
    tobNavColor.style.backdropFilter = "blur(10px)";
    tobNavColor.style.backgroundColor = "transparent";
  } else {
    navbar.style.backdropFilter = "blur(0px)";
    tobNavColor.style.backgroundColor = "#f4f4f5";
    tobNavColor.style.backdropFilter = "blur(0px)";
  }
});

// link pages
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
