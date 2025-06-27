const header = document.querySelector("header");
const toggle = document.getElementById("toggle");
const navLinks = document.querySelectorAll(".nav-links a");


toggle.addEventListener("click", () => {
  header.classList.toggle("active");


  toggle.innerHTML = header.classList.contains("active") ? "&times;" : "&equiv;";
});


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
    toggle.innerHTML = "&equiv;"; 
  });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.querySelector('input[type="tel"]').value;
    const message = "Hello, I'm interested in contacting you.";
    const whatsappUrl = `https://wa.me/07032355643?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
