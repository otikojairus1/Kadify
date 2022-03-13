
import { View, Text, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { light, primary, secondary } from '../Palletes/Colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PrimaryButton from '../Components/PrimaryButton';
import { Feather } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function Welcome4() {
  return (
    <View style={{width: windowWidth, height: windowHeight, marginTop:50, backgroundColor: light}}>
        {/* logo */}
        <View style={{height: 200, width:200, marginLeft:85, marginTop:120, borderRadius:200, backgroundColor:light, borderColor:primary}}>
        <Feather name="lock" size={200} color={primary} />
        </View>
        {/* end of logo */}

        {/* Title  and description*/}

        <View style={{width: windowWidth, height: 90, marginTop:20, alignItems:'center', justifyContent:'center', backgroundColor:light}}>
            <Text style={{fontSize: 40, fontWeight:'bold'}}>Encrypted</Text>
        </View>
        <View style={{width: 300, height: 100, paddingLeft:50, backgroundColor:light}}>
            <Text style={{ fontSize: 22, color:'grey', textAlign:'center'}}>Our new encyption algorithm makes it more secure between your Mpesa, AirtelMoney or your bank</Text>
        </View>

        {/* end of title and description */}
             {/* start button */}

    
 <PrimaryButton title={'Next'}/>
    {/* end of button */}
    <View style={{height:3, borderRadius:3, marginLeft:100, marginTop:57, width:150, backgroundColor:primary}}></View>

    </View>
  )
}