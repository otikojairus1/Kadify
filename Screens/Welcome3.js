import { View, Text , Dimensions} from 'react-native'
import React from 'react'
import { primary , secondary, light} from '../Palletes/Colours';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons';
import SecondaryButton from '../Components/SecondaryButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function Welcome3() {
  return (
    <View style={{ height: windowHeight, width:windowHeight, backgroundColor:primary, marginTop:40}}>
        {/* logo */}
        <View style={{ height: 300, width: 300, justifyContent:'center', alignItems:'center', backgroundColor:primary, marginLeft:30, marginTop:80}}>
        <Fontisto name="wallet" size={240} color={light} />
        </View>
        {/* logo */}

        {/* description */}
        <View style={{width: windowWidth, height: 70, backgroundColor:primary, alignItems:'center', justifyContent:'center'}}> 
        <Text style={{fontSize:55, color:light, fontWeight:'bold'}} >Kadify</Text>
       

        </View>
        <View style={{width: windowWidth, height:70, backgroundColor:primary}}>
            <Text style={{ fontSize: 25, textAlign:'center', color:light }}>Bank, Finance and Wallet for your physical and Virtual cards</Text>
        </View>
        

        {/* end of description */}

        {/* button */}
        <View style={{height:50}}></View>

        <SecondaryButton title = {"Lets get started"}/>
        <View style={{height:3, borderRadius:3, marginLeft:100, marginTop:90, width:150, backgroundColor:light}}></View>
    </View>
  )
}