import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./src/pages/home"
import Detalhes from "./src/pages/Detalhes/index"
import Categorias from "./src/pages/Categorias/index"
import Produtos from "./src/pages/Produtos/index"
import ProdutosAdmin from "./src/pages/Admin/produtosAdmin"
import NovoProduto from "./src/pages/Admin/newProduct"
import EditarProduto from "./src/pages/Admin/editProduct"
import CategoriasAdmin from "./src/pages/Admin/categoriasAdmin"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
        name="ProdutosAdmin"
        component={ProdutosAdmin}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="NovoProduto"
        component={NovoProduto}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="EditarProduto"
        component={EditarProduto}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
        <Stack.Screen
        name="CategoriasAdmin"
        component={CategoriasAdmin}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
