import React, { createContext, useEffect, useState, useContext} from 'react'

const DadosContext = createContext()

export default function DadosProvider({children}){
    const [dados, setDados] = useState([])
    const [cpfSessao, setCpfSessao] = useState()
    const [mesaSessao, setMesaSessao] = useState()
    const [nomeSessao, setNomeSessao] = useState()

    function salvarDados(cpfSessao, mesaSessao, nomeSessao){
     
      setCpfSessao(cpfSessao)
      setMesaSessao(mesaSessao)
      setNomeSessao(nomeSessao)
      
    }
    const store = {
        salvarDados,
        cpfSessao,
        mesaSessao,
        nomeSessao
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
        mesaSessao,
        nomeSessao
    } = context

    return {
        salvarDados,
        cpfSessao,
        mesaSessao,
        nomeSessao
    }
}