
const section = document.querySelectorAll('section');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.btn_menu');
const title = document.querySelector('.title');

const splitText = (el) => {
  const text = el.innerText;
  el.textContent = '';
  text.split('').forEach(txt => {
    const span = document.createElement('span');
    span.innerText = txt;
    el.appendChild(span);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(section => {
    if (!section.isIntersecting) {
      return;
    }
    const target = section.target;
    target.className === 'main' ? menu.classList.remove('fixed') : menu.classList.add('fixed');
    menuBtn.forEach((b) => b.dataset.section === target.className ? b.classList.add('on') : b.classList.remove('on'));
  })
}, { threshold: 0.1 });

const init = () => {
  splitText(title);
  section.forEach(entries => observer.observe(entries));
  menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const y = document.querySelector(`.${btn.dataset.section}`).offsetTop;
      window.scroll({
        top: y,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
}

export default init;