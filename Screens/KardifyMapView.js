import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { light, primary, secondary, dark } from '../Palletes/Colours'
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import LoadingScreen1 from '../Components/LoadingScreen1';
import Appbar from '../Components/Appbar';

export default function KardifyMapView() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [CurrentLocation, setCurrentLocation] = React.useState(null);
   let [latitude, setLatitude] = React.useState(null);
  //rlet latitude, longitude;
  let [longitude, setLongitude] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  // useeffect hook

  React.useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      setLoading(false);
    
    })();
  },[]);


 
 
  let text = JSON.stringify(CurrentLocation);
//console.log(text);
  // end of use effect hook
if (loading){
  return(
    <LoadingScreen1 />
  );

}else{


  
    return (
      <View style={styles.container}>
       

       <View style={{height:50, width:330, flexDirection:'row', marginLeft:10, marginRight:10, justifyContent:'space-between',}}>
    <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
    <FontAwesome name="align-center" size={30} color={primary} />
    </TouchableOpacity>

    <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:primary}}>Kadify</Text>
      <Text style={{fontSize:30, fontWeight:'bold', color:dark}}>GeoFence</Text>
    </View>

    <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
    <MaterialCommunityIcons name="shape-square-plus" size={30} color={primary} />
    </TouchableOpacity>
    </View>       
        <MapView style={styles.map} initialRegion={{
            longitude: JSON.parse(text).coords.longitude,
            latitude:JSON.parse(text).coords.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }} >
          <Marker
          pinColor='navy'
              coordinate={{
                longitude: JSON.parse(text).coords.longitude,
                latitude: JSON.parse(text).coords.latitude,
               
              }}
          >
            <Callout>
              <Text styles={{fontSize:30}}>Kadify Client Wallet Location</Text>
            </Callout>
  
          
          </Marker>
          <Circle center={{  latitude:JSON.parse(text).coords.latitude, longitude:JSON.parse(text).coords.longitude}}
            radius={1000}
            strokeColor={"green"}
            fillColor={'rgba(16, 10, 130, 0.17)'}
            />
        </MapView>
        <View style={{height:70, justifyContent:'center'}}>
                <Text style={{fontSize:17, textAlign:'center'}}>The green circle shows your Kadify selected card's geofence. The card can only be
            used inside the indicated region. you can always adjust its radius bound or location via the 
            card settings.
                </Text>
        </View>
      </View>
    );
    
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.8,
  },
});
