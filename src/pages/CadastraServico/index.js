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

export default function CadastraServico() {
  const [nomeServico, setNomeServico] = useState("nome do servico");
  const [dataServico, setDataServico] = useState("01/01/2000");
  const [odometroServico, setOdometroServico] = useState("1000");
  const [localServico, setLocalServico] = useState("Posto ABC");
  const [valorServico, setValorServico] = useState("300");
  const [observacaoServico, setObservacaoServico] = useState(
    "teste de observação"
  );
  const [idTipoServico, setIdTipoServico] = useState(1);
  const [idTipoPagamento, setIdTipoPagamento] = useState(1);

  const handleSubmit = async () => {
    // Aqui você pode enviar os dados para a sua API
    const formData = {
      nomeServico,
      dataServico,
      odometroServico: parseInt(odometroServico),
      localServico,
      valorServico: parseFloat(valorServico),
      observacaoServico,
      idTipoServico: parseInt(idTipoServico),
      idTipoPagamento: parseInt(idTipoPagamento),
    };

    console.log(formData);

    // Aqui você pode fazer a requisição para a API

    await api
      .post("servico", formData) // Substitua pelo caminho da sua rota na API
      .then((response) => {
        Alert.alert(
          "CADASTRO REALIZADO",
          "Cadastro de servico realizado com sucesso !!!!",
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
      <Text style={styles.label}>Nome do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={nomeServico}
        onChangeText={(text) => setNomeServico(text)}
      />

      <Text style={styles.label}>Tipo de Serviço:</Text>
      <Picker
        style={styles.input}
        selectedValue={idTipoServico}
        onValueChange={(itemValue, itemIndex) => setIdTipoServico(itemValue)}
      >
        <Picker.Item label="Serviço 1" value="1" />
        <Picker.Item label="Serviço 2" value="2" />
        <Picker.Item label="Serviço 3" value="3" />
        <Picker.Item label="Serviço 4" value="4" />
        {/* Adicione mais Picker.Items conforme necessário */}
      </Picker>

      <Text style={styles.label}>Data do Serviço:</Text>
      <TextInput
        style={styles.input}
        placeholder="00/00/000"
        value={dataServico}
        onChangeText={(text) => setDataServico(text)}
        // keyboardType=''
      />

      <Text style={styles.label}>Odômetro no dia do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={odometroServico}
        onChangeText={(text) => setOdometroServico(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Local do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={localServico}
        onChangeText={(text) => setLocalServico(text)}
      />

      <Text style={styles.label}>Valor do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={valorServico}
        onChangeText={(text) => setValorServico(text)}
        keyboardType="numeric"
        placeholder="Digite o valor"
      />

      <Text style={styles.label}>Método de Pagamento do Serviço:</Text>
      <Picker
        style={styles.input}
        selectedValue={idTipoPagamento}
        onValueChange={(itemValue, itemIndex) => setIdTipoPagamento(itemValue)}
      >
        <Picker.Item label="Pagamento 1" value="1" />
        <Picker.Item label="Pagamento 2" value="2" />
        <Picker.Item label="Pagamento 3" value="3" />
        <Picker.Item label="Pagamento 4" value="4" />
        {/* Adicione mais Picker.Items conforme necessário */}
      </Picker>

      <Text style={styles.label}>Observação:</Text>
      <TextInput
        style={styles.input}
        value={observacaoServico}
        onChangeText={(text) => setObservacaoServico(text)}
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
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
