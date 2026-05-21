const productList = [
    {
        id: 1,
        name: "Hoa hồng",
        category: "hong",
        price: "200000",
        image: "../asset/image/hoa.jpg",
        productLink: "https://giaohoatannoi247.com/shop-hoa-tuoi-tra-vinh.html",
        description: "Hoa hồng tượng trưng cho tình yêu và sự lãng mạn."
    },
    {
        id: 2,
        name: "Hoa Tulip",
        category: "tulip",
        price: "550000",
        image: "../asset/image/tulip.jpg",
        productLink: "https://giaohoatannoi247.com/bo-hoa-tulip.html",
        description: "Hoa tulip mang vẻ đẹp sang trọng và tinh tế."
    },
    {
        id: 3,
        name: "Hoa hướng dương",
        category: "huongduong",
        price: "250000",
        image: "../asset/image/huongduong.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Hoa hướng dương tượng trưng cho niềm tin và hy vọng."
    },
    {
        id: 4,
        name: "Hoa lục bình",
        category: "lucbinh",
        price: "300000",
        image: "../asset/image/lucbinh.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Hoa lục bình mang nét đẹp dân dã miền quê."
    },
    {
        id: 5,
        name: "Hoa ly",
        category: "ly",
        price: "250000",
        image: "../asset/image/hoaly.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Hoa ly tượng trưng cho sự thanh cao và quý phái."
    },
    {
        id: 6,
        name: "Hoa ly vàng",
        category: "ly",
        price: "250000",
        image: "../asset/image/hoalyvang.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Hoa ly vàng mang ý nghĩa may mắn và hạnh phúc."
    },
    {
        id: 7,
        name: "Hoa cẩm tú cầu",
        category: "camtucau",
        price: "250000",
        image: "../asset/image/camtucau.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Cẩm tú cầu tượng trưng cho sự chân thành."
    },
    {
        id: 8,
        name: "Hoa sen",
        category: "sen",
        price: "250000",
        image: "../asset/image/hoasen.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html",
        description: "Hoa sen là biểu tượng của sự thuần khiết."
    }
];

// giỏ hàng
let cartCount = 0;

// tạo sản phẩm
function addProduct(id, name, price, image, link, description) {

    const productItem = document.createElement("div");
    productItem.className = "product-item";

    // hình ảnh
    const productDiv1 = document.createElement("div");
    productDiv1.className = "product-image";

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;

    productDiv1.appendChild(productImage);

    // thông tin
    const productDiv2 = document.createElement("div");
    productDiv2.className = "product-info";

    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = price + " VND";

    // mô tả
    const productDesc = document.createElement("p");
    productDesc.className = "desc";
    productDesc.innerText = description;

    // link chi tiết
    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";
    productLink.href = link;
    productLink.target = "_blank";

    // nút thêm giỏ hàng
    const cartBtn = document.createElement("button");
    cartBtn.className = "cart-btn";
    cartBtn.innerText = "Thêm giỏ hàng";

    cartBtn.onclick = function () {

        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;
    };

    // nút xóa
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Xóa";

    deleteBtn.onclick = function () {

        productItem.remove();
    };

    // thêm vào div
    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productDesc);
    productDiv2.appendChild(productLink);
    productDiv2.appendChild(cartBtn);
    productDiv2.appendChild(deleteBtn);

    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    document.getElementById("product-list").appendChild(productItem);
}

// hiển thị tất cả sản phẩm
productList.forEach(product => {

    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink,
        product.description
    );

});

// lọc sản phẩm
function filterProduct(category) {

    document.getElementById("product-list").innerHTML = "";

    let filteredProducts;

    if (category === "all") {

        filteredProducts = productList;

    } else {

        filteredProducts = productList.filter(product =>
            product.category === category
        );
    }

    filteredProducts.forEach(product => {

        addProduct(
            product.id,
            product.name,
            product.price,
            product.image,
            product.productLink,
            product.description
        );

    });
}

// hiện liên hệ
function showContact(){

    const box = document.getElementById("contact-box");

    if(box.style.display === "block"){

        box.style.display = "none";

    }else{

        box.style.display = "block";
    }
}