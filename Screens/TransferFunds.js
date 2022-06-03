import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { bg, dark, light, primary, secondary } from '../Palletes/Colours'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Avatar, ScrollView } from 'native-base';
import LoadingScreen1 from '../Components/LoadingScreen1';
import axios from 'axios'
import { BASE_URI} from '../BASE_URI'
export default function TransferFunds({ navigation }) {
    const [loading, setLoading] = React.useState(false);

    const handlePayment = () => {
        setLoading(true);
        axios.post(BASE_URI+'/api/dpo', {
            "amount":2000,
            "firstname":"Jairus",
            "lastname":"Otiko",
            "email":"otikojairus@gmail.com"
        })
            .then((res) => {
                console.log(res.data.responseCode.TransToken);
                updateBankbalance("otikojairus@gmail.com", 2000);
                setLoading(false);
                navigation.navigate('MyWeb',{token:res.data.responseCode.TransToken})
            })
            .catch((err) => {
                console.log(err);
        })
    }

    const updateBankbalance = (email, amount) => {
        axios.post(BASE_URI + '/api/update/balance/bank', {
            "email":email,
            "amount":amount
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    if (loading) {
        return (<LoadingScreen1 />);
    } else {
        
    
        return (
            <View style={{ flex: 1, paddingTop: 17, justifyContent: 'center', backgroundColor: bg }}>
                {/* start of appbar */}
                <View style={{ width: 355 }}>
                    <Appbar />
                </View>
                {/* end of appbar */}
                {/* start of sending title */}
                <View style={{ marginLeft: 17, marginRight: 17, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30, color: dark }}>Transact</Text>
                </View>
                <View style={{ marginLeft: 17, marginRight: 17, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "grey" }}>Select Option</Text>
                </View>

                {/* emd of sending title */}
                {/* start of options */}

                <View style={{ height: 100, marginTop: 10, flexDirection: 'row', marginLeft: 17, marginRight: 17, backgroundColor: bg }}>
                    <TouchableOpacity onPress={handlePayment} style={{ flex: 1, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 4, backgroundColor: light }}>
                        <FontAwesome name="bank" size={30} color={primary} />
                        <Text style={{ fontSize: 20, }}>Bank Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('mpesa')} style={{ flex: 1, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 4, backgroundColor: primary }}>
                        <FontAwesome5 name="money-bill-wave" size={30} color={light} />
                        <Text style={{ fontSize: 20, color: light }}>Mpesa Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 4, backgroundColor: light }}>
                        <AntDesign name="qrcode" size={30} color={primary} />
                        <Text style={{ fontSize: 20, color: dark }}>QR code</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 4, backgroundColor: primary }}>
                        <Feather name="repeat" size={24} color={light} />
                        <Text style={{ fontSize: 20, color: light }}>AutoPay</Text>
                    </TouchableOpacity>
                </View>

                {/* end of options */}
                {/* start of people */}

                {/* start of speed dial */}

                <View style={{ height: 150, width: 320, backgroundColor: light, borderRadius: 10, elevation: 7, marginTop: 20, marginLeft: 17, }}>
                    <View style={{ flex: 1, paddingLeft: 17, paddingTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: dark }}>Recent Receipts</Text>
                    </View>
                    <View style={{ flex: 2, paddingLeft: 17, justifyContent: 'center', alignItems: 'flex-start', paddingRight: 17, flexDirection: 'row' }}>
                        <ScrollView horizontal={true} style={{ height: "100%" }}>

                            {/* start of avatar */}
                            <Avatar.Group size="lg" max={5}>
                                <Avatar bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                    AJ
                                </Avatar>
                                <Avatar bg="cyan.500" source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TE
                                </Avatar>
                                <Avatar bg="indigo.500" source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                    JB
                                </Avatar>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TS
                                </Avatar>
                                <Avatar bg="green.500" source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                    AJ
                                </Avatar>
                                <Avatar bg="cyan.500" source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TE
                                </Avatar>
                                <Avatar bg="indigo.500" source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                }}>
                                    JB
                                </Avatar>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TS
                                </Avatar>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TS
                                </Avatar>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TS
                                </Avatar>
                                <Avatar bg="amber.500" source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                }}>
                                    TS
                                </Avatar>
                            </Avatar.Group>


                            {/* end of avatar */}
                            {/* <TouchableOpacity style={{height: 60, width: 60, borderRadius:60, backgroundColor:primary}}>
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
                <TouchableOpacity style={{height: 60, width: 60, marginLeft:10, borderRadius:60, backgroundColor:primary}}>
                    <Image source={require('../assets/dp4.jpg')} style={{ height:"100%", width:"100%", borderRadius:130}}/>
                    <Text style={{fontWeight: "bold", color:'grey'}}> Denno</Text>
                </TouchableOpacity> */}
                        </ScrollView>
                
                    </View>
                </View>

                {/* end of speed dial */}

                {/* end of peope */}
                {/* start of contacts */}

                <View style={{ height: 320, borderRadius: 12, elevation: 7, width: 330, marginLeft: 17, marginRight: 17, backgroundColor: light, marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 20, marginTop: 10 }}>Add New Contacts</Text>
                    <View style={{ width: 300, flexDirection: 'row', height: 50, paddingLeft: 20, marginLeft: 10, paddingRight: 20, borderRadius: 10, marginTop: 16, backgroundColor: '#e8e9f1', borderWidth: 1, borderColor: '#e8e9f1' }}>
                        <TextInput style={{ width: "100%" }} placeholder="Search friends and family" />
                        <TouchableOpacity style={{ position: 'absolute', right: 15, top: 8 }}>
                            <AntDesign name="search1" size={24} color={primary} />
                        </TouchableOpacity>
                    </View>

                    {/* start of list */} 
                    <ScrollView>
                        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }} >
                            <TouchableOpacity style={{ height: 45, width: 65, borderRadius: 65, marginLeft: 15, justifyContent: 'center', marginTop: 10, backgroundColor: primary }}>
                
                                <Image source={require('../assets/dp.jpg')} style={{ height: "100%", width: "100%", borderRadius: 130 }} />
                
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: light }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: dark }}>Marion Elsie</Text>
                                <Text style={{ color: "grey" }}>+22648482742</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 10, backgroundColor: secondary }}>
                                    <Text style={{ fontSize: 19, color: light }}>Invited</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }} >
                            <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65, marginLeft: 15, justifyContent: 'center', marginTop: 10, backgroundColor: primary }}>
                
                                <Image source={require('../assets/dp2.jpg')} style={{ height: "100%", width: "100%", borderRadius: 130 }} />
                
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: light }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: dark }}>Jacob Kamau</Text>
                                <Text style={{ color: "grey" }}>+34536353224</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 10, backgroundColor: primary }}>
                                    <Text style={{ fontSize: 19, color: light }}>Invite</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }} >
                            <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65, marginLeft: 15, justifyContent: 'center', marginTop: 10, backgroundColor: primary }}>
                
                                <Image source={require('../assets/dp3.jpg')} style={{ height: "100%", width: "100%", borderRadius: 130 }} />
                
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: light }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: dark }}>Irene Kerubo</Text>
                                <Text style={{ color: "grey" }}>+374287824223</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 10, backgroundColor: primary }}>
                                    <Text style={{ fontSize: 19, color: light }}>Invite</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }} >
                            <TouchableOpacity style={{ height: 65, width: 65, borderRadius: 65, marginLeft: 15, justifyContent: 'center', marginTop: 10, backgroundColor: primary }}>
                
                                <Image source={require('../assets/dp5.jpg')} style={{ height: "100%", width: "100%", borderRadius: 130 }} />
                
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: light }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: dark }}>Nyaga Colonel</Text>
                                <Text style={{ color: "grey" }}>+72829294393</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 10, backgroundColor: secondary }}>
                                    <Text style={{ fontSize: 19, color: light }}>Invited</Text>
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
}