let cart = [];

document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        let productCard = btn.parentElement;
        let name = productCard.querySelector("h3").childNodes[0].textContent.trim();
        let price = productCard.querySelector("span").textContent.trim();
        let img = productCard.querySelector("img").src;

    
        cart.push({ name, price, img });

        alert(`${name} səbətə əlavə olundu!`);
        console.log(cart);
    });
});

const cartIcon = document.querySelector(".cart-icon");
if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Səbət boşdur!");
            return;
        }

        let cartList = "Səbətiniz:\n\n";
        cart.forEach((item, i) => {
            cartList += `${i + 1}. ${item.name} - ${item.price}\n`;
        });

        alert(cartList);
    });
}
