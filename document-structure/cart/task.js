'use strict';
const productCart = document.querySelector('div.cart__products');
const productsList = Array.from(document.querySelectorAll('div.product'));

function cartTemplate(productId, productImg, productCount) {
    let newDiv = document.createElement('div');
    newDiv.className = 'cart__product';
    newDiv.dataset.id = productId;

    let newImage = document.createElement('cart__product');
    newImage.className = 'cart__product-image';
    newImage.src = productImg;

    newDiv.append(newImage);

    let newCountDiv = document.createElement('div');
    newCountDiv.className = 'cart__product-count';
    newCountDiv.textContent = productCount;
    newDiv.append(newCountDiv);

    return newDiv;
}

   productsList.forEach((product) => {
    Array.from(product.querySelectorAll('div.product__quantity-control')).forEach((quantityControl) => {
    quantityControl.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (evt.target.classList.contains('product__quantity-control-inc')) {
            product.querySelector('div.product__quantity-value').textContent++;
        } else if (evt.target.classList.contains('product__quantity-control-dec')) {
            product.querySelector('div.product__quantity-value').textContent--;
        }
    }, false)
})

let productId = product.dataset.id;
let productImg = product.querySelector('img.product__image').src;


product.querySelector('div.product__add').addEventListener('click', (evt) => {
    evt.preventDefault();
    let nowProductCart = Array.from(productCart.querySelectorAll('.cart__product')).find(item => item.dataset.id == productId)
    if (nowProductCart) {
        nowProductCart.querySelector('div.cart__product-count').textContent = nowProductCart.querySelector('div.cart__product-count').textContent + product.querySelector('div.product__quantity-value').textContent;
     } else {
        productCart.append(cartTemplate(productId, productImg, product.querySelector('div.product__quantity-value').textContent));
     }
  }, false);

})

