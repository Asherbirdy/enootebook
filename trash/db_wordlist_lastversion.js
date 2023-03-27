// ---DOM---
const search = document.querySelector('.searchbar');
const output = document.querySelector('.output');
const filterRows = document.querySelectorAll('.filter-row');

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
const { ownLibrary } = acc;
window.addEventListener('DOMContentLoaded', loadList);
search.addEventListener('input', filter);

// ---更新列表資訊---
function updatePage() {
  output.innerHTML = '';
  loadList();
}

// ---行列template:
function generateListRow(chName, engName, level, i) {
  // 單字熟悉度等級多少就輸入多少星星icon
  const levelIcon = lv => {
    let output = [];
    for (let i = 0; i < level; i++) {
      output.push('<img class="icon-s" src="svg/02_icon/icon-star.svg" />');
    }
    return output.join('');
  };
  //Html:
  let temp = `<div class="filter-row">
    <div class="word">${engName}</div>
    <div class="word">${chName}</div>
    <div class="word">
      <div class="starbox"> ${levelIcon(level)}</div>
      <a href="#" class="icon-s icon-delete">
        <img src="svg/02_icon/icon-wrong_grey.svg" data-index="${i}" />
      </a>
    </div>`;
  return temp;
}

// ---自動顯示列表---
function loadList() {
  ownLibrary.forEach(function (__, i) {
    // 從ownLibrary 拆解出每個單字的 中文 / 英文 / 熟悉度等級：
    const { chName, engName, level } = ownLibrary[i];
    let temp = generateListRow(chName, engName, level, i);
    // 一定要是'beforeend'不然跑不出來
    output.insertAdjacentHTML('beforeend', temp);

    // 刪除btn的dom:
    const deleteBtn = document.querySelector(`[data-index="${i}"]`);

    // 刪除行列點擊事件
    deleteBtn.addEventListener('click', function () {
      ownLibrary.splice(i, 1);
      localStorage.setItem('userData', JSON.stringify(acc));
      updatePage();
    });
  });
}

// ---搜尋功能---
function filter(e) {
  // 先清空列表：
  output.innerHTML = '';
  // 將所有的英文單字放到一個陣列：
  const engNames = ownLibrary.map(words => words.engName);

  // 雙向監聽：
  const searchInput = e.target.value.toLowerCase();

  // 搜尋功能：
  const result = engNames.filter(item => {
    let temp = '';
    const words = item.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i].startsWith(searchInput)) {
        return true;
      }
    }
    return false;
  });

  // 生成 HTML 字符串：
  const html = result
    .map(item => {
      const { chName, engName, level } = ownLibrary.find(
        words => words.engName === item
      );

      return `
        <div>
          <span>${chName}</span>
          <span>${engName}</span>
          <span>${level}</span>
        </div>
      `;
    })
    .join('');

  // 更新页面：
  output.insertAdjacentHTML('beforeend', html);
}
