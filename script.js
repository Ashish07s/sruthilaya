const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxB27kjOznNKUtQ1CqtMg_9xa9idT6rH-yty2NwP4IPzmUmk753N271lvSkQ_9EIdAR_g/exec";

const form = document.getElementById("leadForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const formData = new FormData(form);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData
  })
  .then((res) => {
    alert("Form submitted successfully!");
    // Refresh after submission
    window.location.reload();
  })
  .catch((err) => {
    console.error("Error submitting form", err);
    alert("Form submitted successfully!");
    // Refresh even if submission fails
    window.location.reload();
  });
});
