import { View, Text ,Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { FontAwesome5 } from '@expo/vector-icons';
import { bg, dark, secondary, light, primary } from '../Palletes/Colours'
import { CheckIcon, Select} from "native-base";
import LoadingScreen1 from '../Components/LoadingScreen1';
import axios from 'axios';
import { BASE_URI } from '../BASE_URI';
import SuccessTransfer from '../Components/SuccessTransfer';

export default function SendMoney({navigation, route}) {
    let [service, setService] = React.useState("");
    let [amount, setAmount] = React.useState();
    let [loading, setLoadingg] = React.useState(false);

    let [card, setCard] = React.useState();
    let [success, setSuccess] = React.useState(false);
    let [error, setError] = React.useState(false);
    let [errorData, setErrorData] = React.useState('');



    let {cardname, cardnumber} = route.params;
    let [sendercard, setsenderCard] = React.useState();
  

    //let c = parseInt(cardname);
    const transfer = () => {
        setLoadingg(true);
        setsenderCard(cardname);
        axios.post(BASE_URI + '/api/send/payment/card', {
            "receiver_card":card,
            "sender_card": cardnumber,
            "amount":amount,
            "email":"otikojairus@gmail.com",
            "merchant_type":service
        }).then((res) => {
            console.log(res.data);
            setLoadingg(false);
            if (res.data.success) {
                setSuccess(true);
            } else if (res.data.success == false) {
                setError(true);
                setErrorData(res.data.error);
            }
           
        })
        .catch((err)=> console.log(err))
        console.log(service, cardnumber, amount, "otikojairus@gmail.com", cardnumber)
        
    }

    if (loading) {
        return <LoadingScreen1 />;
    } else if (success) {
        return <SuccessTransfer />;
    } else if (error) {
        return (
            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
            <Image source={require('../assets/errortransact.gif')} style={{ height:300, width:300, borderRadius:130}}/>
                <Text>{ errorData}</Text>
            </View>
        );
    }
    

  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:bg, alignItems:'flex-start'}}>
      {/* start of appbar */}
      <View style={{width:340}}>
        <Appbar />
      </View>
      {/* end of appbar */}
      {/* start of sending title */}
        <View style={{marginLeft:17, marginRight:17,}}>
            <Text style={{fontWeight: "bold", fontSize:30, color:dark}}>Set Amount</Text>
        </View>
        <View style={{marginLeft:17, marginRight:17,}}>
            <Text style={{fontWeight: "bold", fontSize:18, color:"grey"}}>How much would you like to send?</Text>
        </View>

        {/* emd of sending title */}

        {/* start of send digits */}
        <View style={{ width: 320,  height: 250,borderRadius:10, elevation:7, marginLeft:17, marginTop:10, alignItems:'center', justifyContent:'center', backgroundColor:light}}>
            <View style={{flex:1, flexDirection:"row",justifyContent:'center',alignItems:'center', backgroundColor:light}}>
                <TouchableOpacity style={{height: 35, width:35, justifyContent:'center',alignItems:'center', borderRadius:7, marginRight:17, backgroundColor:secondary,}}>
                <FontAwesome5 name="minus" size={20} color={light} />
                </TouchableOpacity>
                  <Text style={{ fontSize: 25, color: primary, fontWeight: 'bold', }}>KSH {amount }</Text>

                <TouchableOpacity style={{height: 35, justifyContent:'center', alignItems:'center',width:35, borderRadius:7, marginLeft:10, backgroundColor:secondary,}}>
                <FontAwesome5 name="plus" size={20} color={light}/>
                </TouchableOpacity>
                  

            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
                <Text style={{color:"grey", fontSize:23}}>Quick Actions</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{height:40, padding:3, marginRight:4, width:70, borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor: secondary}}>
                    <Text style={{color:light}}>KSHS 5500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40, padding:3, marginRight:4, width:70, borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor: secondary}}>
                    <Text style={{color:light}}>KSHS 7500</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{height:40, padding:3, marginRight:4, width:70, borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor: secondary}}>
                    <Text style={{color:light}}>KSHS 15500</Text>
                </TouchableOpacity>
                </View>

              </View>
              <View style={{width:'40%', marginLeft:-50}}>
              <TextInput value={amount} onChangeText={(text)=>setAmount(text)} placeholder="Enter Amount "  style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}></TextInput>
              <TextInput value={card} onChangeText={(text)=>setCard(text)} placeholder="Enter Receiver card number "  style={{width:320, height: 50, paddingLeft: 20, paddingRight: 20,borderRadius: 10, marginTop:16, backgroundColor: '#e8e9f1',borderWidth:1, borderColor: '#e8e9f1'}}></TextInput>
              
              </View>
          
        </View>

          {/* end of start diigits */}
          <Text>MY CARD DETAILS:</Text>
          <Text>{   cardname}</Text>

          <Text>{ cardnumber}</Text>
          

          
        {/* start of speed dial */}

        <View style={{height:150, width:320, backgroundColor: light, borderRadius:10, elevation:7, marginTop:20, marginLeft:17,}}>
            <View style={{flex:1, paddingLeft:17, paddingTop:10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:dark}}>Who do you want to send to?</Text>
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
        {/* start of select */}
<View style={{height: 120, borderRadius:10, width: 320, backgroundColor:light, marginLeft:17,marginTop:10, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontWeight: "bold", color:dark, fontSize:20}}>Select your Receiver Type Wallet</Text>
    <Select style={{marginLeft:17,}} selectedValue={service} minWidth="170" accessibilityLabel="Choose Merchant or Receiver Wallet Type" placeholder="Choose Merchant or Receiver Wallet Type" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Shopping (Online and Store Merchants)" value="Shopping" />
          <Select.Item label="Travelling (Uber, and other Cab services)" value="Travelling" />
          <Select.Item label="School Fees (schools with KadifyPay Accounts)" value="Fees" />
          <Select.Item label="Water Bill" value="Water Bill" />
          <Select.Item label="Electricity Bill" value="Electricity Bill" />
        </Select>
</View>
    

        {/* end of select */}
        {/* start of button */}
        <View style={{height: 80, width:320, alignItems:'center', flexDirection:"row", justifyContent:'center', marginTop:20, marginLeft:17,}}>
            <TouchableOpacity onPress={transfer} style={{width: 150,borderRadius:10, justifyContent:'center', alignItems:'center',height:60,elevation:10, marginRight:10, backgroundColor:primary}}>
                <Text style={{ fontSize:23, fontWeight: 'bold',color:light}}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 150,borderRadius:10, justifyContent:'center', alignItems:'center',height:60,elevation:10, marginRight:0, backgroundColor:light}}>
                <Text style={{ fontSize:23, fontWeight: 'bold',color:primary}}>Cancel</Text>
            </TouchableOpacity>
        </View>


        {/* end of button */}

        {/* start of menu */}
        

        {/* end of menu */}

    </View>
  )
}