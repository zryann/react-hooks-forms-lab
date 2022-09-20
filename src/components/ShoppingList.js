import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { logDOM } from "@testing-library/react";

function ShoppingList({ items, changeData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    }
  });
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={changeData} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={searchHandler}
        search={searchTerm}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
