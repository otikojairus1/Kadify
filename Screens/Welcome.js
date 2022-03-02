import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import {light, primary, secondary} from '../Palletes/Colours'
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../Components/PrimaryButton';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function Welcome() {
  return (
    <View style={{width: windowWidth, height: windowHeight, backgroundColor:light}}>
        {/* start of play bottom */}
      <TouchableOpacity style={{height: 200, width:200, marginLeft:80, borderRadius:10, shadowColor:primary, elevation:100, justifyContent:'center', alignItems:"center", marginTop:120, backgroundColor:light}}>
          <View style={{height:70, width: 70, paddingLeft:5, paddingTop:4, backgroundColor:secondary, borderRadius:70}}>
          <AntDesign name="play" size={60} color={primary} />
          </View>

      </TouchableOpacity>

      {/* end of play button */}
      {/* start of title */}

      <View style={{marginLeft:60, marginTop:60, marginBottom: 40}}> 
          <Text style={{fontSize: 40, fontWeight:'bold'}}>Watch Tutorial</Text>
      </View>
      {/* end of title */}

            {/* start of description */}

            <View style={{marginLeft:20,marginRight:20,}}> 
          <Text style={{fontSize: 25, textAlign:"center", color:"grey"}}> If you are new on this and need help, watch this short tutorial clip to get started</Text>
      </View>
      {/* end of description */}

 <PrimaryButton title={'Lets Create An Account'}/>

    {/* forgot password */}

    <TouchableOpacity style={{width: 350, paddingTop:30, paddingBottom:20, height: 90, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 17, color:"grey"}}>Aleady have an account? sign in</Text>
    </TouchableOpacity>

    {/* end */}

    {/* small hr */}

    <View style={{height:3, borderRadius:3, marginLeft:100, marginTop:20, width:150, backgroundColor:primary}}></View>


      
    </View>
  )
}