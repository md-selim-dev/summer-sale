
let titleCount = 1;
let totalPrice = 0;

const products = document.querySelectorAll('.card');
for(const product of products){
  product.addEventListener('click', function(){
    const title = product.querySelector('h2').innerText;
    // find out element
    const items =  document.getElementById('items');
    const priceElement = product.querySelector('p');
    // append element
    const item = document.createElement('p');
    item.innerText = `${titleCount}. ${title}`;
    items.appendChild(item)
    titleCount++;
    const priceText = priceElement.innerText.split(' ');
    const price = parseFloat(priceText);
    totalPrice = price + totalPrice;
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice
  })
}

const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function(){
  const totalPriceText = document.getElementById('total-price').innerText;
  const totalPrice = parseFloat(totalPriceText);

  const couponCodeElement = document.getElementById('coupon-code');
  const couponCodeValue = couponCodeElement.value;
  const couponCode = couponCodeValue.trim().split(' ').join('').toUpperCase();

  if(totalPrice >= 200){
    if(couponCode === 'SHELL200'){
      const dicsountPrice = totalPrice * 0.2;
      const dicsountPriceElement = document.getElementById('discount-price');
      dicsountPriceElement.innerText = dicsountPrice;
      const subTotal = totalPrice - dicsountPrice;
      const subTotalElement = document.getElementById('sub-total-price');
      subTotalElement.innerText = subTotal;
      couponCodeElement.value = ''

    }else{
      alert('Enter right coupon code')
      couponCodeElement.value = ''
    }
  }
  else{
    alert('Spend at least 200 tk')
    couponCodeElement.value = ''
  }
})