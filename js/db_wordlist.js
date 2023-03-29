// ---DOM---
//LABEL：
const search = document.querySelector('.searchbar'); //搜尋input
const output = document.querySelector('.output'); //放列表的父層
const wordLength = document.querySelector('.wordLength'); // 單字數量
const wordFamiliar = document.querySelector('.wordFamiliar'); // 平均熟悉度
const curSortStr = document.querySelector('.loadCurSort'); //選擇

//BUTTON：
const btn_sort = document.querySelector('.btn_sort'); //排序按鈕
const btn_AToZ = document.querySelector('.btn_aToz');
const btn_NewToOld = document.querySelector('.btn_NewOld');
const btn_addWord = document.querySelector('.btn_add'); //新增單字 按鈕
const btn_notebooks = document.querySelector('.notes_box'); //小筆記簿
const btn_all_notebook = document.querySelector('.all_notebooks');
const smallNotebooks = document.querySelectorAll('.small_notebooks'); //取得所有 small_notebooks 的節點

//彈出視窗：
const modal = document.getElementById('pop_up_addword'); //彈出視窗

// ---監聽---
window.addEventListener('DOMContentLoaded', loadList); //顯示頁面：
window.addEventListener('DOMContentLoaded', loadnotebook); //顯示小筆記簿按鈕
window.addEventListener('DOMContentLoaded', currentLibData); //顯示目前排序
//2.過濾監聽：
search.addEventListener('input', filter);

// ---抓取資料並拆解---
let acc = JSON.parse(localStorage.getItem('userData'));
console.log(acc);
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

// 算熟悉度等級的function
const levelIcon = lv => {
  let output = [];
  for (let i = 0; i < lv; i++) {
    output.push('<img class="icon-s" src="svg/02_icon/icon-star.svg" />');
  }
  return output.join('');
};

