import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartProvider, { useCart } from './src/context/cart'
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'
import {HomeBar, CartBar, BuscarBar} from './src/Routes/routes'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator inactiveColor="rgba(255, 255, 255, 0.5)" activeColor="#fff">

          <Tab.Screen 
          name="Inicial" 
          component={HomeBar} 
          options=
          {{
             headerShown: false, 
             tabBarIcon: ({ color })=>(
               <Icon name="home" color={color} size={26} />
             )
          }} 
          />
          <Tab.Screen 
          name="Buscar" 
          component={BuscarBar} 
          options=
          {{
             headerShown: false, 
             tabBarIcon: ({ color })=>(
               <Icon name="search" color={color} size={26} />
             )
          }} 
          />
          <Tab.Screen 
          name="Cart" 
          component={CartBar} 
          options=
          {{
             headerShown: false, 
             tabBarIcon: ({ color })=>(
               <Icon name="shopping-cart" color={color} size={26} />
             )
          }} 
          />

        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
