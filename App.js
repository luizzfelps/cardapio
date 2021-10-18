import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartProvider, { useCart } from './src/context/cart'
import { FontAwesome } from "@expo/vector-icons"

import {HomeBar, CartBar, BuscarBar} from './src/Routes/routes'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen  name="Inicial" component={HomeBar} options={{ headerShown: false, title: 'Pagina Inicial' }} />

          <Tab.Screen name="Buscar" component={BuscarBar} options={{ headerShown: false }} />

          <Tab.Screen name="Cart" component={CartBar} options={{ headerShown: false, title: "Carrinho" }} />

        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
