import React,{useContext,useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import { ItemContext } from "../context/ItemContext";

function Product() {
  const context = useContext(ItemContext);
  const { cardData,cardDetail } = context;
    const {id} = useParams()
    const [loading, setLoading] = useState(true); 

    const thisProduct = cardData.find((prod) => prod.id === id.toString())
    console.log('id',id)
    console.log('cardData',cardData)
    useEffect(() => {
      const fetchData = async () => {
        await cardDetail(); // Wait for data to load
        setLoading(false); // Set loading to false
      };
  
      fetchData();
    }, []); // Empty dependency array to run once when the component mounts
    console.log('thisProduct',thisProduct)
    if (loading) {
      return <div>Loading...</div>; // Display a loading message
    }
  
    if (!thisProduct) {
      return <div>Product not found.</div>;
    }
    console.log("thisProduct:", thisProduct);
    if (!thisProduct) {
      return <div>Product not found.</div>;
    }
    
    return (
        <div>
           <p>This is the Prod component</p>
               <h1>{thisProduct.title}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
        </div>
    )
}

export default Product