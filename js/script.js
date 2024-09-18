const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}
////////////////////////////////////


var MainImg = document.getElementById("MainImg");
  var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
  MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src;
}
  
  smallimg[4].onclick = function(){
  MainImg.src = smallimg[4].src;
}
   

///////////////




// // Get the current page URL
// const currentPage = window.location.pathname;

// // Logic for Product Page
// if (currentPage.includes('product.html')) {
//     // Product Page Logic
//     // Initialize cartItems from localStorage or an empty array
//     let cartItems = localStorage.getItem('cartItems');
//     cartItems = cartItems ? JSON.parse(cartItems) : [];

//     // Add to cart event listener for the product page
//     const addToCartButton = document.querySelector('.btn.normal');
//     const cartBadges = document.querySelectorAll('.quantity');

//     addToCartButton.addEventListener('click', () => {
//         const productName = document.querySelector('.single-pro-details h4').textContent;
//         const productPrice = parseFloat(document.querySelector('.single-pro-details h2').textContent.replace('$', ''));
//         const productImage = document.querySelector('.single-pro-image img').src;
//         const productQuantity = parseInt(document.querySelector('.single-pro-details input[type="number"]').value);

//         const product = {
//             name: productName,
//             price: productPrice,
//             quantity: productQuantity,
//             img: productImage
//         };

//         const existingProduct = cartItems.find(item => item.name === product.name);

//         if (existingProduct) {
//             existingProduct.quantity += productQuantity;
//         } else {
//             cartItems.push(product);
//         }

//         updateCart(cartItems);
//         displayNoOfItemsInCart();
//         alert(`${productName} is added to the cart.`);
//     });

//     function displayNoOfItemsInCart() {
//         cartBadges.forEach(badge => {
//             badge.textContent = cartItems.length;
//         });
//     }

//     function updateCart(arr) {
//         localStorage.setItem('cartItems', JSON.stringify(arr));
//     }

//     // Initial update of cart item count
//     displayNoOfItemsInCart();
// }

// // Logic for Cart Page
// if (currentPage.includes('cart.html')) {
//     // Cart Page Logic
//     let cartItems = localStorage.getItem('cartItems');
//     cartItems = cartItems ? JSON.parse(cartItems) : [];

//     const cartItemsContainer = document.getElementById('cart-items-list');
//     const cartSubtotal = document.getElementById('cart-subtotal');
//     const cartTax = document.getElementById('cart-tax');
//     const cartTotal = document.getElementById('cart-total');

//     function renderCartItems() {
//         cartItemsContainer.innerHTML = '';

//         if (cartItems.length === 0) {
//             cartItemsContainer.innerHTML = '<tr><td colspan="4">Your Cart is empty.</td></tr>';
//             return;
//         }

//         cartItems.forEach((item, index) => {
//             const cartRow = document.createElement('tr');
//             cartRow.innerHTML = `
//                 <td><img src="${item.img}" alt="${item.name}" style="width: 50px;"/> ${item.name}</td>
//                 <td>$${item.price.toFixed(2)}</td>
//                 <td>
//                     <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
//                     ${item.quantity}
//                     <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
//                 </td>
//                 <td>$${(item.price * item.quantity).toFixed(2)}</td>
//                 <td><button class="remove-item" onclick="removeItemFromCart(${index})">Remove</button></td>
//             `;
//             cartItemsContainer.appendChild(cartRow);
//         });

//         updateCartSummary();
//     }

//     function updateCartSummary() {
//         let subtotal = 0;
//         cartItems.forEach(item => {
//             subtotal += item.price * item.quantity;
//         });

//         const tax = subtotal * 0.10;
//         const total = subtotal + tax;

//         cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
//         cartTax.textContent = `$${tax.toFixed(2)}`;
//         cartTotal.textContent = `$${total.toFixed(2)}`;
//     }

//     function changeQuantity(index, amount) {
//         cartItems[index].quantity += amount;

//         if (cartItems[index].quantity <= 0) {
//             cartItems[index].quantity = 1;
//         }

//         updateCart(cartItems);
//         renderCartItems();
//     }

//     function removeItemFromCart(index) {
//         cartItems.splice(index, 1);
//         updateCart(cartItems);
//         renderCartItems();
//     }

//     function updateCart(arr) {
//         localStorage.setItem('cartItems', JSON.stringify(arr));
//     }

//     renderCartItems();
// }
