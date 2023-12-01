import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function  CadastraCombustivel() {
  const [dataCombustivel, setDataCombustivel] = useState('');
  const [odometroCombustivel, setOdometroCombustivel] = useState('');
  const [localCombustivel, setLocalCombustivel] = useState('');
  const [precoLitroCombustivel, setPrecoLitroCombustivel] = useState('');
  const [valorCombustivelCombustivel, setValorCombustivelCombustivel] = useState('');
  const [idTipoCombustivel, setIdTipoCombustivel] = useState('');

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para a sua API
    const formData = {
      dataCombustivel,
      odometroCombustivel: parseInt(odometroCombustivel),
      localCombustivel,
      precoLitroCombustivel: parseFloat(precoLitroCombustivel),
      valorCombustivelCombustivel: parseFloat(valorCombustivelCombustivel),
      idTipoCombustivel: parseInt(idTipoCombustivel),
    };

    // Aqui você pode fazer a requisição para a API
    // Exemplo com fetch:
    fetch('SUA_URL_DA_API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      // Tratar a resposta da requisição
    })
    .catch(error => {
      // Lidar com possíveis erros
    });
  };

  return (
    <View style={styles.container}>
      <Text>Data do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={dataCombustivel}
        onChangeText={text => setDataCombustivel(text)}
        keyboardType=''
      />

      <Text>Odômetro do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={odometroCombustivel}
        onChangeText={text => setOdometroCombustivel(text)}
        keyboardType="numeric"
      />

      <Text>Local do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={localCombustivel}
        onChangeText={text => setLocalCombustivel(text)}
      />

      <Text>Preço por Litro do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={precoLitroCombustivel}
        onChangeText={text => setPrecoLitroCombustivel(text)}
        keyboardType="numeric"
      />

      <Text>Valor Total do Combustível:</Text>
      <TextInput
        style={styles.input}
        value={valorCombustivelCombustivel}
        onChangeText={text => setValorCombustivelCombustivel(text)}
        keyboardType="numeric"
      />

      <Text>ID do Tipo de Combustível:</Text>
      <TextInput
        style={styles.input}
        value={idTipoCombustivel}
        onChangeText={text => setIdTipoCombustivel(text)}
        keyboardType="numeric"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',

    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
