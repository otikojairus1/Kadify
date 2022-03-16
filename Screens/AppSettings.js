import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Switch } from 'native-base';


export default function Settings({navigation}) {
  return (
    <View style={{marginTop:40, flex:1,backgroundColor: '#EDF8F9'}}>
        {/* Start appbar */}
        <Appbar/>
        {/* End appbar */}
        
        {/* Header section */}
      <Text style={{fontSize: 40,paddingLeft: 17, fontWeight: 'bold'}}>App Settings</Text>
      {/* End Header section */}
      
      <View style={{height: 130, marginLeft: 17, marginRight: 17, borderRadius:10, marginTop:8, backgroundColor: '#4f62c0'}}>
      <Ionicons name="md-trophy-sharp" size={100} color="#E0CA00" style={{position: 'absolute', top: -30, marginLeft: 220}}/>
      <Text style={{paddingLeft: 17, fontSize: 16, color:'white',marginTop:20, fontWeight: 'bold'}}>Do more with merchants account.</Text>
      <Text style={{paddingLeft: 17, fontSize: 16, color:'white', fontWeight: 'bold'}}>Get a merchant account</Text>
        <TouchableOpacity><Text style={{paddingLeft: 17, fontSize: 16, color:'white',marginTop: 50,textDecorationLine: 'underline', fontWeight: 'bold'}}>Get started</Text>
        </TouchableOpacity>
      </View>
{/* Begin settings options */}
      <View style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 20, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/icons8-notification.gif')} style={{height: 30,width: 30}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Get Notifications</Text>
          <View style={{marginLeft: 80, marginTop: 3}}><Switch size="md" /></View>
      </View>

      <View style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 5, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/subscribe.gif')} style={{height: 30,width: 30}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Email Newsletters</Text>
          <View style={{marginLeft: 75, marginTop: 3}}><Switch size="md" /></View>
      </View>

      <TouchableOpacity style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 5, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/encrypt.png')} style={{height: 30,width: 30}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Privacy and Security</Text>
          <View style={{marginLeft: 68, marginTop: 15}}><Entypo name="chevron-thin-right" size={24} color="grey" /></View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop:5 , height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/services.gif')} style={{height: 30,width: 30}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Account Settings</Text>
          <View style={{marginLeft: 95, marginTop: 15}}><Entypo name="chevron-thin-right" size={24} color="grey" /></View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 5, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/increase.png')} style={{height: 26,width: 25}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 10,marginRight: 26, fontSize:20}}>Set Stock Rates</Text>
          <View style={{marginLeft: 100, marginTop: 15}}><Entypo name="chevron-thin-right" size={24} color="grey" /></View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 5, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><Image source={require('../assets/pie-chart.gif')} style={{height: 30,width: 30}}/></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Data & Usage</Text>
          <View style={{marginLeft: 118, marginTop: 15}}><Entypo name="chevron-thin-right" size={24} color="grey" /></View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 17, marginRight: 17,elevation:5,flexDirection: 'row',borderRadius:10, marginTop: 5, height: 50,overflow: 'hidden', backgroundColor: 'white'}}>
          <View style={{marginTop:12, marginLeft:10}}><MaterialIcons name="do-not-disturb-alt" size={30} color="red" /></View>
          <Text style={{marginTop: 15, paddingLeft: 5,marginRight: 20, fontSize:20}}>Factory reset</Text>
          <View style={{marginLeft: 120, marginTop: 15}}><Entypo name="chevron-thin-right" size={24} color="grey" /></View>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 30, marginRight: 30,elevation:9,flexDirection: 'row',borderRadius:10, justifyContent: 'center', alignItems: 'center',marginTop: 5, height: 45,overflow: 'hidden', backgroundColor: '#4f62c0'}}>
        
          <Text style={{fontSize:20, color: 'white'}}>Deactivate My Account</Text>
      </TouchableOpacity>

      {/* End of settings options */}

    </View>
  )
}