import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import {TouchableOpacity} from "react-native";

import { FontAwesome } from "@expo/vector-icons"
import Home from "../pages/home"
import Carrinho from "../pages/carrinho"
import Categorias from "../pages/Categorias/index"
import Produtos from "../pages/Produtos/index"
import Detalhes from "../pages/Detalhes/index"
import CategoriasAdmin from "../pages/Admin/categoriasAdmin"
import DetalhesEditar from "../pages/Admin/editProduct"
import NovoProduto from "../pages/Admin/newProduct"
import ProdutosAdmin from "../pages/Admin/produtosAdmin"
import Buscar from "../pages/buscar"
import Comanda from "../pages/comanda"
import Cozinha from "../pages/Admin/cozinha"



const Stack = createStackNavigator();

const HomeBar = ({ navigation, route }) => {
  
    return(
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />

        <Stack.Screen name="CategoriasAdmin"  component={CategoriasAdmin} options={{ headerShown: false}}/>

        <Stack.Screen name="ProdutosAdmin" component={ProdutosAdmin} options={{ headerShown: false}}/>

        <Stack.Screen name="DetalhesEditar" component={DetalhesEditar} options={{ headerShown: false}}/>

        <Stack.Screen name="NovoProduto" component={NovoProduto} options={{ headerShown: false}}/>

        <Stack.Screen name="Categorias" options={{headerShown: false}} component={Categorias}/>
        
        <Stack.Screen name="Buscar" options={{headerShown: false}} component={Buscar}/>

        <Stack.Screen name="Produtos" options={{headerShown: false}} component={Produtos}/>

        <Stack.Screen name="Detalhes" options={{headerShown: false}} component={Detalhes}/>

        <Stack.Screen name="Cozinha" component={Cozinha}/>
  
      </Stack.Navigator>
    )
  }
export {HomeBar}

  function CartBar(){
    return(
      <Stack.Navigator>
  
       <Stack.Screen name="Carrinho" options={{headerShown: false}} component={Carrinho} />
  
      </Stack.Navigator>
    )
  }
  export {CartBar}

  function CategoriasBar(){
    return(
  <Stack.Navigator>

    <Stack.Screen name ="Categorias" options ={{headerShown: false}} component={Categorias} />
    <Stack.Screen name="Detalhes" options={{headerShown: false}} component={Detalhes}/>

  </Stack.Navigator>
  )
  }
export {CategoriasBar}

  function BuscarBar(){
    return(
      <Stack.Navigator>
       
        <Stack.Screen name="Search" component={Buscar} options ={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" options={{headerShown: false}} component={Detalhes}/>

      </Stack.Navigator>
    )
  }

  export {BuscarBar}

  function ComandaBar(){
    return(
      <Stack.Navigator>
  
       <Stack.Screen name="Comanda" component={Comanda}  options ={{headerShown: false}}/>
  
      </Stack.Navigator>
    )
  }


  export {ComandaBar}