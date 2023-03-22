//DOM
const input = document.querySelector('.searchbar-box');
const output = document.querySelector('.output');
const filterRows = document.querySelectorAll('.filter-row');
console.log(filterRows);

//抓取資料並拆解：
const acc = JSON.parse(localStorage.getItem('userData'));
console.log(acc);
//抓取user的單字：

const { ownLibrary } = acc;
window.addEventListener('DOMContentLoaded', loadList);

// 在點擊 deleteBtn 時調用此函數
function updatePage() {
  // 清除 output 的所有子節點
  output.innerHTML = '';
  // 重新加載單詞列表
  loadList();
}

//--------------自動顯示列表-------------
function loadList() {
  ownLibrary.forEach(function (__, i) {
    //從ownLibrary 每個單字的 中文 / 英文 / 熟悉度等級：
    const { chName, engName, level } = ownLibrary[i];

    //單字熟悉度等級多少就輸入多少星星icon
    const levelIcon = lv => {
      let output = [];
      for (let i = 0; i < level; i++) {
        output.push('<img class="icon-s" src="svg/02_icon/icon-star.svg" />');
      }
      return output.join('');
    };

    let temp = `<div class="filter-row">
    <div class="word">${engName}</div>
    <div class="word">${chName}</div>
    <div class="word">
      <div class="starbox"> ${levelIcon(level)}</div>
      <a href="#" class="icon-s icon-delete">
        <img src="svg/02_icon/icon-wrong_grey.svg" data-index="${i}" />
      </a>
    </div>`;

    //一定要是'beforeend'不然跑不出來
    output.insertAdjacentHTML('beforeend', temp);

    const deleteBtn = document.querySelector(`[data-index="${i}"]`);
    // console.log(deleteBtn);

    deleteBtn.addEventListener('click', function () {
      // console.log(engName);
      // console.log(i);
      ownLibrary.splice(i, 1);
      // console.log(acc);
      localStorage.setItem('userData', JSON.stringify(acc));
      updatePage();
    });
  });
}

//------------更新---------------

// ---------------------點擊刪除單字---------------------
