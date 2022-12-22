let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: "rgfd",
    name: "Casual Shirt",
    price: "45",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg"
  },
  {
    id: "werese",
    name: "Dress Shirt",
    price: "245",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg"
  },
  {
    id: "ascsf",
    name: "T-shirt",
    price: "68",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg"
  },
  {
    id: "asyuidf",
    name: "Mens Suit",
    price: "351",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg"
  }
];

let basket = [{
  id: "",
  item: ""
}];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x;
    return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="buttons">
            <i onCLick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onCLick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
    `;
  }).join(" "));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    });
  }
  else {
    search.item += 1;
  }

  console.log(selectedItem.id);
};
let decrement = (id) => {
  console.log(id);
};
let update = () => {};