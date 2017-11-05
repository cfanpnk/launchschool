function validateCreditCardNumber(cardNumber) {
  var odd_total = 0;
  var even_total = 0;
  var cc_number = cardNumber.split("").reverse();
  for (var i = 0, len = cc_number.length; i < len; i++) {
    if (i % 2 == 1) {
      cc_number[i] = (+cc_number[i] * 2) + "";
      if (cc_number[i].length > 1) {
        cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
      }
      else {
        cc_number[i] = +cc_number[i];
      }
      odd_total += cc_number[i];
    }
    else {
      even_total += +cc_number[i];
    }
  }
  if ((odd_total + even_total) % 10 == 0) {
    return true;
  }
  else {
    return false;
  }
}
$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('opened');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('accordion');
  });

  $(".button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var isValid = validateCreditCardNumber(cc_number);
    $(this).find(".success").toggle(isValid)
    $(this).find(".error").toggle(!isValid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");
    var birthstones = {
      January: 'garnet',
      February: 'amethyst',
      March: 'bloodstone',
      April: 'diamond',
      May: 'emerald',
      June: 'pearl, moonstone, or alexandrite',
      July: 'ruby',
      August: 'peridot',
      September: 'sapphire',
      October: 'tourmaline',
      November: 'topaz or citrine',
      December: 'turquoise, zircon, or tanzanite'
    }

    $stone.text("Your birthstone is " + birthstones[month]);
  });
});
