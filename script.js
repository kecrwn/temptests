document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you for your message! I'll get back to you soon.";
    document.getElementById('contactForm').reset();
});