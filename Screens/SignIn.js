import React from 'react';
import { primary,secondary, dark, light, } from '../Palletes/Colours'
import { View, KeyboardAvoidingView, Dimensions, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard ,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome , AntDesign} from '@expo/vector-icons';
import { 
  hasHardwareAsync,
  isEnrolledAsync,
  LocalAuthenticationOptions,
  authenticateAsync 
} from 'expo-local-authentication';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const Login = ({navigation}) => {


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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   
<View style={{ flex:1, justifyContent:"center", marginTop:20, backgroundColor: light}}>

         
<View style={{height:100, paddingLeft:17, marginTop:0, backgroundColor:light}}>
  <Text style={{ fontSize:34, fontWeight:'bold'}}>Sign In</Text>
  <Text style={{ fontSize:34, fontWeight:'bold'}}>To Account</Text>
</View>

{/* of sign in wording */}

<View>

<View style={{height: 70, paddingLeft:17, backgroundColor:light}}>
 <Text style={{ fontSize:16, }}> use your username or email and password to sign</Text>
 <Text style={{ fontSize:16, }}> in to your account. You can also sign in using your</Text>
 <Text style={{ fontSize:18, fontWeight:'bold', color:primary }}> KardifyPAY ID</Text>
</View>

{/* end of description */}

{/* start of inputs */}

      <View style={{marginTop:10, paddingLeft: 17,paddingRight:17, justifyContent:'center', alignItems: 'center',height: 140}}>
            <View style={{flex:1}}>
            <TextInput placeholder="Email address" style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16,borderWidth:1, borderColor: '#e8e9f1',backgroundColor: '#e8e9f1'}}></TextInput>
            </View>
            <View style={{flex:1}}>
            <TextInput placeholder="Password " secureTextEntry={true} style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}></TextInput>
            </View>
        </View>



{/* end of inputs */}
{/* start of buttons */}

<View style={{height: 180, backgroundColor: light}}>
    <TouchableOpacity onPress={()=>{ navigation.navigate('HomeWallet')}} style={{width:"87%", height: 50, display:'flex', flexDirection:'row', marginTop:20, marginLeft: 17, borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor: primary}}>
    <AntDesign name="login" size={24} color="#fff" />
        <Text style={{ fontSize:20, marginLeft:10, color:light, fontWeight:'bold'}}>Sign in</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:"87%", display:'flex', flexDirection:'row', height: 50, marginTop:20, marginLeft: 17, borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor: dark}}>
    <FontAwesome name="credit-card-alt" size={24} color="#fff" />
        <Text style={{ fontSize:20, marginLeft:10, color:light, fontWeight:'bold'}}>Sign in with KardifyID</Text>
    </TouchableOpacity>
</View>


{/* end of buttons */}

<TouchableOpacity style={{marginLeft:130, marginTop:-30}}>
    <Text style={{ fontSize:16, color:primary}}>Dont have an account? sign up</Text>
</TouchableOpacity>



</View>
<TouchableOpacity onPress={biometricsAuth} style={{position:"absolute", left:120, top:630}}>
<Image source={require('../assets/finger.gif')} style={{ height:120, width:120, borderRadius:20}}/>
</TouchableOpacity>




</View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default Login;