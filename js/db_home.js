'use strict';

const acc = {
  username: 'asher',
  password: '1111',
  level: 0,
  ownLibrary: [
    { chName: '蘋果', engName: 'apple', level: 3 },
    { chName: '香蕉', engName: 'banana', level: 2 },
    { chName: '橘子', engName: 'orange', level: 5 },
    { chName: '梨子', engName: 'pear', level: 3 },
    { chName: '芒果', engName: 'mango', level: 1 },
    { chName: '草莓', engName: 'strawberry', level: 4 },
    { chName: '葡萄', engName: 'grape', level: 3 },
    { chName: '西瓜', engName: 'watermelon', level: 2 },
    { chName: '哈密瓜', engName: 'cantaloupe', level: 4 },
    { chName: '櫻桃', engName: 'cherry', level: 1 },
    { chName: '老虎', engName: 'tiger', level: 3 },
    { chName: '獅子', engName: 'lion', level: 4 },
    { chName: '熊', engName: 'bear', level: 2 },
    { chName: '豹', engName: 'leopard', level: 5 },
    { chName: '大象', engName: 'elephant', level: 2 },
    { chName: '長頸鹿', engName: 'giraffe', level: 3 },
    { chName: '犀牛', engName: 'rhinoceros', level: 3 },
    { chName: '鬣狗', engName: 'hyena', level: 4 },
    { chName: '猴子', engName: 'monkey', level: 5 },
    { chName: '狗', engName: 'dog', level: 2 },
  ],

  testRecord: [
    {
      yourCorrectAnswer: ['apple', 'leopard', 'tiger', 'rhinoceros', 'monkey'],
      yourWrongAnswer: [
        {
          written: 'cheewy',
          correct: 'cherry',
        },
        {
          written: 'peer',
          correct: 'pear',
        },
        {
          written: 'oramg',
          correct: 'orange',
        },
      ],
    },
    {
      yourCorrectAnswer: ['strawberry', 'giraffe', 'tiger'],
      yourWrongAnswer: [
        {
          written: 'grapppe',
          correct: 'grape',
        },
        {
          written: 'watermalon',
          correct: 'watermelon',
        },
        {
          written: 'beer',
          correct: 'bear',
        },
        {
          written: 'cantaope',
          correct: 'cantaloupe',
        },
        { written: 'azpzle', correct: 'apple' },
      ],
    },
  ],
};

// ---------------------- DOM ---------------------------
const labelAllwordNum = document.querySelector('.allword');
const labelTestRecordTotal = document.querySelector('.testRecordTotal');
const labelfamiliarAverage = document.querySelector('.familiarNum');
const labelTestRecordBox_Left = document.querySelector('.record-leftbox');
const labelTestRecordBox_Right = document.querySelector('.record-Rightbox');

// ---------------------- 顯示頁面 ---------------------------
//筆記本總字數 =====>
const displayAllWordsNum = function () {
  labelAllwordNum.innerHTML = '';
  const wordLibLength = acc.ownLibrary.length;
  labelAllwordNum.insertAdjacentHTML('afterbegin', wordLibLength);
};

//總考試次數 =====>
const displayTestRecordNum = function () {
  labelTestRecordTotal.innerHTML = '';
  const allTestRecord = acc.testRecord.length;
  labelTestRecordTotal.insertAdjacentHTML('afterbegin', allTestRecord);
};

//單字平均熟悉度 =====>
const displayFamiliarNum = function () {
  labelfamiliarAverage.innerHTML = '';
  //1.熟悉度全部加總加總：
  const totalLevel =
    acc.ownLibrary.reduce((sum, item) => sum + item.level, 0) /
    acc.ownLibrary.length;

  //2.如果totalLevel是整數顯示整數，不是則是顯示小數後一點：
  const familiarNum =
    Number((totalLevel + '')[2]) === 0 || (totalLevel + '').length === 1
      ? (totalLevel + '')[0]
      : Math.floor(totalLevel * 10) / 10;
  labelfamiliarAverage.insertAdjacentHTML('afterbegin', familiarNum);
};

//考試計畫 =====>
const displayTestRecord = function () {
  //先把兩個box清空：
  labelTestRecordBox_Left.innerHTML = '';
  labelTestRecordBox_Right.innerHTML = '';

  //1.取出最後一次考試的陣列，並拆出正確和錯誤的答案：
  const { yourCorrectAnswer, yourWrongAnswer } = acc.testRecord.at(-1);

  //2.將正確和錯誤的陣列放在一起，變成一個長度為8的陣列
  const records = [...yourCorrectAnswer, ...yourWrongAnswer];

  //3.將record的陣列切半，並分到兩個不同的陣列，給畫面左右的box使用
  const leftbox = records.slice(0, 4);
  const rightbox = records.slice(4);

  //4.將資料放到畫面：
  leftbox.forEach(function (examword) {
    const correct_icon = 'correct';
    const wrong_icon = 'wrong';

    const { written, correct } = examword;
    const wrongboxStr = `${written} => 正確拼法 ${correct}`;
    const word = typeof examword === 'object' ? wrongboxStr : examword;
    const icon = typeof examword === 'object' ? wrong_icon : correct_icon;
    const html = `
    <div class="text-box">
    <img class="icon-m" src="svg/02_icon/icon-${icon}.svg" />
    <div class="row-text-box">${word}</div>
    </div>
    `;
    labelTestRecordBox_Left.insertAdjacentHTML('afterbegin', html);
  });

  rightbox.forEach(function (examword) {
    const correct_icon = `svg/02_icon/icon-correct.svg`;
    const wrong_icon = ` svg/02_icon/icon-wrong.svg"`;

    const { written, correct } = examword;
    const wrongboxStr = `${written} => 正確拼法 ${correct}`;
    const word = typeof examword === 'object' ? wrongboxStr : examword;
    const icon = typeof examword === 'object' ? wrong_icon : correct_icon;
    const html = `
    <div class="text-box">
    <img class="icon-m" src="${icon}" />
    <div class="row-text-box">${word}</div>
    </div>
    `;
    labelTestRecordBox_Right.insertAdjacentHTML('afterbegin', html);
  });
};

//執行函數：
displayAllWordsNum();
displayTestRecordNum();
displayFamiliarNum();
displayTestRecord();

const obj = { written: 'grapppe', correct: 'grape' };

console.log(written, correct);
