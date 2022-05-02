import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import PhoneInput from "react-native-phone-input";
import { light, dark, secondary, primary, bg } from "../Palletes/Colours";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";

// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup
try {
  firebase.initializeApp({
 
  apiKey: "AIzaSyByJnlmWtrWxOc5RA2-g5txqUGuMcx8wvQ",
  authDomain: "kadify.firebaseapp.com",
  projectId: "kadify",
  storageBucket: "kadify.appspot.com",
  messagingSenderId: "153045552022",
  appId: "1:153045552022:web:097c313abcc9ced972abb7",
  measurementId: "G-EWXQGSYJNC"


  });
} catch (err) {
  // ignore app already initialized error in snack
}

export default class PhoneRegister extends Component {
  
  constructor() {
    super();

    this.recaptchaVerifier = React.createRef(null);

    this.state = {
      valid: "",
      type: "",
      value: "",
      verificationId:"",
      verificationCode:""

    };

    this.updateInfo = this.updateInfo.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  updateInfo() {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value: this.phone.getValue()
    });
  }

  renderInfo() {
    let bg;
    if (this.state.value) {
      if (this.state.valid.toString() == "true"){
        bg = "green";
      }else{
       bg = "red";
      }
      return (
        <View style={{backgroundColor:bg,  borderRadius: 5,padding: 10,
          marginTop: 20}}>
          <Text style={{color:light}} >
            Is My Phone Number available:{" "}
            <Text style={{ fontWeight: "bold" }}>
              {this.state.valid.toString()}
            </Text>
          </Text>
          <Text style={{color:light}} >
            Phone number type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
          </Text>
          <Text style={{color:light}} >
            Checked phone number:{" "}
            <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
          </Text>
        </View>
      );
    }
  }

  render() {
   
 
    const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;

  
    return (
      <View style={styles.container}>
             <FirebaseRecaptchaVerifierModal
                ref={this.recaptchaVerifier}
                firebaseConfig={firebaseConfig}
              />
          <View style={{height:100, paddingLeft:0, width:300, marginTop:100, backgroundColor:"EDF8F9"}}>
            <Text style={{ fontSize:34, fontWeight:'bold'}}>Phone</Text>
            <Text style={{ fontSize:34, fontWeight:'bold'}}> Registration</Text>
        </View>

        <View style={{width:300, marginBottom:16}}>
            <Text style={{ fontSize:16}}>Please enter your valid phone number. We will</Text>
            <Text style={{ fontSize:16}}>also send a 4 digit secure code to your number</Text>
            <Text style={{ fontSize:16, fontWeight:'bold', color:primary }}>You can select your country by clicking the flag holder.</Text>
            <Text style={{ fontSize:16, fontWeight:'bold'}}>Alternatively, type your number starting with your country code (+254)</Text>
        </View>

          <View style={{height:50, width:300, justifyContent:'center', paddingLeft:10, borderRadius:10, alignItems:'center', borderWidth:1, borderColor:primary, backgroundColor:"#E3E4F4" }}>
          <PhoneInput
          
          ref={ref => {
            this.phone = ref;
          }}
        />
          </View>
          <Text style={{fontWeight: "bold" , fontStyle:'italic', color:primary}}>Kindly check if your number is available before confirming its registration</Text>
   
          {this.renderInfo()}
        <TouchableOpacity onPress={this.updateInfo} style={styles.button}>
          <Text style={{fontWeight: "bold", color:dark }}>Confirm availability of your number</Text>
        </TouchableOpacity>

       

        <TouchableOpacity onPress={()=>{
                    console.log("working");
                    async () => {
                              // The FirebaseRecaptchaVerifierModal ref implements the
                              // FirebaseAuthApplicationVerifier interface and can be
                              // passed directly to `verifyPhoneNumber`.
                              try {
                                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                                const verificationId = await phoneProvider.verifyPhoneNumber(
                                  "+254722753364",
                                  this.recaptchaVerifier
                                );
                                this.setState({
                                  verificationId:verificationId
                                });
                              
                          
                              } catch (err) {
                                
                              }
                            }
        // this.props.navigation.navigate('Verify Phone')
         
          
          }} style={{height: 50, elevation:10,  borderRadius:10, width: 300, justifyContent:'center', alignItems:'center', backgroundColor:primary, marginTop: 30}}>
            <Text style={{ fontSize:20, color:light}}>Register Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:25}}>
            <Text style={{fontWeight: "bold", textAlign:'center'}}>Kindly review our Terms and Conditions Policy regarding </Text>
            <Text style={{fontWeight: "bold", textAlign:'center'}}>Our phone number verification service </Text>
        </TouchableOpacity>
        {/* <Text>{this.state.value}</Text> */}
        <View style={{height:3, borderRadius:10, width: 200, backgroundColor:primary, marginTop:150}}></View>
      </View>
    );
  }
} 

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 0,
    paddingTop: 0
  },
  info: {
    // width: 200,
    borderRadius: 5,
    
    padding: 10,
    marginTop: 20
  },
  button: {
    marginTop: 10,
    backgroundColor: secondary, 
    borderRadius:10,
    width:300,
    height: 50,
    justifyContent:'center', 
    alignItems:'center', 
    

    
    padding: 10
  }
});

