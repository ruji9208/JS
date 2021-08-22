/* 
let today = new Date()
const nation = document.querySelector("#exchange span:first-child");
const exchange = document.querySelector("#exchange span:last-child");
const API_KEY = "l8GCvaly1mHvAXz9Tpbr6dOlVMGMgHIb";

function onExchage() {
  const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${API_KEY}&searchdate=${today}&data=AP01`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      nation.innerText = `${data[29].cur_nm} / ${data[29].deal_bas_r}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onExchage, onGeoError); */