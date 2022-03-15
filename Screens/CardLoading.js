import { View, Text } from 'react-native'
import React from 'react'
import { bg } from '../Palletes/Colours'

export default function CardLoading() {
  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:bg, alignItems:'center',}}>
      <Text>CardLoading</Text>
    </View>
  )
}