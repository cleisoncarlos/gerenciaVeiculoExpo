import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


import api from "../../services/api";

import CardServicos from "../../components/CardServicos";

export default function Servicos() {
  const [servico, setServico] = useState([]);

  useEffect(() => {
    async function LoadServico() {
      const response = await api.get("servico");
      //console.log(response.data)
      setServico(response.data);
    }
    LoadServico();
  }, []);



  // calcula o total gasto
  const valores = Object.values(servico).map(
    (item) => parseFloat(item.valorServico) || 0
  );
  const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);

  // calcula o total de litros


//formata moeda
  const numeroFormatado = valorTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <View>
      <View style={styles.cardContainer}>
        {/* <Text style={styles.text}><MaterialCommunityIcons name="account-box-outline" color='#ADBFE9' size={18} /> Cleison Carlos</Text> */}
        <Text style={styles.text}>
          <MaterialCommunityIcons name="car" color="#ADBFE9" size={18} /> Serviços{" "}
        </Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name="fuel" color="#ADBFE9" size={18} /> R${" "}
          {/* {valorTotal} */}
          {numeroFormatado}
          {" "}
        </Text>
      </View>

      <FlatList
        data={servico}
        keyExtractor={(item) => String(item.idServico)}
        renderItem={({ item }) => <CardServicos data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    backgroundColor: '#ddd',
    borderWidth: 1
  },
  text: {
    color: "#284893",
    marginBottom: 6,
    fontSize: 18,
  },
});
