//import Example from './examples/3-Nesting'
//export default Example

import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';
//import contacts from './contacts'
import {fetchUsers} from './api'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator ();

export default class App extends React.Component {
  state = {
    contacts: [{name: "John", phone: "55555555"}],
  };

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const results = await fetchUsers()
    console.log("App.js - getUsers:")
    console.log(results)
    this.setState({contacts: results})
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
    console.log("from App.js - addContact")
    //console.log(this.state.contacts)
  };
 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ContactList'
            component={ContactListScreen}
            initialParams={{
              contacts: this.state.contacts,
            }}
          />
        <Stack.Screen 
          name='AddContact'
          component={AddContactScreen}
          initialParams={{
            addContact : ( () => this.addContact )
            }}           
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}




/*
 <Tab.Navigator>
          <Tab.Screen name="Contacts" component ={Contacts} />
          <Tab.Screen name="Settings" component ={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
*/



/*
  state = {
    contacts
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

*/

/*
initialParams={{
  addContact: this.addContact,
}}
*/


/*
function Contacts({contacts}) {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name='ContactList'
      component={ContactListScreen}
      initialParams={{
        contacts: contacts,
      }}
    />
    <Stack.Screen 
      name='AddContact'
      component={AddContactScreen}
      initialParams={{
        addContact : ( () => this.addContact )
      }}           
    />
    </Stack.Navigator>
  )      
}

function Settings() {
  return (
    <View>
      <Tex>Settings</Tex>
    </View>
  )
}
*/


/*