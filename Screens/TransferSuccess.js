import { View, Text , Dimensions} from 'react-native'
import React from 'react'
import { FontAwesome,Feather } from '@expo/vector-icons';
import { primary , secondary, light} from '../Palletes/Colours';
import SecondaryButton from '../Components/SecondaryButton'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function TransferSuccess() {
  return (
    <View style={{width: windowWidth, height: windowHeight, marginTop:40, backgroundColor:primary}}>
        {/* logo */}
        <View style={{width: windowWidth, height:300, marginTop:30, alignItems:'center', justifyContent:'center', backgroundColor: primary}}>
        <Feather name="check-circle" size={240} color={secondary}/>

        </View>
        {/* end of logo */}

        {/* title */}

        <View style={{width: windowWidth, height: 88, backgroundColor:primary}}>
            <Text style={{ fontSize:37, fontWeight:'bold', color:light, textAlign:'center'}}>Transfered</Text>
           
            <Text style={{ fontSize:37, fontWeight:'bold', color:light, textAlign:'center'}}>Successfully!</Text>
        </View>

        {/* end of title */}

        {/* start of description */}

        <View style={{width: 350, marginTop:20, height:80}}>
            <Text style={{ fontSize:22, color:light, textAlign:'center'}}>Dear user, your transaction was successful. You can now see its details in your receipt section</Text>
        </View> 

        {/* end of description */}

        {/* buttons */}

        <SecondaryButton title={'View details'} />
        <SecondaryButton title={'Continue'} />

        {/* end of butons */}
        <View style={{height:3, borderRadius:3, marginLeft:100, marginTop:57, width:150, backgroundColor:light}}></View>



    </View>
  )
}