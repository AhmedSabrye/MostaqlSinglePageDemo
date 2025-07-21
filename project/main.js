// Validation and send logic for contact form and buttons

document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const form = nameInput.closest("form");

  // WhatsApp and Email buttons (find by text or class)
  const whatsappBtn = Array.from(document.querySelectorAll("a")).find((a) =>
    a.textContent.includes("WhatsApp")
  );
  const emailBtn = Array.from(document.querySelectorAll("a")).find(
    (a) => a.textContent.includes("Email") && a.href.startsWith("mailto:")
  );

  // Helper: Validate email format
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Helper: Validate name (at least 2 chars, letters/spaces)
  function isValidName(name) {
    return /^[A-Za-z\u0600-\u06FF\s]{2,}$/.test(name.trim());
  }

  // Helper: Validate message (not empty, min 5 chars)
  function isValidMessage(msg) {
    return msg.trim().length >= 5;
  }

  // Validate all fields
  function validateInputs() {
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    if (!isValidName(name)) {
      alert("Please enter a valid name (at least 2 letters).");
      nameInput.focus();
      return false;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }
    if (!isValidMessage(message)) {
      alert("Please enter a message (at least 5 characters).");
      messageInput.focus();
      return false;
    }
    return true;
  }

  // Form submit: prevent default, validate
  form.addEventListener("submit", function (e) {
    if (!validateInputs()) {
      e.preventDefault();
    }
  });

  // WhatsApp button click
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
      if (!validateInputs()) {
        e.preventDefault();
        return;
      }
      // WhatsApp API: https://wa.me/<number>?text=<encoded message>
      const number = "15551234567"; // Change to your number
      const msg = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
      whatsappBtn.href = url;
      // Let the link open
    });
  }

  // Email button click
  if (emailBtn) {
    emailBtn.addEventListener("click", function (e) {
      if (!validateInputs()) {
        e.preventDefault();
        return;
      }
      const subject = encodeURIComponent("Contact from Website");
      const body = encodeURIComponent(
        `Name: ${nameInput.value}\nMessage: ${messageInput.value}`
      );
      const mailto = `mailto:info@company.com?subject=${subject}&body=${body}`;
      emailBtn.href = mailto;
      // Let the link open
    });
  }
});
