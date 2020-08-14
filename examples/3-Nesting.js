import * as React from 'react';
import { View, Text, Button, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()


function Feed (){
  return(
    <Text>Feed</Text>
  )
}

function Messages () {
  return(
    <Text>Messages</Text>
  )
}

function Home() {  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  )
}


const Stack = createStackNavigator();

function Profile(){
  return(
    <Text>Profile</Text>
  )
}

function Sets(){
  return(
    <Text>Settings</Text>
  )
}

function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="Home" component={Home} />  
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Sets" component={Sets} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
