
const data = Career;
const graph = document.querySelector('.graph');
const skill = document.querySelector('.skills');
const btnShow = document.querySelector('.btn_show');
const tooltip = document.querySelector('.tooltip');
const items = ['skills', 'tools'];
const dateArr = [];
const companyValue = [
  { size: 4, color: '#ffe433' },
  { size: 1, color: '#aedfae' },
  { size: 5, color: '#4876ef' },
  { size: 0.24, color: '#2ab3f7' },
  { size: 0.5, color: '#ff690a' },
];
let rowBar,
  company,
  state = false;

const templateGraph = ({ company, team, details }, { size, color }) => `
  <div class="row">
    <div class="period"></div>
    <div class="company" style="--colSize:${size};--bgColor:${color}">
      <strong class="name">${company}</strong>
      <span class="team hide">${team}</span>
    </div>
    <ul class="details hide">${details.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>
`;

const templateSkiil = (list) => `
  <div class="items">
    ${list.map(item => `<span>${item}</span>`).join('')}
  </div>
`;

const calcDate = ({ from, to }) => {
  let obj = {};
  obj.year = from.substr(0, 4);

  if (!to) {
    obj.period = `${from}~`;
    return obj;
  }

  const newDate = (str) => {
    const date = str.split('.').join('');
    return new Date(date.substr(0, 4), date.substr(4, 2) - 1, date.substr(6, 2));
  }

  let interval = newDate(to) - newDate(from);
  let day = 1000 * 60 * 60 * 24;
  let month = day * 30;
  let year = month * 12;

  if (interval / year < 1) {
    obj.period = `${from}~${to} (${Math.round(interval / month)}개월)`;
  } else {
    obj.period = `${from}~${to} (${Math.round(interval / year)}년)`;
  }
  return obj;
}
const changeDateTxt = (idx, state) => {
  document.querySelectorAll('.period')[idx].innerText = state ? dateArr[idx].period : dateArr[idx].year;
}

const hoverShow = (e) => {
  const parent = e.target.parentElement;
  const nodes = [...parent.parentElement.children];
  const index = nodes.indexOf(parent);
  parent.classList.add('show');
  changeDateTxt(index, true);
};

const hoverHide = (e) => {
  const parent = e.target.parentElement;
  const nodes = [...parent.parentElement.children];
  const index = nodes.indexOf(parent);
  parent.classList.remove('show');
  changeDateTxt(index, false);
};

const addHoverEvent = () => {
  company.forEach(c => {
    c.addEventListener('mouseenter', hoverShow);
    c.addEventListener('mouseleave', hoverHide);
  });
}

const removeHoverEvnet = () => {
  company.forEach(c => {
    c.removeEventListener('mouseenter', hoverShow);
    c.removeEventListener('mouseleave', hoverHide);
  })
}

const toggleEvent = () => {
  btnShow.addEventListener('click', () => {
    state = !state;
    btnShow.classList.toggle('on');
    tooltip.classList.toggle('hide');
    rowBar.forEach((row, i) => {
      row.classList.toggle('show');
      changeDateTxt(i, state);
    });
    state ? removeHoverEvnet() : addHoverEvent();
  });
}

const resizeEvent = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth <= '1280') {
    state = true;
    btnShow.style.display = 'none';
    tooltip.classList.add('hide');
    rowBar.forEach((row, i) => {
      row.classList.add('show');
      changeDateTxt(i, state);
    });
    removeHoverEvnet();
  } else {
    state = false;
    btnShow.style.display = '';
    btnShow.classList.remove('on');
    tooltip.classList.remove('hide');
    rowBar.forEach((row, i) => {
      row.classList.remove('show');
      changeDateTxt(i, state);
    });
    addHoverEvent();
  }
}

const init = () => {
  data.list.forEach((item, idx) => {
    graph.innerHTML += templateGraph(item, companyValue[idx]);
    dateArr.push(calcDate(item))
    changeDateTxt(idx, false);
  });
  rowBar = document.querySelectorAll('.row');
  company = document.querySelectorAll('.company');
  addHoverEvent();
  toggleEvent();

  items.forEach(key => skill.innerHTML += templateSkiil(data[key]));

  let timer = null;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(resizeEvent, 300);
  }, false);
}

export default init;