document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    this.reset();
});

function clearForm() {
    document.getElementById('contactForm').reset();
}
