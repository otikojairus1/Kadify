import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary, light } from '../Palletes/Colours';


export default function PrimaryButton({title}) {
  return (
   

     <TouchableOpacity style={{width: 300, height: 60, justifyContent:'center', shadowColor:primary, alignItems:"center", elevation:10, borderRadius:15, marginTop:50, backgroundColor:primary, marginLeft:25}}>
     <Text style={{ fontSize: 25, color: light, }}>{title}</Text>
</TouchableOpacity>

  );
}