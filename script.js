  fetch("https://www.nbrb.by/api/exrates/currencies")
  .then((response) => response.json())
  .then((data) => data.filter ((el) => 
                  new Date (el.Cur_DateEnd) >= new Date (2022, 0, 1)))
  .then((data) => data[Math.floor(Math.random() * data.length)])
  
  .then(function(dataCurs){
      document.querySelector('.curs').innerHTML = `Наименование валюты: ${dataCurs.Cur_Name}`;
      return dataCurs;
    })
  .then((dataCurs)=> fetch (`https://www.nbrb.by/api/exrates/rates/${dataCurs.Cur_ID}?ondate=2022-1-1`))
  .then((response) => response.json())
  
  .then(function (dataCurs){
    document.querySelector('.scale').innerHTML =`${dataCurs.Cur_Scale} ${dataCurs.Cur_Abbreviation}`;
    document.querySelector('.rate').innerHTML= `Официальный курс на 01.01.2022 - ${dataCurs.Cur_OfficialRate} BYN`; 
    })












