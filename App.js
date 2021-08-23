import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./src/pages/home"
import Detalhes from "./src/pages/Detalhes/index"
import Categorias from "./src/pages/Categorias/index"
import Produtos from "./src/pages/Produtos/index"
import Admin from "./src/pages/Admin/index"
import NewProduct from "./src/pages/Admin/newProduct"
import EditProduct from "./src/pages/Admin/editProduct"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Detalhes">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="NewProduct"
        component={NewProduct}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
