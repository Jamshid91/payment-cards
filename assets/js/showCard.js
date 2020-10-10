let getAdvanceBoxs = document.querySelectorAll(".get_advance_box");
let radioWraps = document.querySelectorAll(".radio_wrap");
let reviews = document.querySelectorAll(".review");
let sendAdvancePayments = document.querySelectorAll(".send_advance_payment");
let paymentCardsInfo = document.querySelectorAll(".payment_card_info");
let currencyTitle = document.querySelector(".currency_title");
let paymentCardTitle = document.querySelector(".payment_card_title");
let webMoneyInput = document.getElementById('webMoney');
const visaInputs = document.querySelectorAll('.form_visaCard input');


const [visaAdvance, webMoneyAdvance, qiwiAdvance, yandexAdvance] = sendAdvancePayments;
const [visaCard, webMoneyCard, qiwiCard, yandexCard] = paymentCardsInfo;
const [number, cvv, date, name] = visaInputs;
let visaCardInfo = [];
let webMoneyCardInfo = [];
const s_d = 'style.display';

addEventListenerToButtons(getAdvanceBoxs);

function onclick(e) {
  switch (e.target.id) {
    case 'get_visa': {
      getVisa();
      break;
    }
    case 'get_webMoney': {
      getWebMoney();
      break;
    }
    case 'get_qiwi': {
      getQiwi();
      break;
    }
    case 'get_yandex': {
      getYandex();
      break;
    }
  }
}

function addEventListenerToButtons(getAdvanceBoxs) {
  let buttonsArray = Array.from(getAdvanceBoxs)
  buttonsArray.forEach((getBox) => {
    getBox.addEventListener('click', {
      handleEvent: onclick,
    })
  })
}

for(let visaInput of visaInputs) {
  visaInput.addEventListener('keyup', eventHandlerVisaCard)
}

function eventHandlerVisaCard(e) {
  if(e.target.id == 'card_number') {
    window.visaNumberValue = this.value
  } else if(e.target.id == 'card_cvv') {
    window.visaCvvValue = this.value
  } 
  else if(e.target.id == 'card_date') {
    window.visaDateValue = this.value
  } 
  else if(e.target.id == 'card_name') {
    window.visaNameValue = this.value
  }
}




function addPaymentTitleText() {
  paymentCardTitle.s_d = "none";
  currencyTitle.s_d = "block";
}

radioWraps.forEach((radioWrap) => {
  radioWrap.addEventListener('click', () => {
    paymentCardTitle.style.display = "block";
    currencyTitle.style.display = "none";
    visaAdvance.style.display = "none";
    visaCard.style.display = "block";
    webMoneyAdvance.style.display = "none";
    webMoneyCard.style.display = "block";
    qiwiAdvance.style.display = "none";
    qiwiCard.style.display = "block";
    yandexAdvance.style.display = "none";
    yandexCard.style.display = "block";
  })
});



function getVisa(e) {
  visaCardInfo = {
   visaNumber: visaNumberValue,
   visaCvv: visaCvvValue,
   visaDate: visaDateValue,
   visaUserName: visaNameValue,
 }
 console.log(visaCardInfo)

 if(number.value === '' ||  cvv.value === '' || date.value === '' || name.value === '') {
   return false
 }
 else {
  addPaymentTitleText(); 
   visaAdvance.style.display = "block";
   visaCard.style.display = "none"
 }
}

function getWebMoney() {
  addPaymentTitleText(); 
  webMoneyAdvance.style.display = "block";
  webMoneyCard.style.display = "none";
 
}

function getQiwi() {
  addPaymentTitleText()
  qiwiAdvance.style.display = "block";
  qiwiCard.style.display = "none";
}

function getYandex() {
  addPaymentTitleText()
  yandexAdvance.style.display = "block";
  yandexCard.style.display = "none";
}
