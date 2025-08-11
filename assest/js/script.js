let products = [
    { name: "Boot", price: "215 AZN", img: "../media/image/boot.png" },
    { name: "Dress", price: "300 AZN", img: "../media/image/dress.png" },
    { name: "Earring", price: "15 AZN", img: "../media/image/eagles.png" },
    { name: "Bag", price: "50 AZN", img: "../media/image/bag.png" }
];

const productsContainer = document.querySelector(".products");
function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(p => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name} <span>${p.price}</span></h3>
            <button class="add-to-cart">Səbətə əlavə et</button>
        `;
        productsContainer.appendChild(card);
    });
}
renderProducts();

let cart = [];

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        let productCard = e.target.closest(".card");
        let name = productCard.querySelector("h3").childNodes[0].textContent.trim();
        let price = productCard.querySelector("span").textContent.trim();
        let img = productCard.querySelector("img").src;

    
        let existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }

        updateCartMenu();
    }
});

function updateCartMenu() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <div style="display:flex;align-items:center;">
                <img src="${item.img}" alt="${item.name}">
                <span>${item.name} (${item.quantity})</span>
            </div>
            <strong>${item.price}</strong>
        `;
        cartItemsContainer.appendChild(div);
    });
}

const cartMenu = document.querySelector(".cart-menu");
const cartIcon = document.querySelector(".cart-icon");
const closeCartBtn = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
    cartMenu.classList.add("active");
});
closeCartBtn.addEventListener("click", () => {
    cartMenu.classList.remove("active");
});


const spider = document.querySelector(".spider");

function moveSpider() {
    const windowWidth = window.innerWidth - 1150;
    const windowHeight = window.innerHeight - 1150;

    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);



}


setInterval(moveSpider, 2500);

// İlk hərəkət
moveSpider();

