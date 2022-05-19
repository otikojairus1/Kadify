import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, DrawerLayoutAndroid, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import * as firebase from "firebase";
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// start of screen importation
import TransferSuccess from './Screens/TransferSuccess';
import Welcome from './Screens/Welcome';
import Welcome2 from './Screens/Welcome2';
import Welcome3 from './Screens/Welcome3';
import Welcome4 from './Screens/Welcome4';
import Welcome5 from './Screens/Welcome5';
import Login from './Screens/SignIn';
import VerifyEmail from './Screens/VerifyEmail';
import PhoneRegister from './Screens/PhoneRegister';
import VerifyPhone from './Screens/VerifyPhone';
import Profile from './Screens/Profile';
import HomeWallet from './Screens/HomeWallet';
import SignUp from './Screens/SignUp';
import SendMoney from './Screens/SendMoney';
import TransferFunds from './Screens/TransferFunds';
import MyCards from './Screens/MyCards';
import CardLoading from './Screens/CardLoading';
import BottomTabs from './Screens/BottomTabs/BottomTab';
import React from 'react'
import Help from './Screens/Helpline';
import Settings from './Screens/AppSettings';
import SetUpBiometrics from './Screens/SetUpBiometric';
import Budget from './Screens/Budget';
import LoadingScreen1 from './Components/LoadingScreen1';
import KardifyMapView from './Screens/KardifyMapView';
import OtpFirebase from './Screens/phoneOTP';
import MpesaDeposit from './Screens/mpesaDeposit';
import MpesaNotice from './Components/MpesaNotice';
import { primary } from './Palletes/Colours';
import MyWeb from './Screens/webview'
import ContactList from './Screens/PhoneContacts/phoneContacts';
import CreateCards from './Screens/createCard';
import Whatsappshare from './Components/whatsappshare';




const Stack = createNativeStackNavigator();

export default function App() {


  const drawer = React.useRef(null);
  const [drawerPosition, setDrawerPosition] = React.useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{ height: 150, justifyContent: "center", alignItems: "center", backgroundColor: primary, width: "110%" }}>
        <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>Kadify</Text>
      </View>
      <TouchableOpacity onPress={() => { }} style={{ height: 100, width: "110%", justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deposit Money</Text>
      </TouchableOpacity>

    </View>
  );
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}
        >
          <Stack.Navigator initialRouteName="Welcome3" >
            {/* stacks with drawer here */}

            <Stack.Screen name="MyCard" options={{ headerShown: false, headerTitleAlign: "center" }}>
              {props => <MyCards {...props} openDrawer={() => drawer.current.openDrawer()} options={{ headerShown: false, headerTitleAlign: "center" }} />}
            </Stack.Screen>
            <Stack.Screen name="HomeWallet" options={{ headerShown: false, headerTitleAlign: "center" }}>
              {props => <BottomTabs {...props} openDrawer={() => drawer.current.openDrawer()} options={{ headerShown: false, headerTitleAlign: "center" }} />}
            </Stack.Screen>

            {/* end of stacks with drawers */}
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="sign up" component={SignUp} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Welcome2" component={Welcome2} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Welcome3" component={Welcome3} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Welcome5" component={Welcome5} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Welcome4" component={Welcome4} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="sign in" component={Login} options={{ headerShown: false, headerTitleAlign: "center" }} />
            {/* <Stack.Screen name="HomeWallet" component={BottomTabs} options={{ headerShown: false, headerTitleAlign: "center" }}/>     */}
            {/* <Stack.Screen name="MyCard" component={MyCards} options={{ headerShown: false, headerTitleAlign: "center" }}/>    */}
            <Stack.Screen name="transfer" component={TransferFunds} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="App Settings" component={Settings} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Enable Biometrics" component={SetUpBiometrics} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Verify Email" component={VerifyEmail} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Register Phone" component={PhoneRegister} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Verify Phone" component={VerifyPhone} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Loading1" component={LoadingScreen1} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="mapView" component={KardifyMapView} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="PhoneOTP" component={OtpFirebase} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="mpesa" component={MpesaDeposit} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="mpesanotice" component={MpesaNotice} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="ContactList" component={ContactList} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="createCard" component={CreateCards} options={{ headerShown: false, headerTitleAlign: "center" }} />
            <Stack.Screen name="Whatsappshare" component={Whatsappshare} options={{ headerShown: false, headerTitleAlign: "center" }} />
            
            <Stack.Screen name="MyWeb" component={MyWeb} options={{ headerShown: false, headerTitleAlign: "center" }} />
          </Stack.Navigator>
        </DrawerLayoutAndroid>

      </NavigationContainer>
    </NativeBaseProvider>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: -20,

    // alignItems: "center",
    // justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
})
