import React from 'react';
import { primary,secondary, dark, light } from '../Palletes/Colours'
import { View, KeyboardAvoidingView, Dimensions, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard  } from 'react-native';

import { FontAwesome , AntDesign} from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const Login = () => {
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

<View style={{height: 150, marginTop:30,paddingLeft:17, backgroundColor: light}}>
{/* <Input mx="3" variant='filled' placeholder="username or email" w="95%" maxWidth="300px" />
<View style={{height:20}}></View>
<Input mx="3" variant='filled' placeholder="password or secure passcode" w="95%" maxWidth="300px" /> */}
 <View style={{paddingLeft: 17, marginBottom:10, marginRight:32, borderWidth:1, borderColor:primary, paddingTop:10 , paddingBottom:10, backgroundColor: light, borderRadius:10, color:dark}}>
   <TextInput  placeholder="Username or Email Address" style={{width:"100%"}}/>
 </View>
 <View style={{paddingLeft: 17, marginRight:32, paddingTop:10 , borderWidth:1, borderColor:primary, paddingBottom:10, backgroundColor: light, borderRadius:10, color:dark}}>
   <TextInput secureTextEntry={true} placeholder="Password" style={{width:"100%"}}/>
 </View>

</View>



{/* end of inputs */}
{/* start of buttons */}

<View style={{height: 180, backgroundColor: light}}>
    <TouchableOpacity style={{width:"87%", height: 50, display:'flex', flexDirection:'row', marginTop:20, marginLeft: 17, borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor: primary}}>
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