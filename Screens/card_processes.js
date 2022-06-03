import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Appbar from '../Components/Appbar'
import { bg, light, primary, dark, secondary } from '../Palletes/Colours'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AntDesign, Fontisto, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import LoadingScreen1 from '../Components/LoadingScreen1';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios'
import { BASE_URI } from '../BASE_URI'
import { Feather } from '@expo/vector-icons';

export default function CardProcesses({route, navigation,openDrawer }) {
    const {cardname, cardnumber} = route.params;
  //  const {emailid} = route.params;
    // component did mount here

    // useEffect(() => {
    //     axios.post(BASE_URI + '/api/get/userdetails', {
    //         email: "otikojairus@gmail.com"
    //     })
    //         .then((response) => {
    //             console.log(response.data);
    //             userdetailsobject = response.data.user;
    //             setLoading(false);
    //             setuserbalance(userdetailsobject.balance);
    //             setfirstname(userdetailsobject.fullName.split(" ")[0]);
    //             setsecondname(userdetailsobject.fullName.split(" ")[1]);
    //         }).catch((err) => {
    //             console.log(err);
    //             //setLoading(false);
    //         })
    // },[]);


    // end of compoennt did mount

    React.useEffect(() => {
        console.log(cardname, cardnumber)
    })


    const [loading, setLoading] = React.useState(false);
    const [userbalance, setuserbalance] = React.useState(0);
    const [secondname, setsecondname] = React.useState("");
    const [firstname, setfirstname] = React.useState("");

    const renderChild = () => {
        <Text style={{}}>sdss</Text>
    }

    if (loading) {

        return (
            <LoadingScreen1 />);

    } else {
        return (
            <View style={{ paddingTop: 75, flex: 1, justifyContent: 'center', backgroundColor: bg }}>
                <Appbar toggleDrawer={openDrawer} />
   

                {/* end of view wording */}

             

                {/* end of overlay */}
                {/* start of operations wprd */}

                <View style={{ marginLeft: 17, marginTop: 17, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Available Kadify Vcard Operations</Text>
                </View>


                {/* end of operations word */}

                {/* start of buttons */}

                <View style={{ height: 100, flexDirection: 'row', marginLeft: 17, marginRight: 17, backgroundColor: bg }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Equity Billers') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 7, backgroundColor: light }}>
                    <Feather name="user-check" size={34} color={primary} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>All Equity Billers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <FontAwesome5 name="users" size={34} color={ primary}/>
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>All equity Merchants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('sendmoney',{'cardname':cardname, 'cardnumber':cardnumber})} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <MaterialCommunityIcons name="wallet-plus" size={30} color={primary} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Card Transfers</Text>
                    </TouchableOpacity>
                </View>


                {/* end of buttons */}

                {/* start of buttons */}

                <View style={{ height: 100, marginTop: 10, flexDirection: 'row', marginLeft: 17, marginRight: 17, backgroundColor: bg }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Help') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/chat.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('mapView') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/analytics.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Budget') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/budget.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Budget</Text>
                    </TouchableOpacity>



                </View>
                <View style={{ height: 100, marginTop: 10, flexDirection: 'row', marginLeft: 17, marginRight: 17, backgroundColor: bg }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Help') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/chat.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('mapView') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/analytics.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Budget') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/budget.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Budget</Text>
                    </TouchableOpacity>



                </View>
                <View style={{ height: 100, marginTop: 10, flexDirection: 'row', marginLeft: 17, marginRight: 17, backgroundColor: bg }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Help') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/chat.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('mapView') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/analytics.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Budget') }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10, borderRadius: 10, elevation: 7, backgroundColor: light }}>
                        <Image source={require('../assets/budget.gif')} style={{ height: 40, width: 40, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, color: dark }}>Budget</Text>
                    </TouchableOpacity>



                </View>


                {/* end of buttons */}
 
            </View>
        )
    }
}