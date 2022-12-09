import React from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text } from 'react-native'
import Button from '../components/Button/Button'
import Return from '../components/Button/Return'
import NumberInput from '../components/Forms/Input/NumberInput'
import TextInput from '../components/Forms/Input/TextInput'
import Modal from '../components/modal/Modal'
import Background from '../components/Template/Background'
import Colors from '../config/colors'
import UserContext from '../context/UserContext'
import { PostGroup } from '../helper/groupHelper'

const CreateGroupScreen = ({navigation}) => {
  const userContext = React.useContext(UserContext);
  const [forms, setForms] = React.useState({
    name: '',
    nameValid: false,
    maxAmount: '',
    maxAmountValid: false,
  })
  const [showValidationModal, setShowValidationModal] = React.useState(false);
  const [createdCode, setCreatedCode] = React.useState('');

  function onSubmit() {
    if (forms.nameValid && forms.maxAmountValid) {
      PostGroup(forms.name, [{name : userContext.profile.pseudo, id : userContext.profile.id}] ,forms.maxAmount,userContext.profile.id).then((response) => {
        setShowValidationModal(true);
        setCreatedCode(response.id.toString().padStart(6, '0'));
      }).catch((error) => {
        console.error(error)
      })
    }
    else {
      Alert.alert("Erreur", "Veuillez remplir tous les champs correctement")
    }
  }

  return (
    <Background disableTop>
      <ScrollView style={styles.container}>
        <Image 
        resizeMode='contain'
        resizeMethod='scale'
        source={require('../assets/img/GroupIcon.png')} 
        style={styles.image} 
        />
        <TextInput 
          placeholder="Nom du groupe" 
          title="Nom du groupe" 
          regex={/^[a-zA-Z0-9_ ]{3,25}$/} 
          onChange={(text,isValid) => setForms({ ...forms, name: text, nameValid: isValid })}
        />
        <NumberInput 
        onChange={(text,isValid) => setForms({ ...forms, maxAmount: text, maxAmountValid: isValid })}
          placeholder="15" 
          title="Montant max du cadeau" 
          min={1} 
          max={1000}/>
        <Button style={styles.button} text="Créer le groupe" onClick={onSubmit} />
        <Return onClick={() => {navigation.navigate('Home')}} />
      </ScrollView>
      <Modal 
          visible={showValidationModal}
          onClose={() => {setShowValidationModal(false)}}
        > 
          <Text style={styles.subTitle}>Partager le code à vos amis</Text>
          <Text style={styles.information}>{createdCode}</Text>
          <Button text='Ok' style={styles.modalConfirmButton} onClick={()=>{navigation.navigate('Home')}}/>
        </Modal>
    </Background>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: Colors.lightBlue,
    marginTop: 50,
  },
  button: {
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.darkGray,
    textAlign: 'center',
    marginBottom: 10,
  },
  information: {
      fontSize: 19,
      color: Colors.darkGray,
      textAlign: 'center',
      marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  modalConfirmButton: {
    width: 100,
    alignSelf: 'center',
    marginVertical: 5,
  },
})

export default CreateGroupScreen