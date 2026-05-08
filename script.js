function getPrice(fitType, qty){

  // REGULAR FIT PRICING
  if(fitType === "regular"){

    if(qty >= 1 && qty <= 5){
      return 510;
    }

    else if(qty >= 6 && qty <= 9){
      return 499;
    }

    else if(qty >= 10 && qty <= 15){
      return 479;
    }

    else{
      return 449;
    }

  }

  // OVERSIZED PRICING
  else{

    if(qty >= 1 && qty <= 5){
      return 799;
    }

    else if(qty >= 6 && qty <= 9){
      return 749;
    }

    else if(qty >= 10 && qty <= 15){
      return 649;
    }

    else{
      return 599;
    }

  }

}




function updatePrice(element){

  const card = element.closest('.card');

  const fitType = card.querySelector('.fitType').value;

  const qty = parseInt(card.querySelector('.qtyInput').value);

  const price = getPrice(fitType, qty);

  const total = price * qty;

  card.querySelector('.price').innerHTML =
  `₹${price} x ${qty} = ₹${total}`;
}




function orderNow(button, product){

  const card = button.closest('.card');

  const size = card.querySelectorAll('select')[0].value;

  const fabric = card.querySelectorAll('select')[1].value;

  const fitType = card.querySelector('.fitType').value;

  const qty = parseInt(card.querySelector('.qtyInput').value);

  const price = getPrice(fitType, qty);

  const total = price * qty;


  const message = `Hello KOBORIO INC,

I want to order:

Product: ${product}

Size: ${size}

Fabric: ${fabric}

Fit Type: ${fitType}

Quantity: ${qty}

Price Per T-Shirt: ₹${price}

Total Amount: ₹${total}

Please share payment details.`;


  window.open(
    `https://wa.me/919004130508?text=${encodeURIComponent(message)}`,
    '_blank'
  );

}




function customOrder(){

  const fabric = document.getElementById('fabric').value;

  const fit = document.getElementById('fitType').value;

  const print = document.getElementById('printType').value;

  const side = document.getElementById('colorType').value;


  const message = `Hello KOBORIO INC,

I want a custom t-shirt.

Fabric: ${fabric}

Fit Type: ${fit}

Print Type: ${print}

Print Side: ${side}

I will send my design image.`;


  window.open(
    `https://wa.me/919004130508?text=${encodeURIComponent(message)}`,
    '_blank'
  );

}




function wholesaleInquiry(){

  const message = `Hello KOBORIO INC,

I want wholesale pricing details for bulk t-shirt orders.`;


  window.open(
    `https://wa.me/919004130508?text=${encodeURIComponent(message)}`,
    '_blank'
  );

}




function partnerInquiry(){

  const message = `Hello KOBORIO INC,

I am interested in becoming a retail partner.`;


  window.open(
    `https://wa.me/919004130508?text=${encodeURIComponent(message)}`,
    '_blank'
  );

}