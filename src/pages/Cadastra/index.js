import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {useNavigation} from '@react-navigation/native'

export default function Cadastra() {

  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btLink} onPress={()=> navigation.navigate('CadastraCombustivel')}>
        <View>
          <MaterialCommunityIcons name="gas-station" color="#fff" size={22} />
        </View>

        <View>
          <Text style={styles.btText}>Despesa com combustível </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btLink} onPress={() => {}}>
        <View>
          <MaterialCommunityIcons name="oil" color="#fff" size={22} />
        </View>

        <View>
          <Text style={styles.btText}>Serviços </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btLink} onPress={() => {}}>
        <View>
          <MaterialCommunityIcons name="credit-card-outline" color="#fff" size={22} />
        </View>

        <View>
          <Text style={styles.btText}>Despesa Geral </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btLink} onPress={() => {}}>
        <View>
          <MaterialCommunityIcons name="alarm-multiple" color="#fff" size={22} />
        </View>

        <View>
          <Text style={styles.btText}>Lembrete </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  btLink: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#284893",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  btText: {
    color: "#fff",
    marginStart: 10,
    fontSize: 16,
  },
});
