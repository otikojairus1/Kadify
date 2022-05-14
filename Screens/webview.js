import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';
import { primary } from '../Palletes/Colours';

export default function MyWeb({ navigation, route }) {
    const { token } = route.params;
    return (
        // <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}}>
         
            <WebView
            source={{ uri: 'https://secure.3gdirectpay.com/payv2.php?ID='+token}}

            style={{ marginTop: 20 }}
            />
// </View>
      
    );

}


//  source={{ uri: 'https://secure.3gdirectpay.com/payv2.php?ID='+token}}
//  source={{ uri: 'https://www.google.com' }}