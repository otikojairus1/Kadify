import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { light, primary, secondary, dark } from '../Palletes/Colours'
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Appbar() {
  return (
    <View style={{height:50, flexDirection:'row', marginLeft:10, marginRight:10, justifyContent:'space-between',}}>
    <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
    <FontAwesome name="align-center" size={30} color={primary} />
    </TouchableOpacity>

    <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
    <MaterialCommunityIcons name="shape-square-plus" size={30} color={primary} />
    </TouchableOpacity>
   
</View>
  )
}