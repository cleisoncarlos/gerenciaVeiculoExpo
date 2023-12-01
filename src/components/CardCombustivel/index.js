import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { LinearGradient } from 'expo-linear-gradient';

export default function CardCombustivel({data}) {

    // formatar data
    const dataOriginal = data.dataCombustivel
    const dataFormatada = new Date(dataOriginal).toLocaleDateString('pt-BR');    
   // console.log(dataFormatada); // Saída: 01/01/2000
    

 function calculaLitros(a, b){
    return `${a / b} litros`

} 

// mapear o tipo de compustivel pela chave estrangeira
const [tipoCombustivel, setTipoCombustivel] = useState('Tipo Desconhecido');

useEffect(() => {
  // Função para mapear o índice para o nome do combustível
  const mapTipoCombustivel = (index) => {
    switch (index) {
      case 1:
        return 'Gasolina';
      case 2:
        return 'Etanol';
      case 3:
        return 'Diesel';
      // Adicione mais casos conforme necessário para outros índices
      default:
        return 'Tipo Desconhecido';
    }
  };
      // Verifica se o ID do tipo de combustível é válido e mapeia para o nome correspondente
      const nomeTipo = mapTipoCombustivel(data.idTipoCombustivel);
      setTipoCombustivel(nomeTipo);
    }, [data.idTipoCombustivel]);
  



  return (
    <LinearGradient 
    colors={['#284893', '#5679C0']}
    style={styles.cardContainer}
    >
<MaterialCommunityIcons name="car-estate" color='rgba(0, 0, 0, 0.1)' size={140}  style={styles.iconBg} />

        <View>
        <Text style={styles.text}><MaterialCommunityIcons name="gas-station" color='#ADBFE9' size={18} /> {tipoCombustivel} </Text>
        {/* <Text style={styles.text}>{data.idCombustivel} </Text> */}
        <Text style={styles.text}><MaterialCommunityIcons name="car-speed-limiter" color='#ADBFE9' size={18} />  {data.odometroCombustivel} Km </Text>
        <Text style={styles.text}><MaterialCommunityIcons name="map-marker" color='#ADBFE9' size={18} /> {data.localCombustivel} </Text>
        </View>

        <View>
        <Text style={styles.text}> <MaterialCommunityIcons name="calendar" color='#ADBFE9' size={18} /> {dataFormatada} </Text>
        <Text style={styles.text}> <MaterialCommunityIcons name="cash-register" color='#ADBFE9' size={18} /> Valor: R$ {data.valorCombustivelCombustivel} </Text>
        <Text style={styles.text}><MaterialCommunityIcons name="fuel" color='#ADBFE9' size={18} />  {calculaLitros(data.valorCombustivelCombustivel, data.precoLitroCombustivel)} </Text>
     
        </View>
    
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    cardContainer: {
           padding: 10,
           flexDirection: 'row',
           justifyContent: 'space-between',
        //   borderColor: '#fff',
         //  borderWidth: 4,
        //   marginBottom: 10,
        //   margin: 10,        
        borderRadius: 4,
        margin: 10,
         
            shadowColor: '#171717',
           
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 3,
       
          
    },
  
    btLink: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#555",
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
    },
    btText: {
      color: "#fff",
      marginStart: 10,
      fontSize: 16,
    },
    iconBg: {
        marginStart: -10,
        marginTop: -40,
        position: 'absolute',    


    },
    text: {
        color: '#DFE7F7'
    }
  });
  