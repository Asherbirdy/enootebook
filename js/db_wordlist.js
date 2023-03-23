// ---DOM---
const search = document.querySelector('.searchbar');
const output = document.querySelector('.output');
const filterRows = document.querySelectorAll('.filter-row');

// ---抓取資料並拆解---
const acc = JSON.parse(localStorage.getItem('userData'));
const { ownLibrary } = acc;
window.addEventListener('DOMContentLoaded', loadList);
