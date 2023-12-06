import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";







export default function CadastraLembrete() {
  const [nomeLembrete, setNomeLembrete] = useState("nome do servico");
  const [dataLembrete, setDataLembrete] = useState("01/01/2000");
  const [odometroLembrete, setOdometroLembrete] = useState("1000");
  const [observacaoLembrete, setObservacaoLembrete] = useState(
    "teste de lembrete"
  );
  const [idTipoLembrete, setTipoLembrete] = useState(1);
  const [idTipoDespesa, setIdTipoDespesa] = useState(1);










 

  const handleSubmit = async () => {
    // Aqui você pode enviar os dados para a sua API
    const formData = {
      nomeLembrete,
      dataLembrete,
      odometroLembrete: parseInt(odometroLembrete),
      observacaoLembrete,
      tipoLembrete: parseInt(tipoLembrete),
      idTipoLembrete: parseInt(idTipoLembrete),
    };

    console.log(formData);

    // Aqui você pode fazer a requisição para a API

    await api
      .post("lembrete", formData) // Substitua pelo caminho da sua rota na API
      .then((response) => {
        Alert.alert(
          "CADASTRO REALIZADO",
          "Cadastro de lembrete realizado com sucesso !!!!",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );

        // Tratar a resposta da requisição
        // console.log('Resposta:', response.data); // Você pode fazer algo com a resposta aqui
      })
      .catch((error) => {
        // Lidar com possíveis erros

        Alert.alert(
            console.error("Erro:", error),
            "Houve um erro no cadastro! Tente novamente mais tarde.",
            [{text: 'OK', onPress: ()=>console.log('OK Pressed')}]
        )
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome do Lembrete:</Text>
      <TextInput
        style={styles.input}
        value={nomeLembrete}
        onChangeText={(text) => setNomeLembrete(text)}
      />

      <Text style={styles.label}>Tipo de Lembrete:</Text>
      <Picker
        style={styles.input}
        selectedValue={idTipoLembrete}
        onValueChange={(itemValue, itemIndex) => setIdTipoLembrete(itemValue)}
      >
        <Picker.Item label="Lembrete 1" value="1" />
        <Picker.Item label="Lembrete 2" value="2" />
        <Picker.Item label="Lembrete 3" value="3" />
        <Picker.Item label="Lembrete 4" value="4" />
        {/* Adicione mais Picker.Items conforme necessário */}
      </Picker>


      <Text style={styles.label}>Tipo de Despesa:</Text>
      <Picker
        style={styles.input}
        selectedValue={idTipoDespesa}
        onValueChange={(itemValue, itemIndex) => setIdTipoDespesa(itemValue)}
      >
        <Picker.Item label="Lembrete 1" value="1" />
        <Picker.Item label="Lembrete 2" value="2" />
        <Picker.Item label="Lembrete 3" value="3" />
        <Picker.Item label="Lembrete 4" value="4" />
        {/* Adicione mais Picker.Items conforme necessário */}
      </Picker>

      <Text style={styles.label}>Data do Serviço:</Text>
      <TextInput
        style={styles.input}
        placeholder="00/00/000"
        value={dataLembrete}
        onChangeText={(text) => setDataLembrete(text)}
        // keyboardType=''
      />

    
      <Text style={styles.label}>Observação:</Text>
      <TextInput
        style={styles.input}
        value={observacaoLembrete}
        onChangeText={(text) => setLembrete(text)}
 
      />

      <Button
        color={"#284893"}
        title="CADASTRAR SERVIÇO"
        onPress={handleSubmit}
      />

      <Text>DASDASDASD</Text>
      <Text>DASDASDASD</Text>
      <Text>DASDASDASD</Text>
      <Text>DASDASDASD</Text>
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
