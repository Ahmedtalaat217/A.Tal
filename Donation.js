// Add JavaScript interactions here (e.g., form submission handling)
const donationForm = document.getElementById('donationForm');

donationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount > 0) {
        alert(`Thank you for your donation of $${amount.toFixed(2)}!`);
        // Add logic here to submit donation (e.g., via API)
    } else {
        alert('Please enter a valid donation amount.');
    }
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., send message via email or API)
    alert('Thank you for your message! We will get back to you soon.');
});
