import React from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';

import SectionListContacts from '../SectionListContacts';

function ContactListScreen ({route, navigation}) {
  let {contacts} = route.params
 
  React.useLayoutEffect ( () => {
    navigation.setOptions ({
      title: 'Contacts',
      headerRight: () => (
        <Button 
          title="Add"
          onPress={ () => navigation.navigate('AddContact')}
        />
      )
    })
    if (route.params?.newContact){
      //console.log("new Contact")
      //console.log(route.params?.newContact)
      //contacts = [...contacts, route.params?.newContact]
      //console.log(contacts)
      console.log("in Contact List screen")
    }
  }, [navigation, route])

  return (
    <View style={styles.container}>
      <SectionListContacts
        contacts={contacts}
        //onSelectContact={this.handleSelectContact}
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactListScreen

/*
export default class ContactListScreen extends React.Component {  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddContact')}
          color="#a41034"
        />
      ),
    };
  };
  
  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.screenProps.contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/