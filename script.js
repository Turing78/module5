function accordion(){
	var x = document.getElementById('top_nav');
	var y = document.getElementById('banner');
	var z = document.getElementById('new_products');

	if (x.className==="row")
	{
		x.className+=' responsive';
			y.className+=' responsive';
				z.className+=' responsive';
	}
	else
	{
		x.className = 'row';
		y.className = 'row';
		z.className = 'row';
	}
}

function comprar(){
	var price = document.getElementById('price').value;
	var amount = document.getElementById('amount').value;
	var items = document.getElementById('items');
	var purchased = document.getElementById('purchased');

	items.value = Number(items.value) + Number(amount);
	purchased.value = Number(purchased.value) + Number(amount)*Number(price);

	document.getElementById('items_display').innerHTML = items.value.toString() + " items";
	document.getElementById('purchased_display').innerHTML = purchased.value.toString() + ' €';
}

function setModal(offer){
	var offer_id = offer.id;

	var img = "./imgs/detail_"+ offer_id + ".png";
	var text = document.getElementById("text_" + offer_id).innerHTML;

	document.getElementById("img_modal").src = img;
	document.getElementById("purchase_text").innerHTML = text;
}


var mql = window.matchMedia('(max-width: 767px)');

mql.addEventListener( "change", (e) => {
    if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log("The viewport is 768 pixels wide or less");
    document.getElementById("logo").src = './imgs/logo_akemi_xs.png';
  } else {
    /* the viewport is more than than 600 pixels wide */
    console.log("The viewport is 768 pixels wide");
    document.getElementById("logo").src = './imgs/logo_akemi.png';
  }
})

function adjustLogo(){
	if (window.matchMedia('(max-width: 767px)').matches) {
    /* the viewport is 600 pixels wide or less */
    console.log("The viewport is 768 pixels wide or less");
    document.getElementById("logo").src = './imgs/logo_akemi_xs.png';
  } else {
    /* the viewport is more than than 600 pixels wide */
    console.log("The viewport is 768 pixels wide");
    document.getElementById("logo").src = './imgs/logo_akemi.png';
  }
}
