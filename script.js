document.addEventListener("DOMContentLoaded", () => {
  // Toggle project details
  const buttons = document.querySelectorAll(".toggle-details");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const details = card.querySelector(".details");

      if (!details) return;

      const isOpen = details.classList.toggle("open");
      button.textContent = isOpen ? "Hide details" : "Show details";
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
