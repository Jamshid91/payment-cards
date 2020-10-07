$(document).ready(function () {
  $('.close_button').click(function () {
    $('.payment_card').hide();
  })

  $(".card_content").hide();
  $(".visa__card").show();

  $(".radio_wrap").click(function () {
    var radioWrap = $(this).attr("data-radio");
    $(".card_content").hide();
    $("." + radioWrap).show();
  });

  $("#card_name").keypress(function (event) {
    var inputValue = event.which;
    // allow letters and whitespaces only.
    if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
      event.preventDefault();
    }
  });

});