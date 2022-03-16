import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Appbar from '../Components/Appbar'
import { Progress, ScrollView } from 'native-base'

export default function Budget({navigation}) {
  return (
    <View style={{marginTop: 40, flex:1,backgroundColor: '#EDF8F9'}}>
      {/* Appbar start */}
      <Appbar />
      {/* Appbar end */}
      {/* Header start */}
      <View  style={{paddingLeft: 17, marginTop: 10}}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Budget</Text>
      </View>
      {/* Months section */}
      <View style={{height: 70}}>
      <ScrollView horizontal={true} bounce={true} style={{height: 60,paddingLeft: 10, marginTop: 16, flexDirection: 'row'}}>
          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>January</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>February</Text></View>

          </TouchableOpacity>
          <TouchableOpacity style={{height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>March</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>April</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>May</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>June</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>July</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>August</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>September</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>October</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{ height: 40, width: 90,marginLeft: 7, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff'}}>
              <View ><Text style={{fontSize: 20, fontWeight: 'bold'}}>November</Text></View>

          </TouchableOpacity>

          <TouchableOpacity style={{height: 40, width: 90,marginLeft: 7,marginRight: 17, elevation: 7,marginTop:5,justifyContent: 'center', alignItems: 'center',borderRadius: 10, backgroundColor: '#fff' }}>
              <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>December</Text></View>

          </TouchableOpacity>          

      </ScrollView>
     
      </View>
       {/* End months section */}

       {/* Begin of budget categories */}

{/* Section 1 */}
      <View style={{height: 120, marginTop: 16, marginLeft: 15,paddingLeft: 17, marginRight: 15, borderRadius: 10, elevation:7, backgroundColor: '#fff'}}>
          <Text style={{marginTop:25, fontWeight: 'bold', color:'#A9A8AF'}}>Children Education</Text>
          <View style={{flexDirection:'row', paddingTop: 5}}>
              <View style={{paddingRight: 20}}><Text style={{fontWeight:'bold', }} >$48600.10</Text></View>
              <View><Text style={{paddingRight: 150, fontWeight: 'bold', color:'#A9A8AF'}}>60%</Text></View>
              <View><Text style={{fontWeight:'bold',  color: '#A9A8AF'  }} >$80000</Text></View>
          </View>
          <View style={{paddingRight: 17, marginTop: 20}}><Progress size="sm" mb={4} value={60} /></View>
      </View>

{/* Section 2 */}
      <View style={{height: 120, marginTop: 20, marginLeft: 15, marginRight: 15,paddingLeft: 17, borderRadius: 10, elevation:7, backgroundColor: '#fff'}}>
      <Text style={{marginTop:25, fontWeight: 'bold', color:'#A9A8AF'}}>Home Medical</Text>
          <View style={{flexDirection:'row', paddingTop: 5}}>
              <View style={{paddingRight: 20}}><Text style={{fontWeight:'bold', }} >$50000.00</Text></View>
              <View><Text style={{paddingRight: 150, fontWeight: 'bold', color:'#A9A8AF'}}>76%</Text></View>
              <View><Text style={{fontWeight:'bold',  color: '#A9A8AF' }} >$60000</Text></View>
          </View>
          <View style={{marginTop: 20, marginRight: 17}}><Progress colorScheme="blue" bg="grey" value={76} mx={0} /></View>
      </View>

{/* Srction 3 */}
      <View style={{height: 120, marginTop: 20, marginLeft: 15, paddingLeft: 17, marginRight: 15, borderRadius: 10, elevation:7, backgroundColor: '#fff'}}>
      <Text style={{marginTop:25, fontWeight: 'bold', color:'#A9A8AF'}}>Office and Business</Text>
          <View style={{flexDirection:'row', paddingTop: 5}}>
              <View style={{paddingRight: 20}}><Text style={{fontWeight:'bold' }} >$10000.00</Text></View>
              <View><Text style={{paddingRight: 150, fontWeight: 'bold', color:'#A9A8AF'}}>25%</Text></View>
              <View><Text style={{fontWeight:'bold', color: '#A9A8AF' }}>$25000</Text></View>
          </View>
          <View style={{paddingRight: 17, marginTop: 20}}><Progress size="sm" mb={4} value={25} /></View>
      </View>
      <TouchableOpacity style={{height: 50, marginTop: 16, marginLeft: 15, marginRight: 15, borderRadius: 10, elevation:7, justifyContent: 'center', alignItems: 'center',backgroundColor: '#4f62c0'}}>
          <Text style={{fontSize:20, color:'#fff'}}>Set New Budget</Text>
      </TouchableOpacity>
      {/* End budget categories */}
      
    </View>
  )
}