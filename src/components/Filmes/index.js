import { View, Text } from 'react-native'
import React from 'react'

export default function Filmes({data}) {
  return (
    <View>
      <Text>{data.localCombustivel}</Text>
    </View>
  )
}