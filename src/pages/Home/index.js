import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


import api from "../../services/api";






import CardCombustivel from "../../components/CardCombustivel";

export default function Home() {
  const [combustivel, setCombustivel] = useState([]);

  useEffect(() => {
    async function LoadCombustivel() {
      const response = await api.get("combustivel");
      //console.log(response.data)
      setCombustivel(response.data);
    }
    LoadCombustivel();
  }, []);

  // calcula o total gasto
  const valores = Object.values(combustivel).map(
    (item) => parseFloat(item.valorCombustivelCombustivel) || 0
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
      {/* <Button title='Clique aqui' onPress={()=> navigation.navigate('Relatorios')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Lembretes')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Historico')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Relatorios')}/>
 */}

      <View style={styles.cardContainer}>
        {/* <Text style={styles.text}><MaterialCommunityIcons name="account-box-outline" color='#ADBFE9' size={18} /> Cleison Carlos</Text> */}
        <Text style={styles.text}>
          <MaterialCommunityIcons name="car" color="#ADBFE9" size={18} /> Uno Vivace{" "}
        </Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name="fuel" color="#ADBFE9" size={18} /> R${" "}
          {/* {valorTotal} */}
          {numeroFormatado}
          {" "}
        </Text>
      </View>

      <FlatList
        data={combustivel}
        keyExtractor={(item) => String(item.idCombustivel)}
        renderItem={({ item }) => <CardCombustivel data={item} />}
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
