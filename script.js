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
    // Make entire project card clickable (except the button itself)
  document.querySelectorAll(".project-card").forEach((card) => {
    const link = card.querySelector(".card-link");
    const href = link ? link.getAttribute("href") : card.dataset.link;

    if (!href) return;

    card.addEventListener("click", (event) => {
      // Do not trigger when clicking the actual link (so right-click works)
      if ((event.target instanceof HTMLElement) && event.target.closest(".card-link")) {
        return;
      }
      window.open(href, "_blank");
    });
  });

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
