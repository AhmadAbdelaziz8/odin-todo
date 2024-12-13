export default function generateVegs() {
  // add vegs-page title
  const vegsPageTitle = document.createElement("h2");
  vegsPageTitle.textContent = "VEGS Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");

  // generate list of items
  const vegsItems = [
    { name: "Broccoli", price: "$4.99" },
    { name: "Carrots", price: "$3.99" },
    { name: "Spinach", price: "$2.99" },
    { name: "Tomatoes", price: "$3.50" },
    { name: "Zucchini", price: "$4.25" },
    { name: "Asparagus", price: "$5.75" }
  ];

  vegsItems.forEach(item => {
    // create items with prices beside it
    const vegsItem = document.createElement("p");
    vegsItem.textContent = item.name;
    const vegsItemPrice = document.createElement("p");
    vegsItemPrice.textContent = item.price;
    const vegsItemContainer = document.createElement("div");
    vegsItemContainer.classList.add("vegs-item");
    // add to the DOM tree
    vegsItemContainer.appendChild(vegsItem);
    vegsItemContainer.appendChild(vegsItemPrice);
    itemsContainer.appendChild(vegsItemContainer);
  });

  return [vegsPageTitle, itemsContainer];
}
