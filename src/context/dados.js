import React, { createContext, useEffect, useState, useContext} from 'react'

const DadosContext = createContext()

export default function DadosProvider({children}){
    const [dados, setDados] = useState([])
    const [cpfSessao, setCpfSessao] = useState()
    const [mesaSessao, setMesaSessao] = useState()

    function salvarDados(cpfSessao, mesaSessao){
     
      setCpfSessao(cpfSessao)
      setMesaSessao(mesaSessao)
      
    }
    const store = {
        salvarDados,
        cpfSessao,
        mesaSessao
    }
    return (
        <DadosContext.Provider value={store}>
            {children}
        </DadosContext.Provider>
    )

}

export function useDados(){
    const context  = useContext(DadosContext)
    
    const {
        salvarDados,
        cpfSessao,
        mesaSessao
    } = context

    return {
        salvarDados,
        cpfSessao,
        mesaSessao
    }
}