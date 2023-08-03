'use client';

import { createContext,useState,SetStateAction,Dispatch } from "react";
type Product ={
    id?:string;
    name?:string;
    price?:{
        plane:string
        qtd:number;
        price:number;
    }[]
    
}
type CartContext= {
    cart:Product[]
    setCart: Dispatch<SetStateAction<Product[]>>;
    addToCart:(product:Product)=> void;
    removeToCart:(product:Product)=>void
    clearCart: () => void;
}

export const CartContext = createContext<CartContext>({} as CartContext)
import {toast } from 'react-toastify';
export const CartProvider = ({children}:any) =>{
    const [cart, setCart] = useState<Product[]>([])
    const addToCart = (product:any)=>{
        
        setCart((prev:any) => {
            const newProductPlane = product[0].plane;
            const isProductAlreadyInCart = prev.some((item:any) => item.id === product.id &&  item[0].plane === newProductPlane)
            console.log(prev)
            //const isProductAlreadyInCart = prev.some((item: any) => item[0].plane === newProductPlane);
           console.log(isProductAlreadyInCart)
            if (!isProductAlreadyInCart) {
                toast.success('Produto adicionado ao carrinho com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
              return [...prev, product];
            }else{
                toast.warn('O item já foi adicionado ao carrinho!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
              
                return prev;
            }
          
           
           
        } ) 
       } 
    const removeToCart =(product:Product)=>{
        setCart(prev => {
            const pos = prev.findIndex((item) => item.id === product.id);
            if (pos !== -1) {
              return prev.filter((value,index) => index !== pos);
            }
            return prev;
          });
       }
    const clearCart = ()=>{
        return setCart([])
    }
    return(
        <CartContext.Provider value={{cart, setCart, removeToCart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}