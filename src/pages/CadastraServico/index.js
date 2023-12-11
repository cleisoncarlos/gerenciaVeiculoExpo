import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import {MaskedTextInput} from "react-native-mask-text";

import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

export default function CadastraServico() {
  const [nomeServico, setNomeServico] = useState("nome do servico");
  const [dataServico, setDataServico] = useState();
  const [odometroServico, setOdometroServico] = useState("1000");
  const [localServico, setLocalServico] = useState("Posto ABC");
  const [valorServico, setValorServico] = useState();
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
      valorServico,
      observacaoServico,
      idTipoServico: parseInt(idTipoServico),
      idTipoPagamento: parseInt(idTipoPagamento),
    };

    //console.log(formData);

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



  const [tiposServicos, setTiposServicos] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      const response = await api.get("tiposervico");
      try {
        let todosTiposServicos = response.data;
        setTiposServicos(todosTiposServicos);
      } catch (error) {
        console.error(error);
        //  console.log(response.data.tiposcombustivei.nomeTipoCombustivel)
      }
    };
    // Chama a função fetchData ao montar o componente
    fetchData();
  }, []);


  const [tiposPagamentos, setTiposPagamentos] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      const response = await api.get("tipopagamento");
      try {
        let todosTiposPagamentos = response.data;
        setTiposPagamentos(todosTiposPagamentos);
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
      <Text style={styles.label}>Nome do Serviço:</Text>
      <TextInput
        style={styles.input}
        value={nomeServico}
        onChangeText={(text) => setNomeServico(text)}
      />

      <Text style={styles.label}>Tipo de Serviço:</Text>

      <Picker style={styles.input}
             selectedValue={idTipoServico}
             onValueChange={(itemValue, itemIndex) =>
               setIdTipoServico(itemValue)
             }
          
          >
      <Picker.Item label="Selecione o tipo ..." value="0" />
        {tiposServicos.map((tipo, index) => (
          <Picker.Item
            key={index}
            label={tipo.nomeTipoServico}
            value={tipo.idTipoServico}
          />
        ))}
      </Picker>


      <Text style={styles.label}>Data do Serviço:</Text>
      <MaskedTextInput
    type="date"
    mask="99/99/9999"
    options={{
      dateFormat: 'DD/MM/YYYY',
    }}
        style={styles.input}
  
        value={dataServico}
        onChangeText={(text) => setDataServico(text)}
         keyboardType='numeric'
        
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
      <MaskedTextInput
       type="currency"
       options={{
         prefix: 'R$ ',
         decimalSeparator: ',',
         groupSeparator: '.',
         precision: 2
       }}
        style={styles.input}
        value={valorServico}
        onChangeText={(text, rawText) => setValorServico(rawText)}
    keyboardType='numeric'
   
      //  placeholder="0000"
      />

      <Text style={styles.label}>Método de Pagamento do Serviço:</Text>


      <Picker style={styles.input}
             selectedValue={idTipoPagamento}
             onValueChange={(itemValue, itemIndex) =>
               setIdTipoPagamento(itemValue)
             }
          
          >
      <Picker.Item label="Selecione o tipo ..." value="0" />
        {tiposPagamentos.map((tipo, index) => (
          <Picker.Item
            key={index}
            label={tipo.nomeTipoPagamento}
            value={tipo.idTipoPagamento}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Observação:</Text>
      <TextInput
        multiline
        numberOfLines={4} // Número inicial de linhas visíveis
        style={styles.input}
        value={observacaoServico}

        onChangeText={(text) => setObservacaoServico(text)}
 
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
