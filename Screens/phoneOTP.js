import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import { dark, primary, light } from '../Palletes/Colours'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, FormControl, Input, useToast,Center, NativeBaseProvider } from "native-base";

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

export default function OtpFirebase({navigation, route}) {
 const {email} = route.params;
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device." }
    : undefined);
    const toast = useToast();
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={{ height: 100, marginTop: 0, }}>
        <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Let's Verify Your</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 34, color: primary, fontWeight: 'bold' }}>Kadify </Text>
          <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Phone Number</Text>
        </View>
      </View>
      <View style={{ height: 120, marginBottom: 15, marginTop: 5 }}>
        <Text style={{ fontSize: 20 }}>As a financial application, your security is our concern,
          Verifying your phone number helps in identifying fraudlent transactions. This number will also be
          used to send OTP passcodes to verify your transactions when required.
        </Text>

      </View>
      <Text style={{ marginTop: 2, fontSize: 20, fontWeight: "bold", color: dark }}>Enter your phone number</Text>
      <TextInput
        style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, borderWidth: 1, borderColor: '#e8e9f1', backgroundColor: '#e8e9f1' }}
        placeholder="+254 70 000000"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />

      <TouchableOpacity disabled={!phoneNumber} onPress={async () => {
        // The FirebaseRecaptchaVerifierModal ref implements the
        // FirebaseAuthApplicationVerifier interface and can be
        // passed directly to `verifyPhoneNumber`.
        try {
          const phoneProvider = new firebase.auth.PhoneAuthProvider();
          const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
          );
          setVerificationId(verificationId);
          showMessage({
            text: "KadifyPay Verification code has been sent to your phone.",
          });
        } catch (err) {
          showMessage({ text: `Error: ${err.message}`, color: "red" });
        }
      }} style={{ width: "100%", height: 50, display: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 0, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: primary }}>
        <MaterialIcons name="send-to-mobile" size={24} color={light} />
        <Text style={{ fontSize: 20, marginLeft: 10, color: light, fontWeight: 'bold' }}>Send Verification Code</Text>
      </TouchableOpacity>


      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold", color: dark }}>Enter Verification code</Text>
      <TextInput
        style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, borderWidth: 1, borderColor: '#e8e9f1', backgroundColor: '#e8e9f1' }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />



      <TouchableOpacity
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            navigation.navigate('Enable Biometrics', {"phone":phoneNumber, "email":email});
            // showMessage({ text: "Phone authentication successful 👍" });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
        style={{ width: "100%", display: 'flex', flexDirection: 'row', height: 50, marginTop: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: dark }}>
        <MaterialCommunityIcons name="sticker-check-outline" size={30} color={light} />
        <Text style={{ fontSize: 20, marginLeft: 10, color: light, fontWeight: 'bold' }}>Confirm Verification Code</Text>
      </TouchableOpacity>
      <View style={{ height: 3, borderRadius: 3, marginLeft: 90, marginTop: 100, width: 150, backgroundColor: primary }}></View>


      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
          onPress={() => showMessage(undefined)}>
          <Text style={{ color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
            {message.text}
          </Text>
        </TouchableOpacity>
    
      ) : undefined}



    </View>
  );
}

