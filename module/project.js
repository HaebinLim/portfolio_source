const data = Project;
const project = document.querySelector('.list_project');
let layer;

const templateItem = (list) => `
  ${list.map(({ title, type, period, persons, keyword, desc, img, linkList }) => `
    <div class="item">
      <div class="thumb" style="background-image:url(images/${img});"></div>
      <div class="cont">
        <strong class="tit_project"> ${title}</strong>
        <div class="txt_bar"><span>${period}</span><span>${type}</span><span>작업인원 ${persons}명</span></div>
        <div class="txt_keyword">${keyword.map(key => `<span>${key}</span>`).join('')}</div>
        <div class="txt_desc">${desc.map(d => `<p>${d}</p>`).join('')}</div>
      </div>
      <div class="links">${linkList?.map((d, i) => `
        <a href="${typeof d.link === 'object' ? `javascript:void(0)` : `${d.link}`}" target="_blank" class="link_url ${d.icon}">
          <span class="sr_only">${type.split(', ')[i]}</span>
        </a>`).join('')}
      </div>
    </div>
  `).join('')}
`
const templateList = (title, item) => `
  <strong class="sr_only">${title} 페이지 리스트</Strong>
  <ul>
  ${item.link.map(i => `<li><a href="${i.url}" target="_blank">${i.txt}</a></li>`).join('')}
  </ul>
`;

const createLayer = () => {
  let div = document.createElement('div');
  div.className = 'tooltip layer_link';
  project.after(div);
  layer = document.querySelector('.layer_link');
  layer.innerHTML = `<button type="button" class="btn_close"><span class="sr_only">닫기</span></button>`;
}

const clientRect = (target) => {
  const rect = target.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  }
}

const clickShowLayer = () => {
  const margin = 10;
  const div = document.createElement('div');
  document.querySelectorAll('.links').forEach((link, idx) => {
    link.querySelectorAll('.link_url').forEach((a, i) => {
      a.addEventListener('click', e => {
        layer.classList.remove('show');
        if (a.classList.contains('layer')) {
          e.preventDefault();
          div.innerHTML = templateList(data.list[idx].title, data.list[idx].linkList[i]);
          layer.append(div);
          layer.classList.add('show');
          layer.style.top = clientRect(e.target).top - clientRect(layer).height - margin + 'px';
          layer.style.left = clientRect(e.target).left - ((clientRect(layer).width - clientRect(e.target).width) / 2 - margin) + 'px';
          return false;
        }
      });
    })
  });
}

const init = () => {
  project.innerHTML = templateItem(data.list);
  createLayer();
  clickShowLayer();
  document.querySelector('.btn_close').addEventListener('click', () => layer.classList.remove('show'));
  document.addEventListener('scroll', () => layer.classList.remove('show'));
}

export default init;