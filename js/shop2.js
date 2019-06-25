'use strict';
const basketBtn = document.querySelector('.basketBtn');
const basketContainer = document.querySelector('.dropdown-menu');
const basketTable = document.querySelector("table.table tbody");

let addButtons = document.querySelectorAll('.btnBuy');
addButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let productId = event.target.parentNode.dataset.id;
        let productName = event.target.parentNode.querySelector('.name').innerText;
        let productPrice = event.target.parentNode.querySelector('.price').innerText.slice(0, -2).replace(/\s+/g, '');
        basket.addProduct({ id: productId, name: productName, price: productPrice })
    })
});


let basket = {

    products: {},

    addProduct(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1,
            }
        } else {
            this.products[product.id].count++;
        };
        this.renderBasket(product);
        this.updateTotalSum();
        this.addRemoveFromBasketListeners();
    },

       

 
    renderBasket(product) {
        let productExists = document.querySelector(`.productId${product.id}`);
        if (productExists) {
            productExists.querySelector('.productCount').textContent++;
        }
        else {
            let productRow = 
            `<tr class="productId${product.id}">
                <td>${product.name}</td>
                <td>${product.price} &#8381;</td>
                <td class="productCount">1</td>
                <td><img class="removeProduct" src="./img/1485477104-basket_78591.png" data-id="${product.id}"></img></td></tr>`;
            basketTable.insertAdjacentHTML("beforeend", productRow);
        }
    },
    
    countTotalSum() {
        let totalSum = 0;
        for (prod in this.products) {
            totalSum += this.products[prod].price * this.products[prod].count;
        }
        return totalSum;
    },

    updateTotalSum() {
        document.querySelector('.totalSum').textContent = (`${this.countTotalSum()} &#8381;`);
    },

    addRemoveFromBasketListeners() {
        let buttonsRemove = document.querySelectorAll('.removeProduct');
        for (let i = 0; i < buttonsRemove.length; i++) {
            buttonsRemove[i].addEventListener('click', this.removeProduct);
        }
    },

    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        let productCount = event.target.parentNode.parentNode.querySelector('.productCount');
        if (basket.products[id].count == 1 && productCount.textContent == 1) {
            delete basket.products[id];
            productCount.parentNode.remove();
        } else {
            basket.products[id].count--;
            productCount.textContent--;
        }
        basket.updateTotalSum();
    },
}