//--- 列表HTML模板 ---
function rowsHtmlTemplate({ chName, engName, level }, i = false) {
  const html = `
  <div class="filter-row" filter_id="data_${i}">
    <div class="word engName">${engName}</div>
    <div class="word">${chName}</div>
    <div class="word">
    <div class="starbox"> ${levelIcon(level)}</div>
    <a href="#" class="icon-s icon_delete">
    <img class="btn_delete" src="svg/02_icon/icon-wrong_grey.svg" />
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

//更新行列的ＵＩ newLib是導入lib陣列：
function updateUIrows(newLib) {
  newLib.forEach((item, i) => {
    const HTML = rowsHtmlTemplate(newLib[i]);
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
    curSortStr.textContent = '';
    curSortStr.textContent = '排序 ：「 新到舊  」 ';
    typing.forEach((item, i) => {
      const index = engNamesArr.indexOf(item);
      const HTML = rowsHtmlTemplate(lib[index]);
      output.insertAdjacentHTML('beforeend', HTML);
    });
  } else {
    nullHtml = `<p>沒有這個單字  點擊 新增單字 來新增單字！</p>`;
    output.insertAdjacentHTML('beforeend', nullHtml);
  }
}

//  ----   BUTTON 及 現在排序 更新畫面函式 和 preDefault
const updateCurrentSortStr = str => {
  output.innerHTML = '';
  search.value = '';
  curSortStr.textContent = '';
  curSortStr.textContent = `${str}`;
};

// --- BUTTON-熟悉度排序 ---
let btn_sort_switch;
btn_sort.addEventListener('click', function (e) {
  e.preventDefault();
  updateCurrentSortStr('排序 ：「 熟悉度排序 」');
  btn_sort_switch = !btn_sort_switch;

  if (btn_sort_switch === false) {
    const sortBigToSmallArr = lib
      .slice()
      .sort((a, b) => (a.level > b.level ? -1 : 1));
    updateUIrows(sortBigToSmallArr);
  } else {
    const sortNewToOldArr = lib
      .slice()
      .sort((a, b) => (a.level > b.level ? 1 : -1));
    updateUIrows(sortNewToOldArr);
  }
});

// ---  BUTTON-A-Z排序 ---
let btn_aToZ_switch;
btn_AToZ.addEventListener('click', function (e) {
  e.preventDefault();
  btn_aToZ_switch = !btn_aToZ_switch;
  updateCurrentSortStr('排序 ：「 英文排序 」');

  if (btn_aToZ_switch === true) {
    const aToZsort = lib
      .slice()
      .sort((a, b) => a.engName.localeCompare(b.engName));
    updateUIrows(aToZsort);
  } else {
    const zToAsort = lib
      .slice()
      .sort((a, b) => b.engName.localeCompare(a.engName));
    updateUIrows(zToAsort);
  }
});

// ---  BUTTON-新舊排序： ---
let btn_NewToOld_switch;
btn_NewToOld.addEventListener('click', function (e) {
  e.preventDefault();
  btn_NewToOld_switch = !btn_NewToOld_switch;
  updateCurrentSortStr('排序 ：「 新舊排序 」');

  if (btn_NewToOld_switch === true) {
    const newLib = lib.slice().reverse();
    updateUIrows(newLib);
  } else {
    let lib = ownLibrary;
    updateUIrows(lib);
  }
});

// --- 列出所有小筆記簿按鈕
function loadnotebook() {
  acc.notebooks.forEach((item, i) => {
    let html = `<a id="notebooksLink" class="small_notebooks btn_outline" notebooks_data="${i}" href="#">${item.notebookName} </a>`;
    btn_notebooks.insertAdjacentHTML('beforeend', html);
  });
  //如果小筆記本小於6本，要有新增的筆記本
  if (acc.notebooks.length < 6) {
    const addNotebookHTML = ` <a class=" all_notebooks btn_grey" href="#">+</a> `;
    btn_notebooks.insertAdjacentHTML('beforeend', addNotebookHTML);
  }
}

// --- 動態綁定 ---
document.addEventListener('click', function (e) {
  //點擊：所有筆記簿
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
    lib = ownLibrary;
    loadList();
    currentNotebook();
    currentLibData();
  }

  //點擊：小筆記本
  if (e.target.classList.contains('small_notebooks')) {
    e.preventDefault();
    // 如果點擊小筆記本 取消大筆記本的樣式
    if (btn_all_notebook.classList.contains('btn_color')) {
      btn_all_notebook.classList.remove('btn_color');
      btn_all_notebook.classList.add('btn_outline');
    }
    //取得id 的數值 //0 , 1
    let notebooksData = e.target.getAttribute('notebooks_data');
    //點擊切換lib
    lib = acc.notebooks[notebooksData].notebookLib;
    // 將目前點擊的按鈕設定成 btn_color
    e.target.classList.add('btn_color');
    // 將其他按鈕設定成 btn_outline
    const allNotebooks = document.querySelectorAll('.small_notebooks');
    //對所有小筆記簿的按鈕做迴圈，
    allNotebooks.forEach(notebook => {
      if (notebook !== e.target) {
        notebook.classList.remove('btn_color');
        notebook.classList.add('btn_outline');
      }
    });
    loadList();
    currentNotebook();
    currentLibData();
  }

  //點擊：刪除icon
  if (e.target.classList.contains('btn_delete')) {
    //找到單字的那行：
    const thisWordRow = e.target.parentElement.parentElement.parentElement;
    //找到那行的英文字！
    const selectContentWord = thisWordRow.querySelector('.engName').textContent;
    console.log('已選取' + selectContentWord);
    //防呆刪除
    const deleteAlert =
      confirm(`確定要刪除單字 ${selectContentWord} 嗎？ 「熟悉度」和「相關資料」將會全部刪去！
`);
    //如果
    if (deleteAlert) {
      const findWord = acc.ownLibrary.find(word => {
        return word.engName === selectContentWord;
      });

      //刪掉
      acc.ownLibrary = acc.ownLibrary.filter(
        word => word.engName !== selectContentWord
      );

      //更新localStorage:
      localStorage.setItem('userData', JSON.stringify(acc));
      //重新讀取：
      acc = JSON.parse(localStorage.getItem('userData'));
      console.log(acc);
      //更新UI
      lib = acc.ownLibrary;
      console.log(lib);
      loadList();
      currentNotebook();
      currentLibData();
    } else {
      console.log('陣列裡沒有這個單字');
    }
  } else {
    console.log('false');
  }
});

//顯示目前lib的單字數量 和 平均熟悉度：
function currentLibData() {
  wordLength.textContent = '';
  wordFamiliar.textContent = '';

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
