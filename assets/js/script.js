const inputs = document.querySelectorAll('.input_card');
const getButton = document.querySelector('.get_button');
const getButtonYandex = document.querySelector('.get_button_yandex');

const [visaNumber, visaCvv, visaDate, visaName, webMoney, qiwi, yandex] = inputs;



visaNumber.addEventListener('keydown', cardNumberValidate);
visaDate.addEventListener('keydown', cardDateValidate);
yandex.addEventListener('keydown', cardNumberValidate);

getButton.addEventListener('click', () => {
  if (visaNumber.value == '' || visaCvv.value == '' || visaDate.value == '' || visaName.value == '') {
    visaNumber.style.border = '1px solid red';
    visaCvv.style.border = '1px solid red';
    visaDate.style.border = '1px solid red';
    visaName.style.border = '1px solid red';
  } else {
    visaNumber.style.border = '';
    visaCvv.style.border = '';
    visaDate.style.border = '';
    visaName.style.border = '';
  }
});

getButtonYandex.addEventListener('click', () => {
  if (yandex.value == '') {
    yandex.style.border = '1px solid red';
  } else {
    yandex.style.border = '';
  }
});

function cardNumberValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16)) {
    e.preventDefault();
    return false;
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
}


function cardDateValidate(e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 5)) {
    e.preventDefault();
    return false;
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{2})+(?!\d))/g, "/").split('').reverse().join('').trim();
}