// Mobile navigatio toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

//  button notification for order
const orderButtons = document.querySelectorAll('.order-btn');
const notification = document.getElementById('notification');

orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Shows notification
    notification.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  });
});


// Contact form validation 
const contactForm = document.getElementById('contact-form');
const contactNotification = document.getElementById('contact-notification');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      showNotification(contactNotification, "Please fill in all required fields.", true);
      return;
    }

    if (!validateEmail(email)) {
      showNotification(contactNotification, "Please enter a valid email address.", true);
      return;
    }

    
    showNotification(contactNotification, "Thank you! Your message has been sent.");

    // Clear form
    contactForm.reset();
  });
}

// Email validation 
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// notification helper 
function showNotification(element, message, isError = false) {
  element.textContent = message;
  element.style.backgroundColor = isError ? '#e74c3c' : '#4caf50'; 
  element.classList.add('show');

  setTimeout(() => {
    element.classList.remove('show');
  }, 4000);
}
