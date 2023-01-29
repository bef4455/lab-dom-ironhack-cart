// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span")
  //console.log("the price span", price)

  const priceNumber = +price.innerHTML // the price of the product


  const quantity = product.querySelector(".quantity input")
  const quantityNumber = +quantity.value

  const subTotal = priceNumber * quantityNumber

  const realSubTotal = product.querySelector(".subtotal span")
  return realSubTotal.innerHTML = subTotal
  //console.log(subTotal)


  //... your code goes here
}

function calculateAll() {


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const products = document.querySelectorAll('.product');
  let calculer = 0;

  products.forEach((product) => {
    updateSubtotal(product)
    calculer += updateSubtotal(product)
  });
  const finalTotals = document.querySelector('#total-value > span')
  finalTotals.textContent = calculer
  console.log(finalTotals.textContent)

}



// console.log(products)
// end of test
// Calculer le total des produits finaux du "cart" 

// const subTotalProducts = subTotal + subTotal
// const subTotal = document.querySelector(".total-value span");





// ITERATION 2



//... your code goes here 

// ITERATION 3
//... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
