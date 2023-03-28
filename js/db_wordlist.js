// ---DOM---
const search = document.querySelector('.searchbar'); //搜尋input
const output = document.querySelector('.output'); //放列表的父層
const btn_sort = document.querySelector('.btn_sort'); //排序按鈕
const btn_addWord = document.querySelector('.btn_add'); //新增單字 按鈕
const notebooks = document.querySelector('.notes_box'); //小筆記簿
const modal = document.getElementById('pop_up_addword'); //彈出視窗
const wordLength = document.querySelector('.wordLength'); // 單字數量
const wordFamiliar = document.querySelector('.wordFamiliar'); // 平均熟悉度
const all_notebook = document.querySelector('.all_notebooks');

// ---監聽---
//1.顯示頁面：
window.addEventListener('DOMContentLoaded', loadList);
window.addEventListener('DOMContentLoaded', loadnotebook);
//2.過濾監聽：
search.addEventListener('input', filter);

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
// console.log(acc);
//1.總單字庫：
const { ownLibrary } = acc;

//切換動態單字庫：預設
let lib = ownLibrary;

//所有單字放到一個陣列：
let engNamesArr;
const currentNotebook = function () {
  engNamesArr = lib.map(words => words.engName);
};
currentNotebook();

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
btn_sort.addEventListener('click', function (e) {
  e.preventDefault();
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
    let html = `<a id="notebooksLink" class="small_notebooks btn_outline" notebooks_data="${i}" href="#">${item.notebookName} </a>`;
    notebooks.insertAdjacentHTML('beforeend', html);
  });
  //如果小筆記本小於6本，要有新增的筆記本
  if (acc.notebooks.length < 6) {
    const lastHTML = ` <a class=" all_notebooks btn_grey" href="#">+</a> `;
    notebooks.insertAdjacentHTML('beforeend', lastHTML);
  }
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

// --- 總筆記簿 和 小筆記本 的按鈕 ---
document.addEventListener('click', function (e) {
  //點擊：所有筆記簿  並刪掉其他a標籤的btn_color
  if (e.target.classList.contains('all_notebooks')) {
    e.preventDefault();
    // 取得所有 small_notebooks 的節點
    const smallNotebooks = document.querySelectorAll('.small_notebooks');

    // 刪掉其他的 btn_color class
    smallNotebooks.forEach(notebook => {
      if (notebook.classList.contains('btn_color')) {
        notebook.classList.remove('btn_color');
        notebook.classList.add('btn_outline');
      }
    });

    // 留下 all_notebooks 的 btn_color class
    e.target.classList.add('btn_color');
  }

  if (e.target.classList.contains('all_notebooks')) {
    lib = ownLibrary;
    loadList();
    currentNotebook();
    currentLibData();
  }

  //點擊：小筆記本
  if (e.target.classList.contains('small_notebooks')) {
    e.preventDefault();
    // 如果點擊小筆記本 取消大筆記本的樣式
    if (all_notebook.classList.contains('btn_color')) {
      all_notebook.classList.remove('btn_color');
      all_notebook.classList.add('btn_outline');
    }
    //取得id 的數值 //0 , 1
    let notebooksData = e.target.getAttribute('notebooks_data');
    //點擊切換lib
    lib = acc.notebooks[notebooksData].notebookLib;

    //切換CSS樣式: 將其他按鈕樣式取消：
    // 將目前點擊的按鈕設定成 btn_color
    e.target.classList.add('btn_color');
    // 將其他按鈕設定成 btn_outline
    const allNotebooks = document.querySelectorAll('.small_notebooks');
    allNotebooks.forEach(notebook => {
      if (notebook !== e.target) {
        notebook.classList.remove('btn_color');
        notebook.classList.add('btn_outline');
      }
    });

    //更新頁面：
    loadList();
    currentNotebook();
    currentLibData();
  }
});

//顯示目前lib的單字數量 和 平均熟悉度：
function currentLibData() {
  wordLength.textContent = '';
  wordFamiliar.textContent = '';
  console.log(wordLength.textContent);
  console.log(wordFamiliar.textContent);

  const libLength = lib.length;
  const totalLevel =
    lib.reduce((sum, item) => sum + item.level, 0) / lib.length;
  const familiarNum =
    Number((totalLevel + '')[2]) === 0 || (totalLevel + '').length === 1
      ? (totalLevel + '')[0]
      : Math.floor(totalLevel * 10) / 10;
  wordLength.textContent = libLength;
  wordFamiliar.textContent = familiarNum;
}
currentLibData();

//當點擊小筆記簿系列取消
