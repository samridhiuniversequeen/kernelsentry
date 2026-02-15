document.addEventListener('DOMContentLoaded', () => {
  // Navbar
  fetch('partials/navbar.html')
    .then(response => {
      if (!response.ok) throw new Error(`Navbar fetch failed: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading navbar:', err));

  // Footer
  fetch('partials/footer.html')
    .then(response => {
      if (!response.ok) throw new Error(`Footer fetch failed: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
});