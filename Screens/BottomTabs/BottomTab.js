import {React, useEffect, useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign,Ionicons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { primary } from '../../Palletes/Colours';
import HomeWallet from '../HomeWallet';
import Profile from '../Profile';
import MyCards from '../MyCards';


const Tab = createBottomTabNavigator();


export default function BottomTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeWallet2"
      screenOptions={{
        tabBarActiveTintColor: primary,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="HomeWallet"
        //component={TabOne}
        children={()=><HomeWallet navigation={navigation}/>}

        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
           
          ),  
        }}
      />
      <Tab.Screen
        name="p"
        //component={TabOne}
        children={()=><MyCards navigation={navigation}/>}

        options={{
          tabBarLabel: 'My Wallet',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="wallet" size={24} color={color} />
          ),  tabBarBadge: 23,
        }}
      />

<Tab.Screen
        name="pay"
        //component={TabOne}
        children={()=><Profile navigation={navigation}/>}

        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),  
        }}
      />




<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={20} color={color} />
          ), // tabBarBadge: 23,
        }}
      />
    </Tab.Navigator>
  );
}