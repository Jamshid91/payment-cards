const inputs = document.querySelectorAll('.input_card');
const buttons = document.querySelectorAll('.get_button');

const [visaNumber, visaCvv, visaDate, visaName, webMoney, qiwi, yandex] = inputs;
const [visaBtn, webMbtn, qiwiBtn, yandexBtn] = buttons;


visaNumber.addEventListener('keydown', cardNumberValidate);
visaDate.addEventListener('keydown', cardDateValidate);
yandex.addEventListener('keydown', cardNumberValidate);

function cardNumberValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16)) {
    e.preventDefault();
    return false;
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
};

function cardDateValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 5)) {
    e.preventDefault();
    return false;
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{2})+(?!\d))/g, "/").split('').reverse().join('').trim();
};

// valid text
// const btn = visaBtn.addEventListener;

// btn('click', () => {
//   if (visaNumber.value == '') {
//     visaNumber.style.border = '1px solid red';
//   } else {
//     visaNumber.style.border = '';
//   }
// });

// btn('click', () => {
//   if (visaCvv.value == '') {
//     visaCvv.style.border = '1px solid red';
//   } else {
//     visaCvv.style.border = '';
//   }
// });
// btn('click', () => {
//   if (visaDate.value == '') {
//     visaDate.style.border = '1px solid red';
//   } else {
//     visaDate.style.border = '';
//   }
// });

// btn('click', () => {
//   if (visaName.value == '') {
//     visaName.style.border = '1px solid red';
//   } else {
//     visaName.style.border = '';
//   }
// });

// yandexBtn.addEventListener('click', () => {
//   if (yandex.value == '') {
//     yandex.style.border = '1px solid red';
//   } else {
//     yandex.style.border = '';
//   }
// });

// qiwiBtn.addEventListener('click', () => {
//   if (qiwi.value == '') {
//     qiwi.style.border = '1px solid red';
//   } else {
//     qiwi.style.border = '';
//   }
// });

// webMbtn.addEventListener('click', () => {
//   if (webMoney.value == '') {
//     webMoney.style.border = '1px solid red';
//   } else {
//     webMoney.style.border = '';
//   }
// });