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
          navigation.navigate('Details')   
        }} 
      />
    </View>
  );
}

function DetailsScreen({navigation}) {

  //returns a stateful value, and a function to update it.
  const [count, setCount] = React.useState(0) // 0 - initial state
  
  //fires in the same phase as componentDidMount and componentDidUpdate.
  React.useLayoutEffect (() => {
    navigation.setOptions({
      headerBackTitle: " ",
      headerRight: () => (
        <Button 
          title ="Update count" 
          onPress= {() => setCount (c => c + 1)} 
        />
      )
    })
  }, [navigation])
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Count: {count}</Text>
    </View> 
  )
}

const Stack = createStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"} 
        screenOptions={{ //to the entire Navigator
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
          options= {{
            title: "Title",
            //headerTitle: props => <Text>Title</Text>,
            headerRight: () => (
              <Button 
                title="Info"
                onPress={() => alert('this is working')}
                color= '#fff'
              />
            ),
          }} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;