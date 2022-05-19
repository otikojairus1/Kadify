import { View,Linking, Text } from 'react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton'

export default function Whatsappshare() {


    let text = "Hi, you can use my Kadify card for paying fees at any time. kindly note that it is only valid within nakuru county and can only be used twice. Cheers! CARD NUMBER: 638256267253, CARD NAME: ANDREW FWAMBA WABOMBA, MERCHANT TYPE: SCHOOL, CARD BALANCE: KES 50,000, VALID_REMAINING_TRANSACTIONS:2 open here exp://";
    let phoneNumber = "+254743047823";

    exp://wg-qka.community.app.exp.direct:80
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems:"center"}}>
          <Text>whatsappshare</Text>
      <PrimaryButton onPress={()=>Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`)} title={"open"} />
          
      <PrimaryButton onPress={()=>Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`)} title={"share"} />
    </View>
  )
}

