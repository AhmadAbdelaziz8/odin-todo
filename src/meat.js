export default function generateMeat() {
  // add meat-page title
  const meatPageTitle = document.createElement("h2");
  meatPageTitle.textContent = "MEAT Menu";
  //   add container of items
  const itemsContainer = document.createElement("div");

  // generate list of items
  const meatItems = [
    { name: "Steak", price: "$12.99" },
    { name: "Chicken Breast", price: "$8.50" },
    { name: "Pork Chops", price: "$9.75" },
    { name: "Ground Beef", price: "$6.99" },
    { name: "Salmon Fillet", price: "$14.25" },
    { name: "Lamb Chops", price: "$16.99" }
  ];

  meatItems.forEach(item => {
    // create items with prices beside it
    const meatItem = document.createElement("p");
    meatItem.textContent = item.name;
    const meatItemPrice = document.createElement("p");
    meatItemPrice.textContent = item.price;
    const meatItemContainer = document.createElement("div");
    meatItemContainer.classList.add("meat-item");
    // add to the DOM tree
    meatItemContainer.appendChild(meatItem);
    meatItemContainer.appendChild(meatItemPrice);
    itemsContainer.appendChild(meatItemContainer);
  });

  return [meatPageTitle, itemsContainer];
}
