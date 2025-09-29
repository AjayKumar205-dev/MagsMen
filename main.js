// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth nav click
document.querySelectorAll('nav .list-items li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('nav .list-items li').forEach(x => x.classList.remove('active'));
    li.classList.add('active');
    const id = li.dataset.target;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// CTA buttons
document.getElementById('hireBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' });
});

// Active nav on scroll
const sections = Array.from(document.querySelectorAll('main > header, section'));
window.addEventListener('scroll', () => {
  const top = window.scrollY + 80;
  for (const s of sections) {
    if (s.offsetTop <= top && s.offsetTop + s.offsetHeight > top) {
      const id = s.id || 'hero';
      document.querySelectorAll('nav .list-items li')
        .forEach(li => li.classList.toggle('active', li.dataset.target === id));
    }
  }
});
