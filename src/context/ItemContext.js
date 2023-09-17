import { createContext, useState } from "react";

export const ItemContext = createContext();

export function ItemState({ children }) {
  let url;
  const [cardData, setcardData] = useState([]);
  const [filteredList, setFilteredList] = useState(cardData);

  const cardDetail = async (props) => {
    if (props) {
      url = `https://fakestoreapi.com/products/category/${props}`;
    } else {
      url = `https://fakestoreapi.com/products`;
    }
    let data = await fetch(url);
    let parsedData = await data.json();
    setcardData(parsedData);
  };

  const searchFilter = (e) => {
    //get value from search bar
    let query = e.target.value;
    //copy cardData in updatedList
    let updatedList = [...cardData];
    //filter the updatedList
    updatedList = updatedList.filter((product) => {
      //convert the product title and query to lowercase and check if the product title includes the specified query
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
    //update the filtered list state with the updatedList
    setFilteredList(updatedList);
  };

  return (
    <ItemContext.Provider
      value={{ cardData, cardDetail, filteredList, searchFilter }}
    >
      {children}
    </ItemContext.Provider>
  );
}

