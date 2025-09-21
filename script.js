document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    console.log("Vote Submitted:", result);
    form.style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  })
  .catch(error => {
    console.error("Error submitting vote:", error);
    alert("Something went wrong. Please try again later.");
  });
});
