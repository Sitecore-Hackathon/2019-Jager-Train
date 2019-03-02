jQuery('a.scContentTreeNodeNormal').mouseover((element) => {
	var elementId = jQuery(element.currentTarget).attr('id');
    itemId = elementId.substring(10, 10000);
    console.log(itemId);
});