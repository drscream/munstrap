document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    // Open tab from hash
    const selected = bootstrap.Tab.getOrCreateInstance(document.querySelector(window.location.hash + "-tab"));
    selected.show();
  }

  // Set hash on tab change
  document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((btn) => {
    btn.addEventListener("shown.bs.tab", (event) => {
      window.location.hash = event.target.id.replace("-tab", "");
    });
  });
});
