import React from 'react';
import AddContactForm from '../AddContactForm';

function AddContactScreen ({route, navigation}) {

  const {addContact} = route.params

  return ( 
    <AddContactForm 
      onSubmit= { formState => {
       
        //console.log("this is the state")
        //console.log(formState)
        //console.log(addContact.toString())
        addContact(formState)  
        navigation.navigate('ContactList')
      }} 
    />
  )  
}

export default AddContactScreen