
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { light, primary, secondary,dark } from '../Palletes/Colours'
import Appbar from '../Components/Appbar'
import axios from 'axios'
import { BASE_URI } from '../BASE_URI'
import LoadingScreen1 from '../Components/LoadingScreen1'
import { ScrollView } from 'native-base'

let data = [];
export default function EquityBillers() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios.get(BASE_URI + '/api/equity/bank/openbankingv3/billers')
      .then((res) => {
       // console.log(res.data.EquityOpenBankingBillers.data.billers);
        let resp = res.data.EquityOpenBankingBillers.data.billers;
        resp.map((obj) => {
          data.push(obj);
        })

        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
},[])

  if (loading) {
   return <LoadingScreen1 />
  }

  return (
    <View style={{ marginTop:50,}}>
      <Appbar />
      <ScrollView>
      {data.map((biller) => {
        return (
          <View style={{
            height: 50,
            marginBottom: 10, flexDirection: 'row'
          }} >
         
              <TouchableOpacity style={{ height: 65, width: 65, alignItems:'baseline', borderRadius: 65, marginLeft: 15, justifyContent: 'center', marginTop: 0, backgroundColor: light }}>
      
              <Image source={require('../assets/equity.png')} style={{ height: "90%", alignItems:"center", justifyContent:"center", width: "90%", borderRadius: 90 }} />
      
          </TouchableOpacity>
          <View style={{ flex: 1, marginLeft:10, justifyContent: 'center', alignItems: 'center', backgroundColor: light }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: dark }}>{ biller.name}</Text>
              <Text style={{ color: "grey" }}>{biller.code}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 10, backgroundColor: secondary }}>
                  <Text style={{ fontSize: 19, color: light }}>PAY</Text>
              </View>
          </View>
            </View>

        );
      })}
        </ScrollView>
    
      </View>

  )
}