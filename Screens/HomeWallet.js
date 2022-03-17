import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Appbar from '../Components/Appbar'
import { bg, light, primary , dark,secondary} from '../Palletes/Colours'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AntDesign,Fontisto,MaterialCommunityIcons, MaterialIcons, Octicons,SimpleLineIcons } from '@expo/vector-icons';
import LoadingScreen1 from '../Components/LoadingScreen1';


export default function HomeWallet({navigation}) {

    // component did mount here

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
            
         }, 3000);
    });


    // end of compoennt did mount



    const [loading, setLoading] = React.useState(true);

    const renderChild = () => {
        <Text style={{}}>sdss</Text>
    }

if(loading){

    return(
        
        
        <LoadingScreen1 />
        
    ); 

}else{




  return (
    <View style={{paddingTop:75, flex:1, justifyContent:'center', backgroundColor:bg}}>
      <Appbar />
      {/* start of hello dislplay */}

        <View style={{height:100, marginLeft:17, marginRight:2,  flexDirection:'row', backgroundColor:bg}}>
            <View style={{flex:2,}}>
                <Text style={{ fontSize:25, fontWeight:'bold', color:"grey"}}>Hello</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize:35, fontWeight:'bold',}}>Janet</Text>
                <View style={{width:10}}></View>
                <Text style={{ fontSize:35,  fontWeight:'bold',color:primary}}>Mbugua</Text>

                </View>
              
            </View>
            <View style={{flex:1, justifyContent:'flex-end', marginLeft:15, backgroundColor:bg}}>
            <Image source={require('../assets/dp.jpg')} style={{ height:"100%", width:"85%", borderRadius:20}}/>

            </View>
        </View>

    {/* end of hwllo display */}
    {/* start of view wordings */}
    <View style={{height:40, backgroundColor:bg, marginTop:10, justifyContent:'space-between', flexDirection:'row', marginLeft:17, marginRight:17}}>
        <Text style={{ fontSize:18, color:'grey', fontWeight:'bold'}}>Overview</Text>
        <Text style={{ fontSize:18, color:'grey', fontWeight:'bold'}}>View insights</Text>
    </View>

    {/* end of view wording */}

    {/* start of overlay */}

    <View style={{height: 120, marginRight:10, marginLeft:17, marginRight:17, flexDirection:'row', backgroundColor:bg}}>
        <View style={{flex:1, elevation:15, flexDirection:"row", justifyContent:'center', borderRadius:20, backgroundColor:primary}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingLeft:10}}>
            <View style={{position:'absolute', top:47, left:36}}>
            <Text style={{color:light}}>80%</Text>
            </View>
               
                <AnimatedCircularProgress
                    size={80}
                    width={6}
                    fill={80}
                    children={renderChild}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={primary} />
                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <Text style={{color:light}}>Budget</Text>
                    <Text style={{color:light}}>KES 34,000</Text>
                    
                </View>

        </View>
        <View style={{flex:1, elevation:7, flexDirection:"row", marginLeft:10, justifyContent:'center', borderRadius:20, backgroundColor:light}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingLeft:10}}>
            <View style={{position:'absolute', top:47, left:36}}>
            <Text style={{color:primary}}>34%</Text>
            </View>
               
                <AnimatedCircularProgress
                    size={70}
                    width={6}
                    fill={30}
                    children={renderChild}
                    tintColor={primary}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={secondary} />
                    
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                    <Text style={{color:primary}}>Expense</Text>
                    <Text style={{color:primary}}>KES 24,000</Text>
                    
                </View>

        </View>
    </View>

    {/* end of overlay */}
    {/* start of operations wprd */}

    <View style={{marginLeft:17, marginTop:17,}}>
        <Text style={{ fontWeight: "bold", fontSize:20}}>Operations</Text>
    </View>


    {/* end of operations word */}

    {/* start of buttons */}

    <View style={{height:100, flexDirection:'row', marginLeft:17, marginRight:17, backgroundColor:bg}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('transfer')}} style={{flex:1, justifyContent:'center', alignItems:'center',  borderRadius:10, elevation:7, backgroundColor:light}}>
        <Image source={require('../assets/transact.gif')} style={{ height:40, width:40,}}/>
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Transact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10, borderRadius:10, elevation:7, backgroundColor:light}}>
        <Fontisto name="wallet" size={30} color={primary} />
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10, borderRadius:10, elevation:7, backgroundColor:light}}>
        <MaterialCommunityIcons name="wallet-plus" size={30} color={primary} />
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Deposit</Text>
        </TouchableOpacity>
       
          

    </View>


    {/* end of buttons */}

    {/* start of buttons */}

    <View style={{height:100, marginTop:10, flexDirection:'row', marginLeft:17, marginRight:17, backgroundColor:bg}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Help')}} style={{flex:1, justifyContent:'center', alignItems:'center',  borderRadius:10, elevation:7, backgroundColor:light}}>
        <Image source={require('../assets/chat.gif')} style={{ height:40, width:40,}}/>
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('mapView')}} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10, borderRadius:10, elevation:7, backgroundColor:light}}>
        <Image source={require('../assets/analytics.gif')} style={{ height:40, width:40,}}/>
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Budget')}} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10, borderRadius:10, elevation:7, backgroundColor:light}}>
        <Image source={require('../assets/budget.gif')} style={{ height:40, width:40,}}/>
            <Text style={{fontWeight: "bold", fontSize:16,color:dark}}>Budget</Text>
        </TouchableOpacity>
       
          

    </View>


    {/* end of buttons */}
    {/* start of complete profile */}

    <View style={{height:30, marginTop:10, paddingLeft:17, backgroundColor:bg}}>
    <Text style={{ fontSize:20, fontWeight:'bold',}}>Complete Profile</Text>

    </View>

    {/* end of complete profile */}
    {/* start of completed tasks */}
    <View style={{height:60, marginLeft:17, marginRight:17, flexDirection:'row', padding:10, borderRadius:10, elevation:7,backgroundColor:light, justifyContent:'space-between',}}>
        <Text style={{fontWeight:'bold', color:dark, fontSize:20}}>60% completed</Text>
        <Text style={{fontWeight:'bold', color:"grey", fontSize:20}}>7 out of 10 completed</Text>
    </View>
    <View style={{height:50}}></View>

    {/* end of completed tasks */}
    </View>
  )
}
}