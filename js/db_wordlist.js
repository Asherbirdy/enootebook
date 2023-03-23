// ---DOM---
const search = document.querySelector('.searchbar');
const output = document.querySelector('.output');
const filterRows = document.querySelectorAll('.filter-row');

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
//1.單字庫：
const { ownLibrary } = acc;
//2.把所有英文字放到一個陣列
const engNamesArr = ownLibrary.map(words => words.engName);

// ---監聽---
//1.顯示頁面：
window.addEventListener('DOMContentLoaded', loadList);
//2.過濾監聽：
search.addEventListener('input', filter);

//--- 列表HTML模板 ---
function rowsHtmlTemplate({ chName, engName, level }, index) {
  const levelIcon = lv => {
    let output = [];
    for (let i = 0; i < lv; i++) {
      output.push('<img class="icon-s" src="svg/02_icon/icon-star.svg" />');
    }
    return output.join('');
  };

  const html = `
  <div class="filter-row">
    <div class="word">${engName}</div>
    <div class="word">${chName}</div>
    <div class="word">
    <div class="starbox"> ${levelIcon(level)}</div>
    <a href="#" class="icon-s icon-delete">
    <img src="svg/02_icon/icon-wrong_grey.svg" data-index="${index}" />
  </a></div>
  `;
  return html;
}

// --- 顯示列表功能 ---
function loadList() {
  ownLibrary.forEach((_, i) => {
    const HTML = rowsHtmlTemplate(ownLibrary[i], i);
    output.insertAdjacentHTML('beforeend', HTML);
  });
}

// --- 搜尋功能 ---
function filter(e) {
  output.innerHTML = '';
  const typing = engNamesArr.filter(item =>
    item.toLowerCase().startsWith(e.target.value.toLowerCase())
  );
  if (typing.length > 0) {
    typing.forEach((item, i) => {
      const index = engNamesArr.indexOf(item);
      const HTML = rowsHtmlTemplate(ownLibrary[index], index);
      output.insertAdjacentHTML('beforeend', HTML);
    });
  }
}
