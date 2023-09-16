import { createContext, useState } from "react";

export const ItemContext = createContext()

export function ItemState({children}){
    let url;
    const [cardData, setcardData] = useState([]);
    const cardDetail = async (props) => {
        if(props){
            url = `https://fakestoreapi.com/products/category/${props}`;
        } else{
            url = `https://fakestoreapi.com/products`
        }
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          setcardData(parsedData);
      };
    
      return(
        <ItemContext.Provider value={{cardData,cardDetail}}>
            {children}
        </ItemContext.Provider>
      )
}