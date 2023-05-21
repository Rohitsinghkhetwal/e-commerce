import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStore} from './Store';
import toast from "react-hot-toast"

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { AddToCartItems } = useStore();
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        `https://innocenti.onrender.com/products/${id}`
      );
      setProduct(response.data);
      
    };
    data();
  }, [id]);
  // console.log("These are products",product);

  return (
    <div className="mt-10 py-10 grid grid-cols-2 gap-2 ">
      <div className="px-5 rounded overflow-hidden">
        <div className="w-full h-full object-center object-cover">
          <img src={product.image} alt="Products" />
        </div>
      </div>
      <div className="font-serif">
        <h1 className="text-3xl m-5">{product.name}</h1>
        <h2 className="text-2xl m-5">${product.price}</h2>
        <div className="text-xl m-5">
          <p>{product.description}</p>
        </div>
        <button className="font-serif rounded-md bg-lime-200 font-bold hover:bg-lime-400 m-5 p-5" onClick={()=> {
          AddToCartItems(product);
          toast.success("Item added to cart successfully")

        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
