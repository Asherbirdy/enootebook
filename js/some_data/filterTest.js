//目前多少單字（完成）：
const wordLibLength = account1.wordLibrary.length;
console.log(`目前資料庫有:${wordLibLength}文字：`);

//目前有多少星數分類單字：

//依照最新新增單字排序(完成)：
const reverseArr = account1.wordLibrary.slice().reverse();
console.log("依照最新到最舊排序:");
console.log(reverseArr);

//依照文字等級排序物件（完成）：
const sortNewToOldArr = account1.wordLibrary.sort(function (a, b) {
  return a.wordLevel > b.wordLevel ? 1 : -1;
});
console.log("依照文字等級排序物件：由低到高");
console.log(sortNewToOldArr);

//依照A-Z排序文字：

//未驗證單字排序：(完成)
const nonVerifyArr = account1.wordLibrary.filter(function (arr) {
  return !arr.verify;
});
console.log("未驗證單字排序：");
console.log(nonVerifyArr);

//以驗證單字：
const verifyArr = account1.wordLibrary.filter(function (arr) {
  return arr.verify;
});
console.log("以驗證單字：");
console.log(verifyArr);
