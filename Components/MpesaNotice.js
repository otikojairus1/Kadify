import { View, Text,Image } from 'react-native'
import React from 'react'
import { dark, light, primary } from '../Palletes/Colours'
import Appbar from './Appbar'
import {PrimaryButton} from '../Components/PrimaryButton'

export default function MpesaNotice({navigation}) {
  return (

    <View style={{flex:1, backgroundColor: light, paddingHorizontal:17, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: primary, fontSize:40, fontWeight: 'bold'}}>Kadify</Text>
       
      <Image source={require('../assets/successmpesa.gif')} style={{ height:200, width:200,}}/>
      <Text style={{color:dark, fontSize:20}}>Deposit request sent and accepted successfully by MPESA, check your phone for a prompt from Safaricom</Text>
  
    </View>
  )
}