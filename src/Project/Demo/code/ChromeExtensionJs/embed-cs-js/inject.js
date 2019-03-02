// this is the code which will be injected into a given page...

(function() {

	console.log('Viva Jores!'); // https://en.wikipedia.org/wiki/Zhores_Alferov
	
	jQuery('a.scContentTreeNodeNormal').mouseover((element) => {
		var elementId = jQuery(element.currentTarget).attr('id');
		itemId = elementId.substring(10, 10000);
		console.log(itemId);
	});

})();