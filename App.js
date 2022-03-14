import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
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



export default function App() {
  return (
    <NativeBaseProvider>

    
      {/* <Welcome /> */}
      {/* <Welcome2 />  */}
        {/* <Welcome3 /> */}
      {/* <Welcome4 />  */}
      {/* <Welcome5 /> */}
      {/* <TransferSuccess /> */}
      {/* <Login /> */}
      {/* <VerifyEmail /> */}
      {/* <Profile /> */}
      {/* <HomeWallet/> */}
      {/* <SignUp /> */}
     
      {/* <PhoneRegister /> */}
      {/* <VerifyPhone/> */}
      
      

    
    </NativeBaseProvider>

  );
}

