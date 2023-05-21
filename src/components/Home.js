import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore} from './Store';
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const { AddToCartItems } = useStore();
  
  const Navigate = useNavigate();

  const usersPageHandler = (item) => {
    Navigate(`/products/${item}`);
  };

  const loadData = async () => {
    const response = await axios.get('https://innocenti.onrender.com/products')
    setData(response.data);
  };
  loadData();


  useEffect(() => {
    loadData();
    
    
  }, [])

  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center px-[20px]">
      {data.map((user) => (
        <div >
          <div className="py-12 ">
            <div className="rounded overflow-hidden max-w-sm shadow-lg h-full mb-[30px]">
              <div className="w-full h-[200px]" onClick={() => usersPageHandler(user._id)}>
                <img src={user.image} alt="products" className="w-full" />
              </div>
              <div className="flex flex-col items-center justify-end px-20 py-20 font-serif text-lg ">
                <div>{user.name}</div>
                <div>${user.price}</div>
              </div>
            </div>

            <button className="font-serif rounded-md bg-lime-200 px-2 py-2 font-bold mx-32 my-6 hover:bg-lime-400" onClick={() => AddToCartItems(user)}>
              Add to Cart 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
