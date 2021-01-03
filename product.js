function renderSingleProduct(product) {
  const productContainer = document.createElement("div");

  productContainer.classList.add("card");
  productContainer.classList.add("product");

  // css
  productContainer.style.width = "width: 18rem";
  productContainer.style.display = "flex";
  productContainer.style.flexDirection = "column";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-body");

  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";

  const nameTag = document.createElement("span");
  nameTag.innerHTML = product.name;

  const priceTag = document.createElement("span");
  priceTag.innerHTML = "Price: " + product.price + " €";

  const productImg = document.createElement("img");
  productImg.classList.add("card-img-top");
  productImg.src = product.image;

  const buyButton = document.createElement("button");
  buyButton.classList.add("btn");
  buyButton.classList.add("btn-primary");
  buyButton.innerHTML = "Buy";

  buyButton.onclick = function () {
    // data layer push
    if (window.dataLayer) {
      dataLayer.push({
        name: "click_on_buy",
        id: product._id,
        productName: product.name,
        price: product.price,
        image: product.image,
        created_at: new Date(),
      });
    } else {
      console.warn("Analytics won't work without a proper data layer setup!");
    }

    console.log("pushed to data layer");
  };

  cardContainer.appendChild(nameTag);
  cardContainer.appendChild(productImg);
  cardContainer.appendChild(priceTag);
  cardContainer.appendChild(buyButton);

  // oldest parent
  productContainer.appendChild(cardContainer);

  // push to the list
  document.getElementById("product-container").appendChild(productContainer);
}

// render
// to get the product

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('myParam');

async function getProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  console.log(productId);


  const response = await fetch(`http://localhost:3000/products/${productId}`)
   const data = await response.json()
   
   console.log(data)
   renderSingleProduct(data)
}

getProduct();
