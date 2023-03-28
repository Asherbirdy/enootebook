// ---DOM---
const search = document.querySelector('.searchbar'); //搜尋input
const output = document.querySelector('.output'); //放列表的父層
const btn_sort = document.querySelector('.btn_sort'); //排序按鈕
const btn_addWord = document.querySelector('.btn_add'); //新增單字 按鈕
const modal = document.getElementById('pop_up_addword'); //彈出視窗
const notebooks = document.querySelector('.notes_box'); //小筆記簿

// ---監聽---
//1.顯示頁面：
window.addEventListener('DOMContentLoaded', loadList);
window.addEventListener('DOMContentLoaded', loadnotebook);
//2.過濾監聽：
search.addEventListener('input', filter);

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
// console.log(acc);
//1.單字庫：
const { ownLibrary } = acc;

//切換動態單字庫：：
let lib;
lib = ownLibrary;
// console.log(lib);

// lib = acc.notebooks[0].notebookLib;
// lib = acc.notebooks[1].notebookLib;

console.log(acc);
// lib = ownLibrary;
//2.把所有英文字放到一個陣列
const engNamesArr = lib.map(words => words.engName);

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
    <img src="svg/02_icon/icon-wrong_grey.svg" />
  </a>
   </div>
  `;
  return html;
}

// --- 顯示列表功能 ---
function loadList() {
  output.innerHTML = '';
  lib.forEach((_, i) => {
    const HTML = rowsHtmlTemplate(lib[i], i);
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
      const HTML = rowsHtmlTemplate(lib[index], index);
      output.insertAdjacentHTML('beforeend', HTML);
    });
  } else {
    nullHtml = `<p>沒有這個單字  點擊 新增單字 來新增單字！</p>`;
    output.insertAdjacentHTML('beforeend', nullHtml);
  }
}
// --- 熟悉度排序 ---
let btn_sort_switch;
btn_sort.addEventListener('click', function () {
  btn_sort_switch = !btn_sort_switch;
  output.innerHTML = '';
  search.value = '';

  if (btn_sort_switch === false) {
    const sortBigToSmallArr = lib
      .slice()
      .sort((a, b) => (a.level > b.level ? -1 : 1));
    sortBigToSmallArr.forEach((item, i) => {
      const HTML = rowsHtmlTemplate(sortBigToSmallArr[i], i);
      output.insertAdjacentHTML('beforeend', HTML);
    });
  } else {
    const sortNewToOldArr = lib
      .slice()
      .sort((a, b) => (a.level > b.level ? 1 : -1));
    sortNewToOldArr.forEach((item, i) => {
      const HTML = rowsHtmlTemplate(sortNewToOldArr[i], i);
      output.insertAdjacentHTML('beforeend', HTML);
    });
  }
});

// --- 列出所有小筆記簿按鈕
function loadnotebook() {
  acc.notebooks.forEach((item, i) => {
    console.log(item.notebookName);
    let html = `<a class="all_notebooks btn_outline" href="#">${item.notebookName}</a>`;
    console.log(html);
    notebooks.insertAdjacentHTML('beforeend', html);
  });
}

//--- 新增單字 ---
btn_addWord.addEventListener('click', function () {
  modal.style.display = 'block';
});

//--- 關掉新增單字視窗 ---
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
