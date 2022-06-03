import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function SuccessTransfer() {
  return (
    <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
    <Image source={require('../assets/paymentsuccess.gif')} style={{ height:500, width:500, borderRadius:130}}/>
    <Text>You have successfully completed your payment</Text>
    </View>
  )
}