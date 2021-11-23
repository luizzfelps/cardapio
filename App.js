import React from 'react';
import {View} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartProvider, { useCart } from './src/context/cart'
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'
import {HomeBar, CartBar, BuscarBar, ComandaBar} from './src/Routes/routes'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <CartProvider>
      <NavigationContainer>
        
        <Tab.Navigator 
        
       screenOptions={{
          style:{
          height: 55,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F9813A"

        }}
       //<NavigationContainer> inactiveColor="rgba(255, 255, 255, 0.5)" activeColor="#fff" 
       >

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
               <View style={{height: 60, width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderColor: '#F9813A',
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5
               }}> 
                <Icon name="search" color={'#F9813A'} size={26} />
               </View> 
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
          <Tab.Screen 
          name="ComandaScreen" 
          component={ComandaBar} 
          options=
          {{
             headerShown: false, 
             tabBarIcon: ({ color })=>(
               <Icon name="ballot" color={color} size={26} />
             )
          }} 
          />

        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
