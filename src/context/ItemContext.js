import { createContext, useState } from "react";

export const ItemContext = createContext();

export function ItemState({ children }) {
  let url;
  const [cardData, setcardData] = useState([]);
  const [filteredList, setFilteredList] = useState(cardData);
  const [cartList, setCartList] = useState([]);

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

  const AddToCart = ({ product }) => {
    //check if the product exists in the list
    const existingProduct = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingProduct) {
    //if product exists map through the list to find the product
      setCartList(
        cartList.map((cartItem) =>
          cartItem.id === product.id
          //if it matches increase the quantity by 1, else return
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
        //if product is not in the list, add product in the list 
      setCartList([...cartList, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = ({ product }) => {
    //check if product exists in the list
    const existingProduct = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingProduct) {
        //if product exists check if the quantity is more than one
        if(existingProduct.quantity > 1){
            //map through this list to find the product and decrease the quantity by 1, else return
            setCartList(
              cartList.map((cartItem) =>
                cartItem.id === product.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            );
        }
        else{
            //if the quantity of the product 1 or less, remove it from the list
            setCartList(cartList.filter((cartItem) => cartItem.id !== product.id));
        }
    } 
  };
   
 
  const getTotal =()=>{
    const total= cartList.reduce((total,item )=> total + item.price * item.quantity,0)
    return Math.round(total * 20)/20
  }

  const TotalItems =()=>{
    const total= cartList.reduce((total,item )=> total + item.quantity,0)
    return total
  }
  return (
    <ItemContext.Provider
      value={{
        cardData,
        cardDetail,
        filteredList,
        searchFilter,
        AddToCart,
        cartList,
        removeFromCart,
        getTotal,
        TotalItems
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
