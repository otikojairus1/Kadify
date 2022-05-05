import { View, Text, TextInput, KeyboardAvoidingView,StyleSheet, TouchableWithoutFeedback, Keyboard, Platform,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { dark, primary } from '../Palletes/Colours';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen1 from '../Components/LoadingScreen1';
// import CheckBox from '@react-native-community/checkbox'
import axios from 'axios'
import { BASE_URI } from '../BASE_URI';

export default function SignUp({navigation}) {
    const [isSelected, setSelection] = React.useState(false);
    const [fullName, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [CPassword, setCPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

function submit(){
  setLoading(true);
  axios.post(BASE_URI+'/api/send/email/otp',{
    'email':"otikojairus@gmail.com",
    'name':"jairus otiko"
  }).then((response)=>{
    setLoading(false);
    navigation.navigate('Verify Email');

  }).catch((err)=>{
    console.log(err);
  })

  // console.log(fullName, Email, Password);
}


if(loading){

  return(
    <LoadingScreen1 />
  );

}else{


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{flex:1,justifyContent:'center', alignItems:'center',marginTop:40}}>
        
        {/* Start of wel come */}
        <View style={{marginTop:40, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 45, fontWeight: 'bold', color:primary}}>Kadify</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color:dark, marginTop:20}}>Please provide the following </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color:dark, marginTop:1}}>details for your new account</Text>
        </View>
        {/* End of welcome */}

        {/* Start of details input*/}
        <View style={{marginTop:10, paddingLeft: 17,paddingRight:17, justifyContent:'center', alignItems: 'center',height: 240}}>
            <View style={{flex:1}}>
                <TextInput autoFocus={false} value={fullName} onChangeText={(text)=>{setName(text)}} placeholder="Full names" style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16,borderWidth:1, borderColor: '#e8e9f1',backgroundColor: '#e8e9f1'}}></TextInput>
            </View>
            <View style={{flex:1}}>
            <TextInput value={Email} onChangeText={(text)=>{setEmail(text)}} placeholder="Email address" style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16,borderWidth:1, borderColor: '#e8e9f1',backgroundColor: '#e8e9f1'}}></TextInput>
            </View>
            <View style={{flex:1}}>
            <TextInput placeholder="Password " value={Password} onChangeText={(text)=>{setPassword(text)}} secureTextEntry={true} style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}></TextInput>
            </View>

            <View style={{flex:1}}>
            <TextInput placeholder="Confirm Password" value={CPassword} onChangeText={(text)=>{setCPassword(text)}} secureTextEntry={true} style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}></TextInput>
            </View>

        </View>
        {/* End of details input*/}

        {/* Start of agree check */}
        <View style={{marginTop: 20,height: 40, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex:1}}>
            {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          
        /> */}
            </View>
            <View style={{flex:3}}>
                <Text style={{fontSize:16, color:dark, fontWeight: 'bold'}}>By creating your account you have to agree</Text>
                <Text style={{fontSize:16,  color:dark,fontWeight: 'bold'}}>with our terms and conditions</Text>
            </View>

            <View></View>
        </View>
        {/* End of agree check */}

        {/* Buttons section start */}
        <View style={{marginTop: 30, height: 175, marginRight:17, justifyContent: 'center', alignItems: 'center',marginLeft: 17}}>
            <TouchableOpacity onPress={submit} style={{flex:1, height: 90, width: 320, justifyContent: 'center', alignItems: 'center',borderRadius: 10,backgroundColor: '#4f62c0'}}>
                <Text style={{fontSize:25, color: 'white'}}>Sign up my account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, flexDirection: 'row',height: 90, width: 320, justifyContent: 'center', alignItems: 'center',borderRadius: 10, marginTop: 10,backgroundColor: dark}}>
            <AntDesign name="creditcard" size={25} color="white" />
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', paddingLeft:10}}>Sign up with Kadify ID</Text>
            </TouchableOpacity>
            <View style={{flex:1, flexDirection: 'row',height: 90, width: 320, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Already have an account?</Text>
                <TouchableOpacity><Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 3}}>Sign in</Text></TouchableOpacity>
            </View>
        </View>
        {/* End of buttons section */}

        <View style={{justifyContent: 'center',flex: 1, alignItems: 'center', marginTop: 100}}>
            <View style={{height: 4,width: 120, backgroundColor: '#4f62c0', borderRadius: 5}}></View>
        </View>

      
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )}
}


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
  