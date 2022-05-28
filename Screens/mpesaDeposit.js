import { View, Text, Image , TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import PrimaryButton from '../Components/PrimaryButton'
import { dark, primary, secondary } from '../Palletes/Colours'
import { FontAwesome5 } from '@expo/vector-icons';
import {Actionsheet, useDisclose, Box } from 'native-base'
import LoadingScreen1 from '../Components/LoadingScreen1'
import MpesaNotice from '../Components/MpesaNotice'
import axios from 'axios'
import {BASE_URI} from '../BASE_URI'
let btn;
let amountDisplay;
export default function MpesaDeposit() {
  const [amount, setAmount] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [mpesaSuccess, setSuccess] = React.useState(false);

  // handle deposit

  let phone = "254722753364";

const deposit = () => {
  console.log(amount);
  setLoading(true);
  axios.post(BASE_URI+'/api/mpesa/v2/stk', {
    "amount":amount,
    "phone":"254722753364",
    "id":"12"
  })
  .then((res)=>{
    console.log(res.data.mpesaWalletTopup.ResponseCode);
    let phone2 = "+" + phone; 
    updateBalance(amount, phone2);
    setLoading(false);
    setSuccess(true);
  })
  .catch((err)=>{
    console.log(err);
  })

}
  
  const updateBalance = (amount, phone) => {

    axios.post(BASE_URI+'/api/update/balance', {"phone":phone, "amount":amount})
    .then((res) => {console.log(res.data)});

  }

  // end of deposit handling

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();


  const renderAmount = () => {

    return (
      <Text>{amount}</Text>
      );


  }

  if(amount.length !== 0){
  
    btn =(  <View style={{height:140, width:"90%", alignItems:'center', position:"absolute", top:300, left:5, justifyContent:'center',}}> 
      <PrimaryButton title={"Deposit to Kadify Wallet"} onPress={onOpen}/>
    </View>
    
    );
  }else{
    btn = (
      <View style={{height:140, width:"90%", alignItems:'center', position:"absolute", top:300, left:5, justifyContent:'center',}}> 
      <PrimaryButton title={"No Amount Specified"} onPress={()=>{}}/>
    </View>
    
    );
  }

  if(amount.length !== 0){
  
    amountDisplay =( 
      <Text style={{ fontSize:50, color:"grey"}}>{renderAmount()}</Text>
    );
  }else{
    amountDisplay = (
      <Text style={{ fontSize:50, color:"grey"}}>0.00</Text>
    
    );
  }

  if(loading){
    return(
      <LoadingScreen1 />
    );
  }else if(mpesaSuccess){
    return(
      <MpesaNotice />
    );

  }else{
    return (
      <View style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems:'center'}}>
        <View style={{height:100, width:"100%"}}>
          <Appbar />
          <View style={{position:"absolute", left:145}}>
          <Text style={{ fontSize:32, fontWeight:"bold", color:primary}}>Pesar</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize:25, fontWeight:'bold', color:primary}}>Deposit to your wallet with</Text>
          <Image style={{height:90, width:250}} source={require('../assets/Mpesa-logo.jpg')}/>
        </View>
        {/* start of amount */}
        <View style={{height:100, width:340, justifyContent:'center', alignItems:'center', borderRadius:10}}>
          {/* {amount === [] ?   <Text style={{ fontSize:50, color:"grey"}}>{renderAmount()}</Text>:  <Text style={{ fontSize:50, color:"grey"}}>0.00</Text>  }  */}
        
          {amountDisplay}
          
        </View>
        
        {/* <View style={{height:140, width:"90%", alignItems:'center', position:"absolute", top:300, left:5, justifyContent:'center',}}> 
        <PrimaryButton title={"Deposit to Kadify Wallet"} onPress={onOpen}/>
      </View> */}
  
      {btn}
      
      
        {/* KEYBOARD */}
  
  <View style={{height:100}}></View>
        <View style={{height:300,  width:"100%",}}>
          <View style={{flex:1, flexDirection:"row"}} >
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "1")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "2")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "3")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>3</Text>
            </TouchableOpacity>
  
          </View>
          <View style={{flex:1, flexDirection:"row"}} >
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "4")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "5")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "6")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>6</Text>
            </TouchableOpacity>
  
          </View>
          <View style={{flex:1, flexDirection:"row"}} >
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "7")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "8")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{setAmount((prevState)=>{return(prevState + "9")})}}style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>9</Text>
            </TouchableOpacity>
  
          </View>
          <View style={{flex:1, flexDirection:"row"}} >
            <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount((prevState)=>{return(prevState + "0")})}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontSize:40,color:primary, fontWeight:"bold"}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAmount("")}} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <FontAwesome5 name="backspace" size={34} color={primary} />
            </TouchableOpacity>
  
          </View>
  
        </View>
  
  
  {/* END OF KEYBOARD */}
        {/* <View style={{}}>
            <TextInput value={amount} onChangeText={(text) => { setAmount(text) }} placeholder="0.00" style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, borderWidth: 1, borderColor: '#e8e9f1', backgroundColor: '#e8e9f1' }}></TextInput>
         </View> */}
        {/* end of amount */}
  
        {/* start of button */}
  
  
        {/* end of button */}
  
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
          <Text style={{ fontSize:21, color:primary}}>Confirm Amount Deposit</Text>
          <Text style={{ fontSize:17, color:dark}}>Kadify payment gateway will credit your MPESA account using the number you used during sign up. Mpesa will need your authorization, you'll therefore need to confirm the auntheticity of this transaction by putting your MPESA pin in the prompt that Safaricom will send.</Text>
          <Image source={require('../assets/save.gif')} style={{ height:120, width:120, borderRadius:20}}/>
          <View style={{marginLeft:-20}}>
          <PrimaryButton title={"Confirm Deposit of KES "+amount} onPress={deposit}/>
          </View>
       
      
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    )
  }


}