document.addEventListener("DOMContentLoaded", function() {
  const Contact = document.getElementById("Contact");

  contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent the form from submitting traditionally

      // Collect form data
      const formData = new FormData(Contact);

      // Send the form data to the server-side script using AJAX
      fetch("sendEmail.php", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              alert("Thank you for your submission!");
              contactForm.reset();
          } else {
              alert("There was an error sending your message.");
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  });
});
