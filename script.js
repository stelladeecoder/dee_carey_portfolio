function toggleDetails(event) {
  // Find the nearest project card and its hidden details section
  const card = event.target.closest('.project-card');
  const details = card.querySelector('.details');
  // Toggle the visibility
  if (details.style.display === 'block') {
    details.style.display = 'none';
    event.target.textContent = 'Show Details';
  } else {
    details.style.display = 'block';
    event.target.textContent = 'Hide Details';
  }
}

// Update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
}
