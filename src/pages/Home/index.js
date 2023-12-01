import React, {useEffect, useState,} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import CardCombustivel from '../../components/CardCombustivel'



export default function Home() {

  
  const navigation = useNavigation()

  const [combustivel, setCombustivel] = useState([])

  useEffect(()=> {
async function LoadCombustivel(){
  const response = await api.get('combustivel')
  //console.log(response.data)
  setCombustivel(response.data)
}
LoadCombustivel();

  }, [])


// calcula o total gasto
const valores = Object.values(combustivel).map(item => parseFloat(item.valorCombustivelCombustivel) || 0);
const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);

// calcula o total de litros



  return (
    <View>    

      {/* <Button title='Clique aqui' onPress={()=> navigation.navigate('Relatorios')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Lembretes')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Historico')}/>

      <Button title='Clique aqui' onPress={()=> navigation.navigate('Relatorios')}/>
 */}

      <View  style={styles.cardContainer}>
        <Text>Veiculo: Fiat Uno Vivace</Text>
        <Text>Motorista: Cleison Carlos</Text>
        <Text>Total com combustivel: R$ {valorTotal}</Text>
      </View>


      <FlatList
      data={combustivel}
      keyExtractor={item => String(item.idCombustivel)}
      renderItem={({item}) => <CardCombustivel data={item}/>}
      
      />

    </View>
  )
}




const styles = StyleSheet.create({
  cardContainer: {
         padding: 10,
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
         borderColor: '#eee',
        borderWidth: 4,
      marginBottom: 10,
         margin: 10,   
      backgroundColor: '#fff'             
  }


});
