import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransferSuccess from './Screens/TransferSuccess';
import Welcome from './Screens/Welcome';
import Welcome2 from './Screens/Welcome2';
import Welcome3 from './Screens/Welcome3';
import Welcome4 from './Screens/Welcome4';
import Welcome5 from './Screens/Welcome5';

export default function App() {
  return (
    <View>
      {/* <Welcome /> */}
      {/* <Welcome2 /> */}
      {/* <Welcome3 /> */}
      {/* <Welcome4 /> */}
      <Welcome5 />
      <TransferSuccess />
    </View>
  );
}

