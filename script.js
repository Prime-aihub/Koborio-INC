const remotePincodes = [

  // MANIPUR

  "795147",
  "795141",
  "795145",
  "795127",
  "795131",
  "795143",
  "795142",


  // ASSAM

  "788830",
  "788831",
  "788818",
  "788931",
  "788819",
  "788832",


  // KARBI ANGLONG

  "782486",
  "782485",


  // ARUNACHAL PRADESH

  "792122",
  "792104",
  "791102",
  "792101",
  "791001",
  "791122",


  // SIKKIM

  "737120",
  "737102",
  "737116",
  "737131",


  // NAGALAND

  "798621",
  "798611",
  "798625",
  "798612",


  // MIZORAM

  "796321",
  "796901",
  "796891",
  "796501",


  // HIMACHAL / LADAKH

  "172114",
  "175132",
  "172113",
  "194302",
  "194101",


  // ANDAMAN

  "744302",
  "744202",
  "744204",
  "744301"

];




window.addEventListener("load", function(){

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

  }, 1800);

});




function getPrice(fitType, qty){

  fitType = fitType.toLowerCase();




  /* ========================= */
  /* REGULAR */
  /* ========================= */

  if(fitType === "regular"){

    if(qty >= 20){

      return 449;

    }

    else if(qty >= 10){

      return 480;

    }

    else if(qty >= 6){

      return 499;

    }

    else{

      return 549;

    }

  }






  /* ========================= */
  /* OVERSIZED */
  /* ========================= */

  else if(fitType === "oversized"){

    if(qty >= 20){

      return 549;

    }

    else if(qty >= 10){

      return 599;

    }

    else if(qty >= 6){

      return 649;

    }

    else{

      return 699;

    }

  }






  /* ========================= */
  /* KIDS */
  /* ========================= */

  else if(fitType === "kids"){

    if(qty >= 20){

      return 349;

    }

    else if(qty >= 10){

      return 379;

    }

    else if(qty >= 6){

      return 399;

    }

    else{

      return 449;

    }

  }

}



function getShipping(qty, pincode){

  let shipping = 0;


  // NORMAL SHIPPING

  if(qty == 1){

    shipping = 110;

  }

  else if(qty == 2){

    shipping = 140;

  }

  else if(qty == 3){

    shipping = 180;

  }

  else if(qty == 4){

    shipping = 220;

  }

  else{

    shipping = 280;

  }


  // REMOTE SURCHARGE

  if(remotePincodes.includes(pincode)){

    shipping += 120;
  }


  return shipping;

}




function updatePrice(element){

  const card = element.closest('.card');

  const fitType =
  card.querySelector('.fitType').value;

  const qty =
  parseInt(card.querySelector('.qtyInput').value);

  const pincode =
  card.querySelector('.pincodeInput').value;


  const price =
  getPrice(fitType, qty);

  const total =
  price * qty;


  const shipping =
  getShipping(qty, pincode);

  const finalTotal =
  total + shipping;


  card.querySelector('.price').innerHTML =
  `₹${price} x ${qty} = ₹${total}`;


  if(remotePincodes.includes(pincode)){

    card.querySelector('.shipping-price').innerHTML =
    `Shipping : ₹${shipping} (Remote Area Surcharge Applied)`;

  }

  else{

    card.querySelector('.shipping-price').innerHTML =
    `Shipping : ₹${shipping}`;

  }


  card.querySelector('.final-total').innerHTML =
  `Final Total : ₹${finalTotal}`;

}




function orderNow(button, product){

  const card = button.closest('.card');


  const size =
  card.querySelectorAll('select')[0].value;

  const fabric =
  card.querySelectorAll('select')[1].value;

  const fitType =
  card.querySelector('.fitType').value;

  const qty =
  parseInt(card.querySelector('.qtyInput').value);

  const pincode =
  card.querySelector('.pincodeInput').value;


  const price =
  getPrice(fitType, qty);

  const total =
  price * qty;


  const shipping =
  getShipping(qty, pincode);

  const finalTotal =
  total + shipping;


  const message = `Hello KOBORIO INC,

I want to order:

Product: ${product}

Size: ${size}

Fabric: ${fabric}

Fit Type: ${fitType}

Quantity: ${qty}

Delivery Pincode: ${pincode}

Price Per T-Shirt: ₹${price}

Product Total: ₹${total}

Shipping Charge: ₹${shipping}

Final Amount: ₹${finalTotal}

Please share payment details.`;


  window.open(
    `https://wa.me/919004130508?text=${encodeURIComponent(message)}`,
    '_blank'
  );

}




function customOrder(){

  const fabric =
  document.getElementById('fabric').value;

  const fit =
  document.getElementById('fitType').value;

  const print =
  document.getElementById('printType').value;

  const side =
  document.getElementById('colorType').value;


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
