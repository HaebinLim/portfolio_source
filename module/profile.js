
const data = Profile;
const personal = document.querySelector('.personal');
const items = ['이름', '휴대폰', '이메일', '주소지', '학 력', '교 육'];

const templateItem = (item, type) => `
  <div class="bullet ${type && `txt_bar`}">
    <strong>${item.title}</strong>
    <span>${item.data}</span>
    ${type && `<span>여</span>`}
  </div>
`;

const templateList = (item) => `
  <div class="bullet">
    <strong>${item.title}</strong>
    <ul>
    ${item.data.map(i => `<li>${i}</li> `).join('')}
    </ul>
  </div>
`;

const newList = () => {
  let list = [];
  items.forEach((item, i) => {
    list.push({
      title: (i === 0) ? data.name : item,
      data: data[Object.keys(data)[i + 1]]
    });
  });
  return list;
}

const init = () => {
  newList().forEach((item, idx) => {
    const isEducation = idx === 4 || idx === 5;
    const isName = idx === 0 ? true : '';
    isEducation ? personal.innerHTML += templateList(item) : personal.innerHTML += templateItem(item, isName);
  });
}

export default init;