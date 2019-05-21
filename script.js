function accordion(){
	var x = document.getElementById("top_nav");
	if (x.className ==="row")
		x.className+=' responsive';
	else
		x.className='row';
	var x = document.getElementById("banner");
	if (x.className ==="row")
		x.className+=' responsive';
	else
		x.className='row';
	var x = document.getElementById("new_products");
	if (x.className ==="row")
		x.className+=' responsive';
	else
		x.className='row';
}

function comprar(){
	var items = document.getElementById('items');
	var purchased = document.getElementById('purchased');
	var amount = document.getElementById('amount').value;
	var price = document.getElementById('price').value;

	items.value = Number(items.value) + Number(amount);
	purchased.value = Number(purchased.value) + Number(amount)*Number(price);

	document.getElementById('items_display').innerHTML = items.value.toString() + ' ITEMS';
	document.getElementById('purchased_display').innerHTML = purchased.value.toString() + '$';

}
