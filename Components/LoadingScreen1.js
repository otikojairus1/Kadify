import { View, Text,Image } from 'react-native'
import React from 'react'
import { light, primary } from '../Palletes/Colours'
import Appbar from './Appbar'

export default function LoadingScreen1({navigation}) {
  return (

    <View style={{flex:1, backgroundColor: light, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: primary, fontSize:40, fontWeight: 'bold'}}>Kadify</Text>
       
      <Image source={require('../assets/loading1.gif')} style={{ height:60, width:60,}}/>
      <Text style={{color:primary, fontSize:20}}>Redefining your experience</Text>
    </View>
  )
}