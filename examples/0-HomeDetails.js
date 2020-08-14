import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"  
        onPress={ () => { 
          //1. Navigate to the Details route with params
          navigation.navigate('Details' , {
            //itemId : 86,
            otherParam: 'anything you want here!!'  
          })   
        }} 
      />
      <Button 
        title= "Update title"
        onPress={ () => 
          navigation.setOptions({title: "updated!"})
        } 
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  //2. Get the params
  const {itemId} = route.params //de-structure
  const {otherParam} = route.params

  //3. Use the params
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)} </Text>
      <Text>otherParam: {JSON.stringify(otherParam)} </Text>
      <Button 
        title= "Go to Details... again"
        onPress={ () => 
          navigation.push('Details' , {
            itemId: Math.floor(Math.random() * 100),
            otherParam: "nested details"
          })
        } 
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={()=> navigation.goBack()} />
      <Button 
        title="Go to first screen in stack"
        onPress= {() => navigation.popToTop()} 
      />
      <Button 
        title="add right button"
        onPress={()=>
          navigation.setOptions({
            headerRight: props => <Button title="->"/>
          })
        }
      />
    </View> 
  )
}

const Stack = createStackNavigator();

function App() {
  return ( // screenOptions={/**/}
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"} 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      >  
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Overview'
          }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          initialParams={{ 
            itemId: 42,
            name: "Details title", 
          }} 
          //function that returns an object, that contains various configuration options
          //React Navigation will call it with an object containing {navigation, route} 
          options={ 
            ({route}) => ({ 
              title: route.params.name,
              //... headerStyle:  etc ...
              headerRight: (props => <Text>hello</Text>)  
            }) 
          }
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//If you didn't specify any params when navigating to this screen, 
//the initial params will be used. They are also shallow merged with
//any params that you pass. 

export default App;


// Lecture example:
// $ mkdir screens
// $ touch AddContactScreen.js
// $ mv AddContactScreen.js screens/
// $ touch creens/ContactListScreen.js

// (App.js)
// <AppNavigator screenProps={{contacts: this.state.contacts }} />

// (ContactListScreen.js)
// <SectionListContacts contacts={this.props.screenProps.contacts} />

// -also pases the addcontact function


//   
//  static navigationOptions = {
//      
//  }

/*
(ContactListScreen)
static navigationOptions = ({navigation}) => ({
  headerTitle: 'Contacts',
  headerRight: <Button title="Add" onPress={()=> {
    navigation.navigate('AddContact')
  }}
})
// ({navigation}) - de-structure

*/
