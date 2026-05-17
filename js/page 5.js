const productList = [
    {
        id: 1,
        name: "Hoa hồng",
        price: "200000",
        image: "../asset/images/hoa.jpg",
        productLink:  "https://giaohoatannoi247.com/shop-hoa-tuoi-tra-vinh.html?srsltid=AfmBOooKtxbWh8eILx3T5JI4U8mGMC4Yby8pN_FfObOoKFmFw55mfh9n"
    },
    {
        id: 2,
        name: "Hoa Tulip ",
        price: "550000 VND ",
        image: "../asset/images/tulip.jpg",
        productLink: "https://giaohoatannoi247.com/bo-hoa-tulip.html"
    },

    {
        id: 3,
        name: "Hoa hướng dương ",
        price: "250000 VND ",
        image: "../asset/images/huongduong.jpg",
        productLink: "https://giaohoatannoi247.com/bo-huong-duong-dep.html"
    },

   
    
];

function addProduct(id, name, price, image, link)
{
    //Khai báo item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-2");

    //Div hình
    const productDiv1 = document.createElement("div");
    productDiv1.setAttribute("class", "product-image");

    //Tạo hình
    const productImage = document.createElement("img");
    productImage.setAttribute("src", image);
    productImage.setAttribute("alt", name);
    productImage.setAttribute("class", "img-thumbnail img-fluid");

    //Gán hình
    productDiv1.appendChild(productImage);

    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = price + " VND";

    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";

    productLink.setAttribute("href", link);
    productLink.setAttribute("target", "_blank");


    //Gán vào div2
    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productLink);


    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    //Gán vào danh sách
    const productContainer = document.getElementById("product-list");

    productContainer.appendChild(productItem);
}


//Render sản phẩm
productList.forEach(function(product) {

    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink
    );

});