import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialCommunityIcons, Foundation, Entypo } from '@expo/vector-icons';
import Appbar from '../Components/Appbar';

export default function Help() {
  return (
    <View style={{flex:1, marginTop: 40, backgroundColor: '#EDF8F9'}}>
        {/* Start appbar here */}
        <Appbar />
        {/* End appbar */}

        {/* Start Landing */}
        <View style={{height: 130,paddingLeft: 17, paddingTop:20,marginTop:20}}>
            <Text style={{fontSize:40, fontWeight:'bold'}}>Helpline &</Text>
            <Text style={{fontSize:40, fontWeight:'bold'}}>Support</Text>
            <Text style={{fontSize:15, color: '#483c32',fontWeight:'bold'}}>Choose from the following actions</Text>
        </View>
        {/* End Landing */}

        {/* Start of actions section */}
        <View style={{height: 400,marginLeft: 17, marginRight: 17, justifyContent: 'space-between', alignItems: 'center',borderRadius: 20,flexDirection: 'row',marginTop: 30}}>
            {/* First partition */}
            <View style={{height:400,width: 160, justifyContent: 'center', }}>
                <TouchableOpacity style={{height:120, borderRadius: 20,elevation:10,backgroundColor: '#fff'}}>
                <Foundation name="book" size={45} color="#92C422" style={{paddingTop:16, paddingLeft:16,}}/>
                <Text style={{fontSize:20, paddingLeft:16, fontWeight: 'bold'}}>Read</Text>
                <Text style={{fontSize:20, paddingLeft:16, fontWeight: 'bold'}}>Manual book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:280, borderRadius: 20, elevation:10,marginTop:10, backgroundColor: '#fff'}}>
                    <Image source={require('../assets/avt.png')} style={{height:150, borderRadius:100, width:110, marginTop: 50,}}/>
                    <Text style={{paddingLeft: 16, fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Talk With</Text>
                    <Text style={{paddingLeft: 16, fontSize: 16, fontWeight: 'bold'}}>Our Operator</Text>
                </TouchableOpacity>
            </View>
            {/* Second partition */}
            <View style={{height:400,width: 100, justifyContent: 'center', alignItems: 'center',marginRight:30}}>
                <TouchableOpacity style={{height: 260, flex:1,width: 160, borderRadius: 20,elevation:7, backgroundColor: '#fff'}}>
                <Entypo name="chat" size={100} color="#94CFAF" style={{paddingLeft:70,paddingTop:60}}/>
                <Text style={{paddingLeft: 16,fontSize: 16, fontWeight: 'bold', marginTop: 35}}>Community</Text>
                <Text style={{paddingLeft: 16,fontSize: 16, fontWeight: 'bold', }}>Discussions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 140, width: 160,paddingLeft:12, paddingTop: 16, marginTop:10,borderRadius: 20,elevation:7, backgroundColor: '#4f62c0'}}>
                    <Image source={require('../assets/prfl.png')} style={{height:60, width:60,borderRadius:100}}/>
                    <Text style={{fontSize:16, fontWeight: 'bold', color: 'white', marginTop:7}}>Chat With</Text>
                    <Text style={{fontSize:16, fontWeight: 'bold', color: 'white'}}>Support Team</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* End of action section */}
    </View>
  )
}