import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { absabg, bg, coopbg, dark, equitybg, kcbbg, light, ncbabg, primary, secondary } from '../Palletes/Colours'
import { Button, Actionsheet, AlertDialog, useDisclose, Box, Switch, Center, NativeBaseProvider, Icon, CheckIcon } from "native-base";
import { Path } from "react-native-svg";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";
import PrimaryButton from '../Components/PrimaryButton';
import LoadingScreen1 from '../Components/LoadingScreen1'

export default function CreateCards({ navigation }) {

    // dialog issues
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isOpen2, setIsOpen2] = React.useState(false);

    const onClose2 = () => setIsOpen2(false);

    const cancelRef = React.useRef(null);

    const [cardname, setCardName] = React.useState("");
    const [transactions, setTransactions] = React.useState(0);

    const [balance, setBalance] = React.useState(0);
    const [cardDesc, setCardDesc] = React.useState("");
    const [cardExp, setCardExp] = React.useState("");
    const [accountType, setAccountType] = React.useState("");
    const [merchantLock, setMerchantLock] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    let accountbg = primary;

    if (accountType == "coop") {
        accountbg = coopbg;

    } else if (accountType == 'kcb') {
        accountbg = kcbbg;
    } else if (accountType == "ncba") {
        accountbg = ncbabg;
    } else if (accountType == "equity") {
        accountbg = equitybg;
    } else if (accountType == 'absa') {
        accountbg = absabg;
    }
    // end of dialod issues
    const quoter1 = Math.floor(1000 + Math.random() * 9000);
    const quoter2 = Math.floor(1000 + Math.random() * 9000);
    const quoter3 = Math.floor(1000 + Math.random() * 9000);
    const quoter4 = Math.floor(1000 + Math.random() * 9000);

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    if (loading) {
        return <LoadingScreen1 />
    }
    else {
        return (
            <View style={{ justifyContent: "center", flex: 1, paddingTop: 40, backgroundColor: light }}>
                {/* start of appbar */}
                <View style={{ width: 355 }}>
                    <Appbar />
                </View>
                {/* end of appbar */}
                {/* start of carding words */}
                <View style={{ width: 200, marginLeft: 17 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: dark }}>Create a new Kadify Virtual Card</Text>
                </View>

                {/* end of words */}
                {/* start of tags */}

                <View style={{ width: 330, height: 80, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: light, marginLeft: 17 }}>
                    <TouchableOpacity style={{ height: 50, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: 150, marginRight: 10, backgroundColor: primary }}>
                        <Text style={{ fontSize: 18, color: light }}>Mobile Money Card (MPESA & AIRTEL)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, elevation: 7, justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: 150, marginRight: 10, backgroundColor: "#A7AFF3" }}>
                        <Text style={{ fontSize: 18, color: primary, fontWeight: 'bold' }}>BANK CARD</Text>
                    </TouchableOpacity>

                </View>

                {/* end of tags */}
                {/* start of card design */}


                <View style={{ backgroundColor: light }}>

                    <View style={{ height: 200, elevation: 7, width: 330, marginLeft: 10, backgroundColor: accountbg, borderRadius: 10 }}>
                        <View style={{ width: 200, marginTop: 4, flexDirection: 'row', marginLeft: 20, height: 50 }}>
                            <Text style={{ fontSize: 34, fontWeight: 'bold', color: light }}>Kadify</Text>
                            <Text style={{ fontSize: 34, fontWeight: 'bold', color: secondary }}>Pay</Text>
                        </View>
                        <View style={{ position: "absolute", top: 20, left: 200 }}>
                            <Text style={{ fontSize: 20, color: dark, fontWeight: 'bold', }}>{accountType.toUpperCase()} VCARD</Text>
                        </View>

                        <View style={{ height: 40, width: 55, marginTop: 4, position: "absolute", top: 40, left: 30, backgroundColor: light }}>
                            <Image source={require('../assets/terminal3.png')} style={{ height: "100%", width: "100%", }} />
                            <View style={{ alignItems: "center", position: "absolute", top: 0, left: 60, justifyContent: "center", transform: [{ rotate: '90deg' }] }}>
                                <AntDesign name="wifi" size={32} color={light} />

                            </View>

                        </View>
                        <View style={{ position: "absolute", top: 90, left: 27 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 30, color: light }}>{`${quoter1} ${quoter2} ${quoter3} ${quoter4}`}</Text>
                        </View>
                        <View style={{ position: 'absolute', top: 140, left: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: secondary }}>Cardholder's Name</Text>
                        </View>
                        <View style={{ position: 'absolute', top: 165, left: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: light }}>{cardname.toUpperCase()}</Text>
                        </View>
                        <View style={{ position: 'absolute', top: 140, left: 180 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: secondary }}>Valid Till</Text>
                        </View>
                        <View style={{ position: 'absolute', top: 160, left: 190 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: light }}>{cardExp.toUpperCase()}</Text>
                        </View>

                        <View style={{ position: 'absolute', top: 140, left: 260 }}>
                            <Image source={require('../assets/mastercard.png')} style={{ height: 50, width: 60, }} />
                        </View>



                    </View>




                </View>
                <ScrollView>

                    {/* end of card design */}
                    {/* start of card settings */}
                    <View style={{ marginLeft: 17, marginTop: 10, }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: dark }}>Card Details</Text>
                    </View>

                    {/* start of card entry details */}


                    <View style={{ marginTop: 0, paddingLeft: 17, paddingRight: 17, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 1 }}>
                            <TextInput value={cardname} onChangeText={(text) => { setCardName(text) }} placeholder="Card Holder's Name" style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, borderWidth: 1, borderColor: '#e8e9f1', backgroundColor: '#e8e9f1' }}></TextInput>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput value={cardDesc} onChangeText={(text) => { setCardDesc(text) }} placeholder="Card description (optional)" secureTextEntry={false} style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, backgroundColor: '#e8e9f1', borderWidth: 1, borderColor: '#e8e9f1' }}></TextInput>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder="Card expiry (mm/yy)" value={cardExp} onChangeText={(text) => { setCardExp(text) }} autoComplete={'cc-exp-month'} style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, backgroundColor: '#e8e9f1', borderWidth: 1, borderColor: '#e8e9f1' }}></TextInput>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder="Opening Card Balance" keyboardType={'numeric'} value={balance} onChangeText={(text) => { setBalance(text) }} autoComplete={'cc-exp-month'} style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, backgroundColor: '#e8e9f1', borderWidth: 1, borderColor: '#e8e9f1' }}></TextInput>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder="Number of Transactions" keyboardType={'numeric'} value={transactions} onChangeText={(text) => { setTransactions(text) }} autoComplete={'cc-exp-month'} style={{ width: 320, height: 50, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 16, backgroundColor: '#e8e9f1', borderWidth: 1, borderColor: '#e8e9f1' }}></TextInput>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Select selectedValue={accountType} minWidth="180" accessibilityLabel="Choose Bank type" placeholder="Choose Bank type" _selectedItem={{
                                bg: bg,
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setAccountType(itemValue)}>
                                <Select.Item label="COOP BANK" value="coop" />
                                <Select.Item label="EQUITY BANK" value="equity" />
                                <Select.Item label="KCB BANK" value="kcb" />
                                <Select.Item label="ABSA BANK" value="absa" />
                                <Select.Item label="NCBA GROUP BANK" value="ncba" />

                            </Select>
                        </View>



                    </View>



                    {/* end of card entry details */}
                    <View style={{ marginLeft: 17, marginTop: 10, }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: dark }}>Card Settings</Text>
                    </View>

                    <View style={{ paddingBottom: 20 }}>

                        <View style={{ height: 60, width: 330, flexDirection: 'row', backgroundColor: light, borderRadius: 10, marginLeft: 17 }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", transform: [{ rotate: '90deg' }] }}>
                                <AntDesign name="wifi" size={32} color={primary} />


                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Contactless Payment</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary} colorScheme={primary} />

                            </View>
                        </View>
                        {/* card 2 */}
                        <View style={{ height: 60, marginTop: 10, width: 330, flexDirection: 'row', backgroundColor: light, borderRadius: 10, marginLeft: 17 }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                                <MaterialCommunityIcons name="key-wireless" size={32} color={primary} />


                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Merchant Type Lock</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Switch defaultIsChecked onChange={toggleSwitch}
                                    value={isEnabled} disabled={isEnabled}
                                    onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary} colorScheme={primary} />

                            </View>

                            {/* specified */}

                        </View>
                        {isEnabled ? <View style={{ width: "100%", alignItems: "center" }}>
                            <Select selectedValue={merchantLock} minWidth="180" accessibilityLabel="Choose Merchant Type" placeholder="Choose Merchant type" _selectedItem={{
                                bg: bg,
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setMerchantLock(itemValue)}>


                                <Select.Item label="Transport" value="transport" />
                                <Select.Item label="Shopping" value="shopping" />
                                <Select.Item label="Fees" value="fees" />
                                <Select.Item label="Business" value="business" />
                                <Select.Item label="Loans" value="loans" />

                            </Select>
                        </View> : <Text></Text>}


                        {/* card 3 */}
                        <View style={{ height: 60, marginTop: 10, width: 330, flexDirection: 'row', backgroundColor: light, borderRadius: 10, marginLeft: 17 }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                                <SimpleLineIcons name="wallet" size={32} color={primary} />


                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Enable friends Withdrawal</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary} colorScheme={primary} />

                            </View>
                        </View>

                        {/* card 3 */}
                        <View style={{ height: 60, marginTop: 10, width: 330, flexDirection: 'row', backgroundColor: light, borderRadius: 10, marginLeft: 17 }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                                <Fontisto name="world" size={32} color={primary} />


                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Geographical lock</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary} colorScheme={primary} />

                            </View>
                        </View>

                        {/* card 3 */}
                        <View style={{ height: 60, marginTop: 10, width: 330, flexDirection: 'row', backgroundColor: light, borderRadius: 10, marginLeft: 17 }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                                <MaterialCommunityIcons name="card-bulleted-off" size={32} color={primary} />


                            </View>
                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Deactivate Card</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <Switch defaultIsChecked onTrackColor={primary} onThumbColor={bg} offTrackColor={secondary} colorScheme={primary} />

                            </View>

                        </View>


                    </View>
                    <PrimaryButton onPress={onOpen} title={"Create Card"} />
                </ScrollView>


                {/* end of card settings */}

                {/* start of action sheet */}

                <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                    <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: primary }}>{accountType.toUpperCase()} Kadify Card Detailed services subscription</Text>
                        </Box>
                        <Actionsheet.Item onPress={() => console.log("clicked")} >
                            <Text style={{ fontSize: 17, color: dark, }}> {accountType.toUpperCase()} virtual card will allow you access international money transer services like SWIFT and RGTS banking systems, you also have access to Internal Money Transfer services, these services will allow you to make payments to other equity bank users (not necessarily within the Kadify ecosystem.) You also have exclusive services like access to the equity bank current Forex Exchange infomation. Its also worth noting the availability of the following services. </Text>
                            <Text style={{ fontWeight: "bold" }}>1. Airtime purchases (to all telcos within kenya)</Text>
                            <Text style={{ fontWeight: "bold" }}>2. Access to all equity utility till numbers</Text>
                            <Text style={{ fontWeight: "bold" }}>3. Access credit score of any customer, usefull for personal lending</Text>
                            <Text style={{ fontWeight: "bold" }}>4. Access to all Equity bank billers.</Text>
                            <Text style={{ fontWeight: "bold" }}>4. Access to current Forex exchange data.</Text>
                            <Text style={{ fontWeight: "bold" }}>5. KYC information</Text>
                            <Text style={{ fontWeight: "bold" }}>6. SWIFT banking services</Text>
                            <Text style={{ fontWeight: "bold" }}>7.RGTS banking services</Text>
                            <Text style={{ fontWeight: "bold" }}>8.Remmitance pesaLink banking services</Text>
                            <Text style={{ fontWeight: "bold" }}>9. Online Kadify merchant payment services</Text>
                        </Actionsheet.Item>
                        <View style={{ marginLeft: -30, }}>
                            <PrimaryButton title={"SUBSCRIBE"} />
                        </View>

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
}