// نمایش پیام هنگام کلیک روی دکمه خرید
function addToCart(productName) {
    alert("محصول " + productName + " به سبد خرید اضافه شد!");
}

// جستجوی محصولات
function searchProducts() {
    let input = document.getElementById("search").value;
    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        let name = product.innerText;

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}