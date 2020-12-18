const axios = require('axios');

axios
.get('http://api.exchangeratesapi.io/latest')
.then( function (res){
    console.log(`สกุลเงินพื้นฐานเเลกเปลี่ยน ${res.data.base}`);
    console.log(`ต่อไทยบาท ${res.data.rates.THB}`);
});