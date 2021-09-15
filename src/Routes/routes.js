import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"


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


const Stack = createStackNavigator();

function HomeBar(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen name="CategoriasAdmin" component={CategoriasAdmin}/>

        <Stack.Screen name="ProdutosAdmin" component={ProdutosAdmin}/>

        <Stack.Screen name="DetalhesEditar" component={DetalhesEditar}/>

        <Stack.Screen name="NovoProduto" component={NovoProduto}/>

        <Stack.Screen name="Categorias" component={Categorias}/>

        <Stack.Screen name="Produtos" component={Produtos}/>

        <Stack.Screen name="Detalhes" component={Detalhes}/>
  
      </Stack.Navigator>
    )
  }
export {HomeBar}

  function CartBar(){
    return(
      <Stack.Navigator>
  
       <Stack.Screen name="Carrinho" component={Carrinho} />
  
      </Stack.Navigator>
    )
  }
export {CartBar}

  function BuscarBar(){
    return(
      <Stack.Navigator>
  
       <Stack.Screen name="Search" component={Buscar} />
  
      </Stack.Navigator>
    )
  }

  export {BuscarBar}
