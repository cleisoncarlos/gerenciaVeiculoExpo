import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

export default function CadastraCombustivel() {
  const [dataCombustivel, setDataCombustivel] = useState();
  const [odometroCombustivel, setOdometroCombustivel] = useState("1000");
  const [localCombustivel, setLocalCombustivel] = useState("Posto ABC");
  const [precoLitroCombustivel, setPrecoLitroCombustivel] = useState("");
  const [valorCombustivelCombustivel, setValorCombustivelCombustivel] = useState("100");
  const [idTipoCombustivel, setIdTipoCombustivel] = useState();

  const handleSubmit = async () => {
    // Aqui você pode enviar os dados para a sua API
    const formData = {
      dataCombustivel,
      odometroCombustivel: parseInt(odometroCombustivel),
      localCombustivel,
      precoLitroCombustivel: parseFloat(precoLitroCombustivel),
      valorCombustivelCombustivel: parseFloat(valorCombustivelCombustivel),
      idTipoCombustivel: parseInt(idTipoCombustivel),
    };

    // console.log(formData);

    // Aqui você pode fazer a requisição para a API

    await api
      .post("combustivel", formData) // Substitua pelo caminho da sua rota na API
      .then((response) => {
        Alert.alert(
          "CADASTRO REALIZADO",
          "Cadastro de combustivel realizado com sucesso !!!!",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );

        // Tratar a resposta da requisição
        // console.log('Resposta:', response.data); // Você pode fazer algo com a resposta aqui
      })
      .catch((error) => {
        // Lidar com possíveis erros
        console.error("Erro:", error);
      });
  };

  const [tiposCombustiveis, setTiposCombustiveis] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      const response = await api.get("tipocombustivel");
      try {
        let todosTiposCombustiveis = response.data;
        setTiposCombustiveis(todosTiposCombustiveis);
      } catch (error) {
        console.error(error);
        //  console.log(response.data.tiposcombustivei.nomeTipoCombustivel)
      }
    };

    // Chama a função fetchData ao montar o componente
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Tipo de Combustível:</Text>

      <Picker style={styles.input}
             selectedValue={idTipoCombustivel}
             onValueChange={(itemValue, itemIndex) =>
               setIdTipoCombustivel(itemValue)
             }
          
          >
      <Picker.Item label="Selecione o tipo ..." value="0" />
        {tiposCombustiveis.map((tipo, index) => (
          <Picker.Item
            key={index}
            label={tipo.nomeTipoCombustivel}
            value={tipo.idTipoCombustivel}
          />
        ))}
      </Picker>


      <Text style={styles.label}>Data do Combustível:</Text>
      <MaskedTextInput
    type="date"
    mask="99/99/9999"
    options={{
      dateFormat: 'DD/MM/YYYY',
    }}
        style={styles.input}
      
        value={dataCombustivel}
        onChangeText={(text) => setDataCombustivel(text)}
        // keyboardType=''
      />

      <Text style={styles.label}>Odômetro do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={odometroCombustivel}
        onChangeText={(text) => setOdometroCombustivel(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Local do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={localCombustivel}
        onChangeText={(text) => setLocalCombustivel(text)}
      />

      <Text style={styles.label}>Preço por Litro do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={precoLitroCombustivel}
        onChangeText={(text) => setPrecoLitroCombustivel(text)}
        keyboardType="numeric"
        placeholder="Digite o valor"
      />

      <Text style={styles.label}>Valor Total do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={valorCombustivelCombustivel}
        onChangeText={(text) => setValorCombustivelCombustivel(text)}
        keyboardType="numeric"
        placeholder="Digite o valor"
      />

      <Button
        color={"#284893"}
        title="CADASTRAR GASTO"
        onPress={handleSubmit}
      />

      <Text>sdasdsadsadas</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    // borderWidth: 1,
    // borderRadius: 5,
    //   borderColor: '#ccc',
    backgroundColor: "#fff",

    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    color: "#999",
    marginBottom: 10,
  },
});
