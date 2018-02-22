$(function() {
    $('#number-chooser').submit(event => {
      event.preventDefault();
      $(".js-results").empty();
      const num = parseInt( $(this).find(
        'input[name="number-choice"]').val());


            const result = [];
        for (let i = 1; i <= num; i++) {
            if (i % 15 === 0) {
             result.push($(`<div class = "fizz-buz-item fizzbuzz"><span>fizzbuzz</span></div>`));
         } else if (i % 5 === 0) {
              result.push($(`<div class = "fizz-buz-item buzz"><span>buzz</span></div>`));
          } else if (i % 3 === 0) {
               result.push($(`<div class = "fizz-buz-item fizz"><span>fizz</span></div>`));
         } else {
                result.push($(`<div class = "fizz-buz-item"><span></span></div>`));
            }
        }
        $(".js-results").append(result);
    });
});