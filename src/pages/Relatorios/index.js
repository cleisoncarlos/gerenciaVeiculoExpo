import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import api from "../../services/api";

export default function Relatorios() {
  const [combustivel, setCombustivel] = useState([]);
  const [servico, setServico] = useState([]);


  useEffect(() => {



    async function LoadCombustivel() {
      const response = await api.get("combustivel");
      setCombustivel(response.data);
   //  console.log(response.data)
    }

    async function LoadServico() {
      const response = await api.get("servico");
      setServico(response.data);
   //  console.log(response.data)
    }


    LoadCombustivel();
    LoadServico();
  }, []);




  // calcula o total gasto combustivel
  const valoresCombustivel = Object.values(combustivel).map(
    (item) => parseFloat(item.valorCombustivelCombustivel) || 0
  );
  const valorTotalCombustivel = valoresCombustivel.reduce((acc, valor) => acc + valor, 0);

// calcula valor total servicos

const valoresServico = Object.values(servico).map(
  (item) => parseFloat(item.valorServico) || 0
);
const valorTotalServico = valoresServico.reduce((acc, valor) => acc + valor, 0);




  // calcula o total de litros

  //formata moeda
  const numeroFormatadoCombustivel = valorTotalCombustivel.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const numeroFormatadoServico = valorTotalServico.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

// pega datas
// let dataInicial = combustivel[0]["dataCombustivel"].toString()
// let dataFinal = combustivel[combustivel.length - 1]["dataCombustivel"].toString() 

// formata data
// function formatarDataSemHora(data) {
//   const dataObj = new Date(data);

//   const options = {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   }
//   const dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(dataObj);
//   return dataFormatada;

// }


//------------------------------------------------------------------------------



  return (
    <View>

      <View style={styles.cardContainer}>
        <Text style={styles.title}>Gasto com Combustivel:</Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name="fuel" color="#ADBFE9" size={18} /> R${" "}
          {/* {valorTotal} */}
          {numeroFormatadoCombustivel}{" "}
        </Text>
        <Text style={styles.smalltext}>   
        <MaterialCommunityIcons name="calendar" color="#ADBFE9" size={14} /> {" "}      
          {/* De: {formatarDataSemHora(dataInicial)} até {formatarDataSemHora(dataFinal)} */}
        </Text>
      </View>


      <View style={styles.cardContainer}>
        <Text style={styles.title}>Gasto com Serviços:</Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name="fuel" color="#ADBFE9" size={18} /> R${" "}
          {/* {valorTotal} */}
          {numeroFormatadoServico}{" "}
        </Text>
        <Text style={styles.smalltext}>   
        <MaterialCommunityIcons name="calendar" color="#ADBFE9" size={14} /> {" "}      
          {/* De: {formatarDataSemHora(dataInicial)} até {formatarDataSemHora(dataFinal)} */}
        </Text>
      </View>

      
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Outras Despesas:</Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name="fuel" color="#ADBFE9" size={18} /> R${" "}
          {/* {valorTotal} */}
          {numeroFormatadoCombustivel}{" "}
        </Text>
        <Text style={styles.smalltext}>   
        <MaterialCommunityIcons name="calendar" color="#ADBFE9" size={14} /> {" "}      
          {/* De: {formatarDataSemHora(dataInicial)} até {formatarDataSemHora(dataFinal)} */}
        </Text>
      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    backgroundColor: "#ddd",
    borderWidth: 1,
  },
  text: {
    color: "#284893",
    marginBottom: 6,
    fontSize: 18,
  },
  smalltext: {
    color: "#284893",
    marginBottom: 6,
    fontSize: 14,
  },
  title: {
    color: "#284893",
    marginBottom: 12,
    fontSize: 22,
  },
});
