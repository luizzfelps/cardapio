import React, { createContext, useEffect, useState, useContext} from 'react'
import newProduct from '../pages/Admin/newProduct'

const CartContext = createContext()

export default function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState([])

    useEffect(() =>{
        let value = 0
        cart.map((item) =>{
            value = value + item.valor
        })
        setTotalValue(value)
    }, [cart])

    // function add(item){
    //     const newCart = cart
    //     newCart.push(item)

    //     setCart([...newCart])
    // }
    
    function add(item){
      const exist = cart.find((x) => x.id === item.id);
      if(exist){
          setCart(
              cart.map((x) =>
                  x.id === item.id ? {...exist , qty: exist.qty + 1} : x
              )
          )
      } else{
          setCart([...cart, {...item, qty: 1}])
      }
    }

    // function remove(index){
    //     let newCart = cart.filter((item, i) => i !== index)

    //     setCart([...newCart])
    // }
    function remove(item){
        const exist = cart.find((x)=> x.id === item.id);
        if(exist.qty === 1){
            setCart(cart.filter((x) => x.id !== item.id))
        }
        else{
            setCart(
                cart.map((x)=>
                x.id === item.id ? {...exist, qty: exist.qty - 1}: x
                )
            )
        }
    }
    const store = {
        add,
        cart,
        totalValue,
        remove
    }
    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )

}

export function useCart(){
    const context  = useContext(CartContext)
    
    const {
        cart,
        add,
        totalValue,
        remove
    } = context

    return {
        cart,
        add,
        totalValue,
        remove
    }
}