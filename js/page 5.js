const productList = [
    {
        id: 1,
        name: "Hoa hồng",
        price: "200000",
        image: "../asset/image/hoa.jpg",
        productLink: "https://giaohoatannoi247.com/shop-hoa-tuoi-tra-vinh.html"
    },
    {
        id: 2,
        name: "Hoa Tulip",
        price: "550000",
        image: "../asset/image/tulip.jpg",
        productLink: "https://giaohoatannoi247.com/bo-hoa-tulip.html"
    },
    {
        id: 3,
        name: "Hoa hướng dương",
        price: "250000",
        image: "../asset/image/huongduong.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },
    {
        id: 4,
        name: "Hoa lục bình",
        price: "300000",
        image: "../asset/image/lucbinh.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },
    {
        id: 5,
        name: "Hoa ly",
        price: "250000",
        image: "../asset/image/hoaly.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },
    {
        id: 6,
        name: "Hoa ly vàng",
        price: "250000",
        image: "../asset/image/hoalyvang.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },
    {
        id: 7,
        name: "Hoa cẩm tú cầu",
        price: "250000",
        image: "../asset/image/camtucau.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },
    {
        id: 8,
        name: "Hoa sen",
        price: "250000",
        image: "../asset/image/hoasen.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    }
];

function addProduct(id, name, price, image, link) {
    const productItem = document.createElement("div");
    productItem.className = "product-item";

    const productDiv1 = document.createElement("div");
    productDiv1.className = "product-image";

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;

    productDiv1.appendChild(productImage);

    const productDiv2 = document.createElement("div");
    productDiv2.className = "product-info";

    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = price + " VND";

    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";
    productLink.href = link;
    productLink.target = "_blank";

    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productLink);

    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    document.getElementById("product-list").appendChild(productItem);
}

productList.forEach(product => {
    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink
    );
});