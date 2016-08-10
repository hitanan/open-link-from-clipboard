//alert("1");

jQuery(".listing-rows .chotot-list-row").each(function(){
	console.log(jQuery(this));
	if (jQuery(this).has('span.ad-type-suf').length ) {
		jQuery(this).remove();
	}
});