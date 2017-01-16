jQuery(document).ready(function(d) {
	
	var result = d('#just-contact-form-submit');
	
		result.click(function() {
			var cform = d("#just-contact-form")
			var ajaxLoad = d("#just-contact-form-ajax-load");
			
			if (cform[0].checkValidity()){
				result.hide();
				ajaxLoad.show();

				cform.ajaxForm({
					target: '#just-contact-form-result',
					success: function() 
					{
						ajaxLoad.hide();
						result.hide().slideDown('fast');
					},
				});	
			}	
		});
	//for selectize dropdown - added by clyde
	
	//selectizes country input
	var dd = d('#country');

		  var $select = dd.selectize({
			onChange: function(value) {
			  var $mobile = d('#mobile');

			  if (value === 'PH') {
				$mobile.attr('required');
				$mobile.collapse('show');
			  } else {
				$mobile.removeAttr('required');
				$mobile.collapse('hide');
			  }
			}
		  });

		  $select[0].selectize.setValue(d('#autodetect_country').val());

		  check = d('#book_with_us');
		  date = d('#field-preferred-date');
		  
		  //selectize adult, child, infant fields
		  adult = d('#adult').selectize()[0].selectize;
		  d('#infant').selectize();
		  d('#child').selectize();
		  
		  //if checked, disable the required fields
		  check.click(function() {
			if (check.is(':checked')) {
			  date.attr('required', true);
			  adult.enable();
			} else {
			  date.removeAttr('required');
			  adult.disable();
			}
		  })
});