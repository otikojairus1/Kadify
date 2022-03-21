import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Switch } from 'native-base';
import { primary, bg, secondary, dark, light } from '../Palletes/Colours';
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  LocalAuthenticationOptions,
  authenticateAsync 
} from 'expo-local-authentication';
let backgroundColor = '#EDF8F9';


export default function SetUpBiometrics({navigation}) {
  const biometricsAuth = async () => {
     
    const compatible = await hasHardwareAsync()
    if (!compatible) throw 'This device is not compatible for biometric authentication'
    const enrolled = await isEnrolledAsync()
    if (!enrolled) throw 'This device doesnt have biometric authentication enabled'
    const result = await authenticateAsync()
    console.log(result);
    if (!result.success) throw `${result.error} - Authentication unsuccessful`

    if(result){
      navigation.navigate('HomeWallet');
    }
    return result
}


  return (
    <View style={{marginTop:40, flex:1,backgroundColor: backgroundColor}}>
        {/* Start appbar */}
        <Appbar/>
        {/* End appbar */}
        
       
      <View style={{height: 60, paddingLeft:17, backgroundColor:backgroundColor}}>
        <Text style={{fontSize:40, fontWeight:'bold', color:primary}}>Kadify</Text>
      </View>
      <View style={{height: 40, paddingLeft:17, flexDirection:'row', backgroundColor:backgroundColor}}>
        <Text style={{fontSize:30, fontWeight:'bold', color:dark}}>Hello, </Text>
        <Text style={{fontSize:30, fontWeight:'bold', color:primary}}>Mbugua </Text>
      </View>
      <View style={{ paddingLeft:17, flexDirection:'row', backgroundColor:backgroundColor}}>
        <Text style={{fontSize:20, color:dark}}>You can use </Text> 
         <Text style={{fontSize:20, fontWeight:'bold',  color:primary}}>TouchID </Text>
         <Text style={{fontSize:20, color:dark}}>to Login and  </Text> 
      </View>
      <View style={{ paddingLeft:17,  backgroundColor:backgroundColor}}>
     
      <Text style={{fontSize:20, color:dark}}>authenticate or authorize transactions  </Text> 
      <Text style={{fontSize:20, color:dark, fontWeight: 'bold',}}>Set it up here with ease!  </Text> 
      </View>

      <View style={{height:280, marginTop:20, justifyContent:'center', alignItems:'center', backgroundColor:backgroundColor}}>
        <View style={{borderRadius:140, padding:3, borderColor: primary}}>
              <TouchableOpacity  style={{borderRadius:120, padding:20, borderColor: secondary}}>
              <Image source={require('../assets/finger.gif')} style={{ height:220, width:220, borderRadius:20}}/>
              </TouchableOpacity>
              </View>
      </View>

      <View style={{paddingLeft:17, marginBottom:20, paddingRight:17}}>
        <Text style={{fontSize:22, fontWeight:"bold", textAlign:'center'}}>Protect your Kadify wallet with your fingerprint</Text>
        <Text style={{fontSize:18, textAlign:'center'}}>Please note when you enable Fingerprint protection
        any fingerprint registered on this device can VERIFY your transactions or Sign in!</Text>
      </View>

      <View style={{paddingLeft:17, flexDirection:'row', justifyContent:'space-between', marginTop:10, paddingRight:17}}>
        <TouchableOpacity style={{height:50, width:140, borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor:secondary}}>
          <Text style={{ fontWeight:'bold', fontSize:20}}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={biometricsAuth} style={{height:50, width:140, borderRadius:12, justifyContent:'center', alignItems:'center', backgroundColor:primary}}>
          <Text style={{color:light, fontWeight:'bold', fontSize:20}}>Enable</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}