var prod1 = {
    image: "src/imageingres.jpg",
    title: " Product 1 ",
    price: 0
  };
  
  var prod2 = {
    image: "src/imageingres.jpg",
    title: " Product 2 ",
    price: 0
  };
  
  var prod3 = {
    image: "src/imageingres.jpg",
    title: " Product 3 ",
    price: 0
  };
  
  var prod4 = {
    image: "src/imageingres.jpg",
    title: " Product 4 ",
    price: 0 
  };
  
  var prod5 = {
    image: "src/imageingres.jpg",
    title: " Product 5 ",
    price: 0
  };
  
  var prod6 = {
    image: "src/imageingres.jpg",
    title: " Product 6 ",
    price: 0
  };
  
  var myProducts = [prod1, prod2, prod3, prod4, prod5, prod6];
  
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
      alert("Added " + myProducts[event.target.id].title)
    }
  });
  
  