import { View, Text, TouchableOpacity,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image,TextInput } from 'react-native'
import React from 'react'
import { light, primary, secondary, dark } from '../Palletes/Colours'
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

let bg = "#E8E9F1";
export default function Profile() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={{flex:1, }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ marginTop:-50, backgroundColor:bg, flex:1, justifyContent:'center', }}>
        {/* start of appbar */}
      <View style={{height:50, flexDirection:'row', marginLeft:10, marginRight:10, justifyContent:'space-between',}}>
          <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
          <FontAwesome name="align-center" size={30} color={primary} />
          </TouchableOpacity>

          <TouchableOpacity style={{height:40, width:40, justifyContent:'center', alignItems:'center',}}> 
          <MaterialCommunityIcons name="shape-square-plus" size={30} color={primary} />
          </TouchableOpacity>
         
      </View>
      {/* end of appbar */}
      {/* start of profile text */}
     
      <View style={{height:40, paddingLeft:17,}}>
        <Text style={{fontSize: 35, fontWeight:'bold'}}>Profile</Text>
      </View>
      {/* emd of profile text */}
        {/* start of display photo */}

        <View style={{height: 140, marginTop:15, flexDirection:'row', backgroundColor:bg,}}>
            <TouchableOpacity style={{height: 120, width:120, borderRadius:140,marginLeft:13, backgroundColor:primary}}>
                <View style={{height:110, width:110, marginLeft:5, marginTop:5, borderRadius:130, backgroundColor:light}}>
                <Image source={require('../assets/dp.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                </View>
            </TouchableOpacity>
            <View style={{paddingLeft:30, paddingTop:10}}>
                <Text style={{ fontSize:26, fontWeight:'bold'}}>Janet</Text>
                <Text style={{ fontSize:26, color:primary, fontWeight:'bold'}}>Mbugua</Text>
                <Text style={{ fontSize:16, color:'grey',}}>Credit Score: KES 24,000</Text>
            </View>
        </View>


        {/* end of display photo */}
        {/* start of update card */}

        <View style={{height:120, flexDirection:'row', backgroundColor:primary, marginLeft:17, paddingRight:20, marginRight:17, borderRadius:10}}>
            <View style={{flex:2, justifyContent:'center',alignItems:'center', }}>
                <Text style={{ fontSize:17, color:light}}>Cooperative Bank of Kenya</Text>
                <Text style={{ fontSize:14, color:light}}>Credit: KES 150,000</Text>
            </View>


            <View style={{flex:1, justifyContent:'center', alignItems:'flex-start',  marginLeft:17,}}>
                <TouchableOpacity style={{height:40, justifyContent:'center', alignItems:'center', width:100, borderRadius:10,backgroundColor:light}}>
                    <Text style={{ fontSize:20, color:primary, fontWeight:'bold'}}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* end of update card */}
        {/* start of details input */}


        <View style={{height: 220, marginTop:10, paddingLeft:17, paddingRight:17, backgroundColor:bg,}}>
            <View style={{flex:1,}}>
                <Text style={{ fontSize:18, fontWeight:'bold', color:dark}}>Name</Text>
              
                    <TextInput placeholder={"Janet Mbugua"} style={{width:320, paddingLeft:20, height:44, borderRadius:10, borderWidth:2, backgroundColor:light, borderColor:primary,}}/>
               
            </View>
            <View style={{flex:1,}}>
                <Text style={{ fontSize:18, fontWeight:'bold', color:dark}}>Date of Birth</Text>
              
                    <TextInput placeholder={"12th Feb 1998"} style={{width:320, paddingLeft:20, height:44, borderRadius:10, borderWidth:2, backgroundColor:"white", borderColor:primary,}}/>
               
            </View>
            <View style={{flex:1,}}>
                <Text style={{ fontSize:18, fontWeight:'bold', color:dark}}>Password</Text>
                    <TextInput placeholder={"secret passcode..."} style={{width:320, paddingLeft:20, height:44, borderRadius:10, borderWidth:2, backgroundColor:light, borderColor:primary,}}/>
               
            </View>
          

        </View>

        {/* end of details input */}
        <TouchableOpacity style={{height:50, elevation:7, width:320, justifyContent:'center', alignItems:'center', marginTop:10, marginLeft:17, borderRadius:12, backgroundColor: primary}}>
            <Text style={{ fontSize:20, color:light}}>Update Details</Text>
        </TouchableOpacity>



    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
  }