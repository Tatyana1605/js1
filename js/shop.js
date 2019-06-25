'use strict';

const basketBtn = document.querySelector('.btnBasket');
const basketContainer = document.querySelector('.menu');
const basketTable = document.querySelector("table.table tbody");

basketBtn.addEventListener('click', function (event) {
    if (basketContainer.classList.contains('menuHidden')) {
        basketContainer.classList.remove('menuHidden');
    } else {
        basketContainer.classList.add('menuHidden');
    }
});

let basketBtns = document.querySelectorAll('.btnBuy');
 
basketBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name })
    })
});

let basket = {
    products: {},
 
    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    },

 
    removeProductListener(event) {
    
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    
    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            
            btns[i].addEventListener('click', this.removeProductListener);
        }
    },

     
    renderTotalSum() {
        document.querySelector('.totalSum').textContent = this.getTotalSum();
    },

    
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price} &#8381; </td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td ><img class="  productRemoveBtn" src="./img/1485477104-basket_78591.png"  data-id="${product.id}"></img></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

     
    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    
    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

     
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

   
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}