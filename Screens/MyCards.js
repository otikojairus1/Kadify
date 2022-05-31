import { View, Text, TouchableOpacity,Linking,Image,ScrollView,FlatList } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign,SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { bg, dark, light, primary, secondary ,absabg, coopbg,equitybg, kcbbg, ncbabg,} from '../Palletes/Colours'
import { Button, Actionsheet, AlertDialog, useDisclose, Box, Switch, Center, NativeBaseProvider, Icon } from "native-base";
import { Path } from "react-native-svg";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { BASE_URI } from '../BASE_URI'
import axios from 'axios';
import LoadingScreen1 from '../Components/LoadingScreen1'
export default function MyCards({ openDrawer, navigation }) {

  const [loading, setLoading] = React.useState(true);
  let creditCards = [];
  const [list, setList] = React.useState(creditCards);

  let text = "Hi, 8256267253, CARD NAME: ANDREW FWAMBA WABOMBA, MERCHANT TYPE: SCHOOL, CARD BALANCE: KES 50,000, VALID_REMAINING_TRANSACTIONS:2 open here exp://";
  let cardnumber;
  let accountbg;
  React.useEffect(() => {
    
    console.log("loaded cards");
    axios.post(BASE_URI + '/api/get/card', { "email": "otikojairus@gmail.com" })
      .then((res) => {
        res.data.data.map((element) => {
          creditCards.push(element);
          cardnumber = element.card_no;
        });

        setList(creditCards);
        console.log(list);
        
        setLoading(false);
        // console.log(res.data.banktype);
       

      })
    .catch((err)=>console.log(err))
  },[]);
// dialog issues

const [isOpen2, setIsOpen2] = React.useState(false);

const onClose2 = () => setIsOpen2(false);

const cancelRef = React.useRef(null);

  function getbg (card){
  
        if (card.banktype == "coop") {
            return coopbg;
      
        } else if (card.banktype == "kcb") {
            return kcbbg;
        } else if (card.banktype == "ncba") {
            return ncbabg;
        } else if (card.banktype == "equity") {
            return equitybg;
        } else if (card.banktype == "absa") {
            return absabg;
    } 
    return coopbg;
}
// end of dialod issues

  const renderItem = () => {
    return (<Text>Cards here</Text>);
}
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();



  if (loading) {
    return (<LoadingScreen1 />);
  }
  return (
    <View style={{ justifyContent:"center", marginTop:40, backgroundColor:bg }}>
          {/* start of appbar */}
            <View style={{width:355}}>
            <Appbar toggleDrawer = {openDrawer} />
        </View>
      {/* end of appbar */}
{/* start of carding words */}
      <View style={{width: 200, marginLeft:17}}>
       <Text style={{ fontSize:32, fontWeight:'bold', color:dark }}>My Kadify Cards</Text>
      </View>
      <View style={{width: 240, marginLeft:17}}>
       <Text style={{ fontSize:20, fontWeight:'bold', color:"grey" }}>0 Telco card, 3 Virtual Card</Text>
      </View>
      {/* end of words */}
      {/* start of tags */}

      <View style={{width:330, height:80, flexDirection:"row", justifyContent:'center', alignItems:'center', backgroundColor: accountbg, marginLeft:17}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('createCard')}} style={{height:50, elevation:7, justifyContent:'center', alignItems:'center', borderRadius:10, width:150, marginRight:10, backgroundColor: primary}}>
          <Text style={{ fontSize:18, color:light}}>Create a new Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50, elevation:7, justifyContent:'center', alignItems:'center', borderRadius:10, width:150, marginRight:10, backgroundColor: "#A7AFF3"}}>
          <Text style={{ fontSize:18, color:primary, fontWeight:'bold'}}>All Cards</Text>
        </TouchableOpacity>
       
      </View>

      {/* end of tags */}
      {/* start of card design */}

      {/* <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      /> */}

      <ScrollView horizontal={true} style={{ backgroundColor: bg, }}>
        
        {list.map((card) => {
          return (<TouchableOpacity onPress={onOpen} style={{ height: 200, elevation: 7, width: 330, marginLeft: 10, backgroundColor:  getbg(card) , borderRadius:10}}>
            <View style={{width:200, marginTop:4, flexDirection:'row', marginLeft:20, height:50}}>
              <Text style={{ fontSize:34, fontWeight:'bold', color:light}}>Kadify</Text>
              <Text style={{ fontSize:34, fontWeight:'bold', color:secondary}}>Pay</Text>
            </View>
            <View style={{height: 40, width:55, marginTop:4, position:"absolute", top:40, left:30, backgroundColor:light}}>
            <Image source={require('../assets/terminal3.png')} style={{ height:"100%", width:"100%",}}/>
            <View style={{ alignItems:"center", position:"absolute", top:0, left:60, justifyContent:"center", transform: [{ rotate: '90deg'}]}}>
              <AntDesign name="wifi" size={32} color={light} />
    
              </View>
              <View style={{position:"absolute", top: -30, left: 227 }}>
              <Text style={{fontSize:20, color:light}}>{ card.banktype} Virtual Card</Text>
            </View>
              
    
            </View>
            <View style={{position:"absolute", top:90, left:27}}>
              <Text style={{ fontWeight: "bold", fontSize: 30, color: light }}>{ card.card_no}</Text>
            </View>
            <View style={{position:'absolute', top:140, left:20}}>
              <Text style={{fontSize: 16, fontWeight:'bold', color:secondary}}>Cardholder's Name</Text>
            </View>
            <View style={{position:'absolute', top:165, left:20}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: light }}>{ card.name}</Text>
            </View>
            <View style={{position:'absolute', top:140, left:180}}>
              <Text style={{fontSize: 16, fontWeight:'bold', color:secondary}}>Valid Till</Text>
            </View>
            <View style={{position:'absolute', top:160, left:190}}>
              <Text style={{fontSize: 16, fontWeight:'bold', color:light}}>07/24</Text>
            </View>
    
            <View style={{position:'absolute', top:140, left:260}}>
            <Image source={require('../assets/mastercard.png')} style={{ height:50, width:60,}}/>
            </View>
            
    
    
          </TouchableOpacity>);
        })}

 
{/* 
      <TouchableOpacity style={{height: 200, marginRight:10, elevation:7, width:330, marginLeft:3, backgroundColor:"#A7AFF3", borderRadius:10}}>
        <View style={{width:200, marginTop:4, flexDirection:'row', marginLeft:20, height:50}}>
          <Text style={{ fontSize:34, fontWeight:'bold', color:primary}}>Kadify</Text>
          <Text style={{ fontSize:34, fontWeight:'bold', color:dark}}>Pay</Text>
        </View>
        <View style={{height: 40, width:55, marginTop:4, position:"absolute", top:40, left:30, backgroundColor:primary}}>
        <Image source={require('../assets/terminal3.png')} style={{ height:"100%", width:"100%",}}/>
        <View style={{ alignItems:"center", position:"absolute", top:0, left:60, justifyContent:"center", transform: [{ rotate: '90deg'}]}}>
          <AntDesign name="wifi" size={32} color={primary} />

          </View>
        </View>
        <View style={{position:"absolute", top:90, left:27}}>
          <Text style={{fontWeight: "bold", fontSize:30, color:primary}}>3625 4242 3424 8392</Text>
        </View>
        <View style={{position:'absolute', top:140, left:20}}>
          <Text style={{fontSize: 16, fontWeight:'bold',color:dark}}>Cardholder's Name</Text>
        </View>
        <View style={{position:'absolute', top:165, left:20}}>
          <Text style={{fontSize: 16, fontWeight:'bold', color:primary}}>LILIAN MBUGUA MULI</Text>
        </View>
        <View style={{position:'absolute', top:140, left:180}}>
          <Text style={{fontSize: 16, fontWeight:'bold', color:dark}}>Valid Till</Text>
        </View>
        <View style={{position:'absolute', top:160, left:190}}>
          <Text style={{fontSize: 16, fontWeight:'bold', color:primary}}>07/24</Text>
        </View>

        <View style={{position:'absolute', top:140, left:260}}>
        <Image source={require('../assets/mastercard.png')} style={{ height:50, width:60,}}/>
        {/* <FontAwesome name="cc-mastercard" size={44} color={primary} /> */}
        {/* </View> */}
        


      {/* </TouchableOpacity> */}

      

      </ScrollView>
     

      {/* end of card design */}
      {/* start of card settings */}
      <View style={{marginLeft:17,marginTop:10}}>
          <Text style={{ fontSize:22, fontWeight: 'bold',color:dark}}>Card Settings</Text>
        </View>

      <ScrollView style={{height:250, paddingBottom:20}}>
    
        <View style={{height: 60,  width:330, flexDirection:'row', backgroundColor:light, borderRadius:10, marginLeft:17}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"center", transform: [{ rotate: '90deg'}]}}>
          <AntDesign name="wifi" size={32} color={primary} />
         

          </View>
          <View style={{flex:3, alignItems:'center',  justifyContent:'center',}}>
          <Text style={{ fontWeight: "bold", fontSize:20}}>Contactless Payment</Text>
        </View>
        <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
        <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary}  colorScheme={primary} />

        </View>
        </View>
        {/* card 2 */}
        <View style={{height: 60, marginTop:10,  width:330, flexDirection:'row', backgroundColor:light, borderRadius:10, marginLeft:17}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"center", }}>
          <MaterialCommunityIcons name="key-wireless" size={32} color={primary} />
         

          </View>
          <View style={{flex:3, alignItems:'center',  justifyContent:'center',}}>
          <Text style={{ fontWeight: "bold", fontSize:20}}>Merchant Type Lock</Text>
        </View>
        <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
        <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary}  colorScheme={primary} />

        </View>
        </View>

             {/* card 3 */}
             <View style={{height: 60, marginTop:10,  width:330, flexDirection:'row', backgroundColor:light, borderRadius:10, marginLeft:17}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
          <SimpleLineIcons name="wallet" size={32} color={primary} />
         

          </View>
          <View style={{flex:3, alignItems:'center',  justifyContent:'center',}}>
          <Text style={{ fontWeight: "bold", fontSize:20}}>Enable friends Withdrawal</Text>
        </View>
        <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
        <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary}  colorScheme={primary} />

        </View>
        </View>

        {/* card 3 */}
        <View style={{height: 60, marginTop:10,  width:330, flexDirection:'row', backgroundColor:light, borderRadius:10, marginLeft:17}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
          <Fontisto name="world" size={32} color={primary} />
         

          </View>
          <View style={{flex:3, alignItems:'center',  justifyContent:'center',}}>
          <Text style={{ fontWeight: "bold", fontSize:20}}>Geographical lock</Text>
        </View>
        <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
        <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary}  colorScheme={primary} />

        </View>
        </View>

        {/* card 3 */}
        <View style={{height: 60, marginTop:10,  width:330, flexDirection:'row', backgroundColor:light, borderRadius:10, marginLeft:17}}>
          <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
          <MaterialCommunityIcons name="card-bulleted-off" size={32} color={primary} />
         

          </View>
          <View style={{flex:3, alignItems:'center',  justifyContent:'center',}}>
          <Text style={{ fontWeight: "bold", fontSize:20}}>Deactivate Card</Text>
        </View>
        <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
        <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary}  colorScheme={primary} />

        </View>
        </View>
        
      </ScrollView>


      {/* end of card settings */}

      {/* start of action sheet */}

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text style={{ fontSize:22, fontWeight: 'bold', color:primary}}>Kadify Card Operations</Text>
          </Box>
          <Actionsheet.Item onPress={()=>Linking.openURL(`whatsapp://send?text=${text}`)}  startIcon={<MaterialCommunityIcons name="share-variant" size={24} color={primary} />}>
            <Text style={{ fontSize:20, color:dark, fontWeight: 'bold',}}>Share Card</Text>
          </Actionsheet.Item>
          <Actionsheet.Item startIcon={<Entypo name="users" size={24} color={primary} />}>
            
            <Text style={{ fontSize:20, color:dark, fontWeight: 'bold',}}>Modify Beneficiaries</Text>
          </Actionsheet.Item>

          <Actionsheet.Item startIcon={<FontAwesome name="credit-card" size={24} color={primary} />}>
            
            <Text style={{ fontSize:20, color:dark, fontWeight: 'bold',}}>Create Virtual Kadify Card</Text>
          </Actionsheet.Item>
       
          <Actionsheet.Item onPress={() => setIsOpen2(!isOpen2)} startIcon={<AntDesign name="delete" size={24} color={"red"} />}>
          <Text style={{ fontSize:20, color:dark, fontWeight: 'bold',}}>Delete Card</Text>
          </Actionsheet.Item>
       
        </Actionsheet.Content>
      </Actionsheet>


      {/* end of actionsheet */}

      {/* start of alert dialog */}

      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen2} onClose={onClose2}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Confirm Deleting Card</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to this card including automated payment disbursement to subscribed merchants. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose2} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose2}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>


      {/* end of alert dialog */}
    </View>
  )
}