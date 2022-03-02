
import { View, Text, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { light, primary, secondary } from '../Palletes/Colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PrimaryButton from '../Components/PrimaryButton';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function Welcome5() {
  return (
    <View style={{width: windowWidth, height: windowHeight, marginTop:50, backgroundColor: light}}>
        {/* logo */}
        <View style={{height: 200, width:200, marginLeft:85, marginTop:120, borderRadius:200, backgroundColor:light, borderColor:primary}}>
        <Fontisto name="slightly-smile" size={200} color={primary} />
        </View>
        {/* end of logo */}

        {/* Title  and description*/}

        <View style={{width: windowWidth, height: 90, marginTop:20, alignItems:'center', justifyContent:'center', backgroundColor:light}}>
            <Text style={{fontSize: 40, fontWeight:'bold'}}>Easy To Use</Text>
        </View>
        <View style={{width: 300, height: 120, paddingLeft:50, backgroundColor:light}}>
            <Text style={{ fontSize: 22, color:'grey', textAlign:'center'}}>Designed for you! manage your bank accounts, cards and other financial transactions. Its now easy like never before </Text>
        </View>

        {/* end of title and description */}
             {/* start button */}

    
 <PrimaryButton title={'Next'}/>
    {/* end of button */}
    <View style={{height:3, borderRadius:3, marginLeft:100, marginTop:57, width:150, backgroundColor:primary}}></View>

    </View>
  )
}