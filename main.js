const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if (menu) menu.addEventListener('click', () => links.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links && links.classList.remove('open'));
});

const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Nanders Consulting website inquiry');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
      `Email: ${data.get('email')}\n` +
      `Company: ${data.get('company')}\n` +
      `Service: ${data.get('service')}\n\n` +
      `${data.get('message')}`
    );
    window.location.href = `mailto:info@nandersconsulting.com?subject=${subject}&body=${body}`;
  });
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
