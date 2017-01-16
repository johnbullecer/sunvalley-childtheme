jQuery(document).ready(function(){

  dd = c('#country');

  var $select = dd.selectize({
    onChange: function(value) {
      var $mobile = c('#mobile');

      if (value === 'PH') {
        $mobile.attr('required');
        $mobile.collapse('show');
      } else {
        $mobile.removeAttr('required');
        $mobile.collapse('hide');
      }

    }
  });

  $select[0].selectize.setValue('PH');

  check = c('#book_with_us');
  date = c('#field-preferred-date');
  adult = c('#adult').selectize()[0].selectize;

  c('#infant').selectize();
  c('#child').selectize();

  check.click(function() {
    if (check.is(':checked')) {
      date.attr('required', true)
      adult.enable();
    } else {
      date.removeAttr('required')
      adult.disable();
    }
  })

});