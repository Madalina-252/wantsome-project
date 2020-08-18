var prod1 = {
    image: "images/norway.jpg",
    title: " Bergen ",
    price: 480,
    product_id: 19,
    currency: " RON"
  };
  
  var prod2 = {
    image: "images/bavaria.jpg",
    title: " The Alps ",
    price: 450,
    product_id: 14,
    currency: " RON"
  };
  
  var prod3 = {
    image: "images/grays.jpg",
    title: " Sevilla ",
    price: 420,
    product_id: 12,
    currency: " RON"
  };

  var prod4 = {
    image: "images/roses.jpg",
    title: " Granada Rose Garden ",
    price: 420,
    product_id: 15,
    currency: " RON"
  };
  
  
  var myProducts = [prod1, prod2, prod3, prod4];
  
  for (var i = 0; i < myProducts.length; i++) {
    showCard(myProducts[i].image, myProducts[i].title, myProducts[i].price, myProducts[i].currency, myProducts[i].product_id, i);
  }
  
  function showCard(image, title, price, currency, product_id, position) {
    var card = document.createElement("div");
    card.className = "card";
    var visual = document.createElement("img");
    visual.src = image;
    var priceElement = document.createElement("span");
    priceElement.innerText = price;
    var prodTitle = document.createElement("span");
    prodTitle.innerText = title;
    var currencyElement = document.createElement ("span");
    currencyElement.innerText = currency;
    card.appendChild(visual);
    card.appendChild(priceElement);
    card.appendChild(currencyElement);
    card.appendChild(prodTitle);
    document.getElementById("container").appendChild(card);
    
    var button = document.createElement("button");
    button.id = position;
    button.setAttribute("addToCart", true);
    button.innerText = "Add to cart";
    card.appendChild(button);
    var buttonDetails = document.createElement("button");
    buttonDetails.id = position;
    buttonDetails.setAttribute("details", true);
    buttonDetails.innerText = "Details";
    card.appendChild(buttonDetails);

  }
  
  var container = document.getElementById("container");
  container.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      if (event.target.getAttribute("addToCart")==="true") {
        console.log("Click pe buttonul add to cart cu id ", event.target.id);
        alert("Added: " + myProducts[event.target.id].title)
      }
      if (event.target.getAttribute("details")==="true") {
        window.location.href="detail-page.html?product_id=" + event.target.id;
        // console.log("Click pe buttonul details cu id ",  myProducts[event.target.id].product_id);
        // alert("Details: " + myProducts[event.target.id].title)
      }
    }
  });
  
  // Filter

