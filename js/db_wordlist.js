// ---DOM---
const search = document.querySelector('.searchbar');
const output = document.querySelector('.output');
const filterRows = document.querySelectorAll('.filter-row');

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
const { ownLibrary } = acc;

window.addEventListener('DOMContentLoaded', loadList);

function loadList() {
  ownLibrary.forEach((_, i) => {
    const { chName, engName, level } = ownLibrary[i];
    console.log(chName, engName, level);
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
    output.insertAdjacentHTML('beforeend', temp);
  });
}
