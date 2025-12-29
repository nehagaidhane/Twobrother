document.addEventListener("click", function (e) {
  if (e.target.closest(".subscribe-box button")) {
    const email = document.querySelector(".subscribe-box input").value;

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
    } else {
      alert("Subscribed successfully!");
    }
  }
});
