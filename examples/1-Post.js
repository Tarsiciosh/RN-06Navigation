import * as React from 'react'; 
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen({navigation, route}) {
  
  React.useEffect( ()=>{
    if(route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post])
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Create post"  
        onPress={ () => navigation.navigate('CreatePost') } 
      />
      <Text style={{margin: 10}}> Post:{route.params?.post} </Text>
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('')

  return (
    <>
      <TextInput 
        multiline
        placeholder="write the post"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={()=> {
          navigation.navigate('Home', {post: postText})
        }} 
      />
    </>
  )
}

const Stack = createStackNavigator();

function App() {
  return ( // screenOptions={/**/}
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Overview'}} 
        />
        <Stack.Screen 
          name="CreatePost" 
          component={CreatePostScreen} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//If you didn't specify any params when navigating to this screen, 
//the initial params will be used. They are also shallow merged with
//any params that you pass. 


export default App;
