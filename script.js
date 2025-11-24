document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver for reveal-on-scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    revealObserver.observe(el);
  });

  // IntersectionObserver for project cards and charts
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const value = bar.dataset.value;
        bar.style.width = value + "%";
        bar.classList.add("active");
        barObserver.unobserve(bar);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".chart-bar").forEach((bar) => {
    barObserver.observe(bar);
  });

  const bubbleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bubble = entry.target;
        const size = bubble.dataset.size || 24;
        bubble.style.transform = `scale(${size / 30})`;
        bubble.classList.add("visible");
        bubbleObserver.unobserve(bubble);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".bubble").forEach((bubble) => {
    bubbleObserver.observe(bubble);
  });

  // Project details toggle
  document.querySelectorAll(".project-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const details = card.querySelector(".project-details");
      const isOpen = details.classList.toggle("open");

      button.textContent = isOpen ? "Hide details" : "Show details";
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
