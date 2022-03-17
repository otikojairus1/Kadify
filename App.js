import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

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
import Help from './Screens/Helpline';
import Settings from './Screens/AppSettings';
import SetUpBiometrics from './Screens/SetUpBiometric';
import Budget from './Screens/Budget';
import LoadingScreen1 from './Components/LoadingScreen1';
import KardifyMapView from './Screens/KardifyMapView';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome3" >
              <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="sign up" component={SignUp} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Welcome2" component={Welcome2} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Welcome3" component={Welcome3} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Welcome5" component={Welcome5} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Welcome4" component={Welcome4} options={{ headerShown: false, headerTitleAlign: "center" }}/>     
              <Stack.Screen name="sign in" component={Login} options={{ headerShown: false, headerTitleAlign: "center" }}/>   
              <Stack.Screen name="HomeWallet" component={BottomTabs} options={{ headerShown: false, headerTitleAlign: "center" }}/>    
              <Stack.Screen name="MyCard" component={MyCards} options={{ headerShown: false, headerTitleAlign: "center" }}/>   
              <Stack.Screen name="transfer" component={TransferFunds} options={{ headerShown: false, headerTitleAlign: "center" }}/> 
              <Stack.Screen name="Help" component={Help} options={{ headerShown: false, headerTitleAlign: "center" }}/> 
              <Stack.Screen name="App Settings" component={Settings} options={{ headerShown: false, headerTitleAlign: "center" }}/>   
              <Stack.Screen name="Enable Biometrics" component={SetUpBiometrics} options={{ headerShown: false, headerTitleAlign: "center" }}/>  
              <Stack.Screen name="Verify Email" component={VerifyEmail} options={{ headerShown: false, headerTitleAlign: "center" }}/>   
              <Stack.Screen name="Register Phone" component={PhoneRegister} options={{ headerShown: false, headerTitleAlign: "center" }}/>  
              <Stack.Screen name="Verify Phone" component={VerifyPhone} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="Loading1" component={LoadingScreen1} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              <Stack.Screen name="mapView" component={KardifyMapView} options={{ headerShown: false, headerTitleAlign: "center" }}/>
              
            </Stack.Navigator>
            
        </NavigationContainer>
    </NativeBaseProvider>

  );
}

