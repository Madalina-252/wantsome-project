var prod1 = {
    image: "images/norway.jpg",
    title: " Bergen ",
    price: "480 RON"  
  };
  
  var prod2 = {
    image: "images/bavaria.jpg",
    title: " The Alps ",
    price: "450 RON"
  };
  
  var prod3 = {
    image: "images/architecture.jpg",
    title: " Sevilla ",
    price: "420 RON"
  };

  var prod4 = {
    image: "images/roses.jpg",
    title: " Granada Rose Garden ",
    price: "420 RON"
  };
  
  
  var myProducts = [prod1, prod2, prod3, prod4];
  
  for (var i = 0; i < myProducts.length; i++) {
    showCard(myProducts[i].image, myProducts[i].title, myProducts[i].price, i);
  }
  
  function showCard(image, title, price, position) {
    var card = document.createElement("div");
    card.className = "card";
    var visual = document.createElement("img");
    visual.src = image;
    var priceElement = document.createElement("span");
    priceElement.innerText = price;
    var prodTitle = document.createElement("span");
    prodTitle.innerText = title;
    card.appendChild(visual);
    card.appendChild(priceElement);
    card.appendChild(prodTitle);
    document.getElementById("container").appendChild(card);
    var button = document.createElement("button");
    button.id = position;
    button.innerText = "Add to cart";
    card.appendChild(button);

  }
  
  var container = document.getElementById("container");
  container.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      console.log("Click pe buttonul", event.target.id);
      alert("Added: " + myProducts[event.target.id].title)
    }
  });
  
  