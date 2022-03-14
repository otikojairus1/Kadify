import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { bg, dark, light, primary, secondary } from '../Palletes/Colours'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'native-base';


export default function TransferFunds() {
  return (
    <View style={{flex:1,justifyContent:'center', backgroundColor:bg}}>
          {/* start of appbar */}
          <View style={{width:355}}>
            <Appbar />
        </View>
      {/* end of appbar */}
         {/* start of sending title */}
         <View style={{marginLeft:17, marginRight:17,}}>
            <Text style={{fontWeight: "bold", fontSize:30, color:dark}}>Send Money</Text>
        </View>
        <View style={{marginLeft:17, marginRight:17,}}>
            <Text style={{fontWeight: "bold", fontSize:18, color:"grey"}}>Select Option</Text>
        </View>

        {/* emd of sending title */}
        {/* start of options */}

        <View style={{height: 100, marginTop:10, flexDirection:'row', marginLeft:17, marginRight:17, backgroundColor: bg}}>
            <TouchableOpacity style={{flex:1,elevation:7,  justifyContent:'center', alignItems:'center',borderRadius:10, marginRight:4,  backgroundColor: light}}>
                <FontAwesome name="bank" size={30} color={primary} />
                <Text style={{ fontSize:20,}}>Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,elevation:7,  justifyContent:'center', alignItems:'center', borderRadius:10, marginRight:4, backgroundColor: primary}}>
                <FontAwesome5 name="money-bill-wave" size={30} color={light} />
                <Text style={{ fontSize:20, color:light}}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,elevation:7,  justifyContent:'center', alignItems:'center',borderRadius:10, marginRight:4,  backgroundColor: light}}>
                <AntDesign name="qrcode" size={30} color={primary} />
                <Text style={{ fontSize:20, color:dark}}>QR code</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, elevation:7, justifyContent:'center', alignItems:'center', borderRadius:10, marginRight:4, backgroundColor: primary}}>
            <Feather name="repeat" size={24} color={light} />
                <Text style={{ fontSize:20, color:light}}>AutoPay</Text>
            </TouchableOpacity>
        </View>

        {/* end of options */}
        {/* start of people */}

              {/* start of speed dial */}

              <View style={{height:150, width:320, backgroundColor: light, borderRadius:10, elevation:7, marginTop:20, marginLeft:17,}}>
            <View style={{flex:1, paddingLeft:17, paddingTop:10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:dark}}>Recent Receipts</Text>
            </View>
            <View style={{flex:2, paddingLeft:17, justifyContent:'center',alignItems:'flex-start', paddingRight:17, flexDirection:'row'}}>
                <TouchableOpacity style={{height: 60, width: 60, borderRadius:60, backgroundColor:primary}}>
                    <Image source={require('../assets/dp.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                    <Text style={{fontWeight: "bold", color:'grey'}}> Marion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60, width: 60, marginLeft:10, borderRadius:60, backgroundColor:primary}}>
                    <Image source={require('../assets/dp2.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                    <Text style={{fontWeight: "bold", color:'grey'}}> Andrew</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60, width: 60, marginLeft:10, borderRadius:60, backgroundColor:primary}}>
                    <Image source={require('../assets/dp3.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                    <Text style={{fontWeight: "bold", color:'grey'}}> Harriet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60, width: 60, marginLeft:10, borderRadius:60, backgroundColor:primary}}>
                    <Image source={require('../assets/dp4.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                    <Text style={{fontWeight: "bold", color:'grey'}}> Denno</Text>
                </TouchableOpacity>
               
                
            </View>
        </View>

        {/* end of speed dial */}

        {/* end of peope */}
        {/* start of contacts */}

        <View style={{height:270, borderRadius:12, elevation:7, width:330, marginLeft:17, marginRight:17, backgroundColor:light, marginTop:10}}>
        <Text style={{ fontWeight: "bold", fontSize:20, marginLeft:20, marginTop:10}}>Add New Contacts</Text>
        <View style={{width:300, flexDirection:'row', height: 50, paddingLeft: 20,marginLeft:10, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}>
            <TextInput style={{width:"100%"}} placeholder="Search friends and family" />
          <TouchableOpacity style={{position:'absolute', right:15, top:8}}>
          <AntDesign name="search1" size={24} color={primary} />
          </TouchableOpacity>
            </View>

{/* start of list */}
      <ScrollView>
      <View style={{flex:1, marginBottom:10, flexDirection:'row'}} >
            <TouchableOpacity style={{height: 65, width:65, borderRadius:65,marginLeft:15, justifyContent:'center', marginTop:10, backgroundColor:primary}}>
                
                <Image source={require('../assets/dp.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                
            </TouchableOpacity>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:light}}>
                    <Text style={{ fontSize:20,fontWeight: 'bold',color:dark}}>Marion Elsie</Text>
                    <Text style={{color:"grey"}}>+22648482742</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <View style={{height:50, justifyContent:'center', alignItems:'center',width:80, borderRadius:10, backgroundColor:secondary}}>
                        <Text style={{ fontSize:19, color:light}}>Invited</Text>
                    </View>
                </View>
            </View>


            <View style={{flex:1, marginBottom:10, flexDirection:'row'}} >
            <TouchableOpacity style={{height: 65, width:65, borderRadius:65,marginLeft:15, justifyContent:'center', marginTop:10, backgroundColor:primary}}>
                
                <Image source={require('../assets/dp2.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                
            </TouchableOpacity>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:light}}>
                    <Text style={{ fontSize:20,fontWeight: 'bold',color:dark}}>Jacob Kamau</Text>
                    <Text style={{color:"grey"}}>+34536353224</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <View style={{height:50, justifyContent:'center', alignItems:'center',width:80, borderRadius:10, backgroundColor:primary}}>
                        <Text style={{ fontSize:19, color:light}}>Invite</Text>
                    </View>
                </View>
            </View>


            <View style={{flex:1, marginBottom:10, flexDirection:'row'}} >
            <TouchableOpacity style={{height: 65, width:65, borderRadius:65,marginLeft:15, justifyContent:'center', marginTop:10, backgroundColor:primary}}>
                
                <Image source={require('../assets/dp3.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                
            </TouchableOpacity>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:light}}>
                    <Text style={{ fontSize:20,fontWeight: 'bold',color:dark}}>Irene Kerubo</Text>
                    <Text style={{color:"grey"}}>+374287824223</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <View style={{height:50, justifyContent:'center', alignItems:'center',width:80, borderRadius:10, backgroundColor:primary}}>
                        <Text style={{ fontSize:19, color:light}}>Invite</Text>
                    </View>
                </View>
            </View>

            <View style={{flex:1, marginBottom:10, flexDirection:'row'}} >
            <TouchableOpacity style={{height: 65, width:65, borderRadius:65,marginLeft:15, justifyContent:'center', marginTop:10, backgroundColor:primary}}>
                
                <Image source={require('../assets/dp5.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                
            </TouchableOpacity>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:light}}>
                    <Text style={{ fontSize:20,fontWeight: 'bold',color:dark}}>Nyaga Colonel</Text>
                    <Text style={{color:"grey"}}>+72829294393</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <View style={{height:50, justifyContent:'center', alignItems:'center',width:80, borderRadius:10, backgroundColor:secondary}}>
                        <Text style={{ fontSize:19, color:light}}>Invited</Text>
                    </View>
                </View>
            </View>
      </ScrollView>

            {/*end of list  */}


        </View>

       



        {/* end of contacts */}
    </View>
  )
}