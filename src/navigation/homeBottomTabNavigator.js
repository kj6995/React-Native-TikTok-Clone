import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Home from '../screens/Home';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../assets/images/tiktok_upload_icon2.png';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => <Text>Seach</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={() => <Text>Upload</Text>}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={plusIcon}
              style={{height: 30, resizeMode: 'contain', borderRadius: 20}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={() => <Text>Inbox</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <Text>Profile</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'ios-person-outline'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
