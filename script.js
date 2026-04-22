  // Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Scroll top btn
  window.addEventListener('scroll', () => {
    const st = document.getElementById('scrollTop');
    st.classList.toggle('visible', window.scrollY > 400);
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // Form
  function submitForm() {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    if (!nom || !email || !msg) {
      alert('Veuillez remplir les champs obligatoires (*)');
      return;
    }
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }