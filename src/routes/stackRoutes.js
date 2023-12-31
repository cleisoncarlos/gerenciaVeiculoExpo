import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from  '../pages/Home'
import Cadastra from "../pages/Cadastra";
import CadastraCombustivel from "../pages/CadastraCombustivel";
import CadastraServico from "../pages/CadastraServico";
import CadastraLembrete from "../pages/CadastraLembrete";

const Stack = createNativeStackNavigator()

export default function StackRouter(){
    return (
        <Stack.Navigator
        screenOptions={{
           // headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          //  title:  'Cadastrar gasto'        
          }}
          >
            <Stack.Screen name="Cadastra" component={Cadastra} />
              <Stack.Screen name="CadastraCombustivel" component={CadastraCombustivel} />
              <Stack.Screen name="CadastraServico" component={CadastraServico} />
              <Stack.Screen name="CadastraLembrete" component={CadastraLembrete} />
            <Stack.Screen name="Home" component={Home}
             />
                         
        </Stack.Navigator>
    )
}