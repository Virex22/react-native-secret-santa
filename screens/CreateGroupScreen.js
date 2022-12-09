import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import Button from '../components/Button/Button'
import Return from '../components/Button/Return'
import NumberInput from '../components/Forms/Input/NumberInput'
import TextInput from '../components/Forms/Input/TextInput'
import Modal from '../components/modal/Modal'
import Background from '../components/Template/Background'
import Colors from '../config/colors'

const CreateGroupScreen = ({navigation}) => {
  const [forms, setForms] = React.useState({
    name: '',
    nameValid: false,
    numberOfDraw: '',
    numberOfDrawValid: false,
    maxAmount: '',
    maxAmountValid: false,
  })
  const [showValidationModal, setShowValidationModal] = React.useState(false)

  function onSubmit() {
    setShowValidationModal(true)
  }

  return (
    <Background disableTop>
      <Image 
      resizeMode='contain'
      resizeMethod='scale'
      source={require('../assets/img/GroupIcon.png')} 
      style={styles.image} 
      />
      <TextInput placeholder="Nom du groupe" title="Nom du groupe" regex={/^[a-zA-Z0-9]{3,25}$/} />
      <NumberInput 
      onChange={(text,isValid) => setForms({ ...forms, numberOfDraw: text, numberOfDrawValid: isValid })}
        placeholder="1" 
        title="Nombre de tirage" 
        min={1} 
        max={3} />
      <NumberInput 
      onChange={(text,isValid) => setForms({ ...forms, maxAmount: text, maxAmountValid: isValid })}
        placeholder="1" 
        title="Montant max du cadeau" 
        min={1} 
        max={1000}/>
      <Button style={styles.button} text="Créer le groupe" onClick={onSubmit} />
      <Return onClick={() => {navigation.navigate('Home')}} />
      <Modal 
        visible={showValidationModal}
        onClose={() => {setShowValidationModal(false)}}
      > 
        <Text style={styles.subTitle}>Partager le code à vos amis</Text>
        <Text style={styles.information}>332754</Text>
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
})

export default CreateGroupScreen