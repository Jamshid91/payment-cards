let getVisaButton = document.querySelector(".get_visa");
let visaWrap = document.querySelector(".send_currency");
let currencyTitle = document.querySelector(".currency_title");
let paymentCardTitle = document.querySelector(".payment_card_title");
let radioWraps = document.querySelectorAll(".radio_wrap");
let reviews = document.querySelectorAll(".review");
let sendAdvancePayment = document.querySelector(".send_advance_payment");
let paymentCardInfo = document.querySelector(".payment_card_info");

radioWraps.forEach((radioWrap) => {
  radioWrap.addEventListener('click', () => {
    paymentCardTitle.style.display = "block";
    currencyTitle.style.display = "none";
    sendAdvancePayment.style.display = "none";
    paymentCardInfo.style.display = "block";
  })
});
getVisaButton.addEventListener("click", () => {
  paymentCardTitle.style.display = "none";
  currencyTitle.style.display = "block";
  sendAdvancePayment.style.display = "block";
  paymentCardInfo.style.display = "none";
});