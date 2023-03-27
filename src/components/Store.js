import create from "zustand";

export const useStore = create((set, get) => ({
  cart: [],
  AddToCartItems: (products) => {
    const existingCart = get().cart;
    let CartItem = { ...products, quantity: 1 };
    const existingItem = existingCart.find((item) => item._id === CartItem._id);
    if (existingItem) {
      CartItem = {
        ...CartItem,
        quantity: existingItem.quantity += 1,
      };
      const UpdatedProducts = existingCart.map((items) => {
        if (items._id === CartItem._id) {
          return {
            ...CartItem,
          };
        } else {
          return items;
        }
      });
      set({
        cart: [...UpdatedProducts],
      });
    } else {
       
      
      set({
        cart: [...existingCart, CartItem],
        
      });
      
      
    }
  },


  //  function that remove items
  RemoveFromCartItem:(ProductId) => {
    console.log(ProductId, "ProductId");
    const RemovalItems = get().cart;
    const SelectedItems = RemovalItems.filter((currVal) => currVal._id !== ProductId)
    console.log(SelectedItems);
    set({
        cart: [ ...SelectedItems]
    })



  }
}));
