document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbzFFThH__34NHRwxk9IO8RV6Vu-YQJQbjT0KRFjayflDxmV0OXROaV_iQEbQQ_UTyA7oA/exec", {
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
