import React from 'react';
import { primary,secondary, dark, light } from '../Palletes/Colours'
import { View, KeyboardAvoidingView, Dimensions, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, TouchableOpacity, Keyboard  } from 'react-native';
//import PinInput from 'react-native-pin-entry'
import CountDown from 'react-native-countdown-component';
import { FontAwesome , AntDesign} from '@expo/vector-icons';
import AnimatedCodeInput from "@brainsbeards/react-native-animated-code-input";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const VerifyEmail = ({navigation}) => {
    const [code, setCode] = React.useState('');
    const onChangeText = React.useCallback((text) => {
        setCode(text);
      }, []);

      const onSubmit = () => {
          console.log("worked");
      }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   
<View style={{flex:1, justifyContent:"center", marginTop:-100, backgroundColor: light}}>

         
<View style={{height:100, paddingLeft:17, marginTop:100, backgroundColor:light}}>
  <Text style={{ fontSize:34, fontWeight:'bold'}}>Verify Your</Text>
  <Text style={{ fontSize:34, fontWeight:'bold'}}> Email Account!</Text>
</View>

{/* of sign in wording */}

<View>

<View style={{height: 100, paddingLeft:17, marginBottom:20, backgroundColor:light}}>
 <Text style={{ fontSize:16, }}> Enter the 4digit code we have sent to your email</Text>
 <Text style={{ fontSize:16, }}> address. If you can't find it make sure you double </Text>
 <Text style={{ fontSize:16, }}> check your email before retrying. We've sent the</Text>
 <Text style={{ fontSize:16, }}> code to:</Text>
 <Text style={{ fontSize:18, fontWeight:'bold', color:primary }}> jane@yahoo.com</Text>
</View>

{/* end of description */}

{/* start of inputs */}
<AnimatedCodeInput
              value={code}
              numberOfInputs={4}
              onChangeText={onChangeText}
              onSubmitCode={onSubmit}
            />

<View style={{height: 20}}></View>

{/* end of inputs */}
{/* start of countdown */}
<CountDown
        until={15 * 10 + 30}
        size={20}
        onFinish={() => ()=>console.log("completed countdown")}
        digitStyle={{backgroundColor: primary}}
        digitTxtStyle={{color: '#fff'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minutes', s: 'Seconds'}}
      />

{/* end of countdown */}
{/* start of buttons */}

<View style={{height: 180, backgroundColor: light, paddingLeft:40, paddingTop:30}}>
    <Text style={{ fontSize:16, fontWeight:'bold', color:primary }}>The code will expire upon completion of the countdown!</Text>
    <TouchableOpacity onPress={()=>{navigation.navigate('PhoneOTP')}} style={{marginTop:12}}>
        <Text style={{ fontSize:16, color:primary }}>Did'nt get the code? Resend Here!</Text>

    </TouchableOpacity>
    <View style={{flex:1,  marginTop: 12}}>
        <Text style={{ fontSize:12, fontWeight:'bold'}}>NOTE: The app will automatically verify your pin upon completion</Text>
        <Text style={{ fontSize:12, fontWeight:'bold'}}>of your one time pin entry!</Text>
    </View>

</View>


{/* end of buttons */}





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

export default VerifyEmail;