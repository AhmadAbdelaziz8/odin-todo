export default function generateJuices() {
  // add juices-page title
  const juicesPageTitle = document.createElement("h2");
  juicesPageTitle.textContent = "JUICES Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");

  // generate list of items
  const juiceItems = [
    { name: "Orange Juice", price: "$3.99" },
    { name: "Apple Juice", price: "$3.50" },
    { name: "Grapefruit Juice", price: "$4.25" },
    { name: "Cranberry Juice", price: "$4.75" },
    { name: "Pineapple Juice", price: "$4.99" },
    { name: "Pomegranate Juice", price: "$5.25" },
    { name: "Mango Juice", price: "$4.75" },
    { name: "Watermelon Juice", price: "$4.50" },
    { name: "Carrot Juice", price: "$4.99" },
    { name: "Beet Juice", price: "$5.25" }
  ];

  juiceItems.forEach(item => {
    // create items with prices beside it
    const juiceItem = document.createElement("p");
    juiceItem.textContent = item.name;
    const juiceItemPrice = document.createElement("p");
    juiceItemPrice.textContent = item.price;
    const juiceItemContainer = document.createElement("div");
    juiceItemContainer.classList.add("juice-item");
    // add to the DOM tree
    juiceItemContainer.appendChild(juiceItem);
    juiceItemContainer.appendChild(juiceItemPrice);
    itemsContainer.appendChild(juiceItemContainer);
  });

  return [juicesPageTitle, itemsContainer];
}
