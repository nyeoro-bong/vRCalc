let userNameImput = document.getElementById(`userName`);
let userAgeImput = document.getElementById(`userAge`);
let userPrefImput = document.getElementById(`userPref`);
let userVacImput = document.getElementById(`userVac`);
let riskCalcButton = document.getElementById(`riskCalc`);
let resultDivided = document.getElementById(`result-area`);
let tweetDivided = document.getElementById(`tweet-area`);
let outputElement = document.getElementById(`output-area`);

function getCSV(){
  let csvData = [];
  let lines = [];
  let dataD = new XMLHttpRequest();
  dataD.open('GET', './demography.csv', false);
  dataD.send();
  
  var LF = String.fromCharCode(10); 
  lines = dataD.responseText.toString.split(LF);

  // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
  for (let i = 0; i < lines.length ; ++i) {
    csvData[i] = lines[i].split(',');
  }
}

getCSV();

riskCalcButton.onclick = () => {
  let uName = userNameImput.value;
  let uAge = userAgeImput.value;
  let uPref = userPrefImput.value;
  let uVac = userVacImput.value;

  console.log(`ユーザー名は ${uName} さんです`);
  console.log(`年代は ${uAge} です`);
  console.log(`地域は ${uPref} です`);
  console.log(`ワクチン種は ${uVac} です`);

  outputElement.innerHTML = csvData;
  console.log(csvData);

}