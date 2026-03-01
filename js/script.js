const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

const floatingCta = document.getElementById('floatingCta');
window.addEventListener('scroll', () => {
  if (window.scrollY > 800) { floatingCta.classList.add('show'); }
  else { floatingCta.classList.remove('show'); }
});