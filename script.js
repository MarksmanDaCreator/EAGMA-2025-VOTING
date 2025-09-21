document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedVotes = {};
  const form = e.target;
  const inputs = form.querySelectorAll("input[type='radio']:checked");

  inputs.forEach(input => {
    selectedVotes[input.name] = input.value;
  });

  fetch("https://script.google.com/macros/s/AKfycby5D44vIceI0LtxCmaUMXuW_UIaeJNbVCaZjXb8iNHirPHz3td8eUm__wPmbSsS7GoN/exec", {
    method: "POST",
    body: JSON.stringify(selectedVotes),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(result => {
    console.log("Submitted:", result);
    form.style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  })
  .catch(error => {
    console.error("Error submitting vote:", error);
    alert("Something went wrong. Please try again later.");
  });
});
