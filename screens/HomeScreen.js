
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import SantaTimer from '../components/SantaTimer/SantaTimer'
import Background from '../components/Template/Background'
import GroupList from '../components/GroupList/GroupList'
import Button from '../components/Button/Button'
import Return from '../components/Button/Return'
import ImageButton from '../components/Button/ImageButton'
import Modal from '../components/modal/Modal'
import NumberInput from '../components/Forms/Input/NumberInput'
import { UpdatePsoeudo } from '../lib/authenticationHelper'

const HomeScreen = ({navigation}) => {
  const  [showJoinGroupModal, setShowJoinGroupModal] = React.useState(false);
  const [modalForms, setModalForms] = React.useState({
    groupCode: '',
    groupCodeValid: false,
  })

  function joinGroup() {
    if (modalForms.groupCodeValid) {
      navigation.navigate('Group', {code: modalForms.groupCode})
    }
  }

  return (
    <Background decorateTop disableBottom>
      <SantaTimer />
      <GroupList />
      
      <View style={styles.buttonsContainer}>
          <Button secondary text="Rejoindre un groupe" onClick={()=>{setShowJoinGroupModal(true)}} />
          <Button text="Créer un groupe" onClick={()=>{navigation.navigate('CreateGroup')}} />
      </View>
      <Return onClick={()=>{navigation.navigate('Login')}} />
      <ImageButton 
        source={require('../assets/img/profileIcon.png')}
        onClick={()=>{navigation.navigate('Profile')}}
        style={styles.profileButton}
        width={35}
        height={35}
      />
      <Modal 
        visible={showJoinGroupModal}
        onClose={() => {setShowJoinGroupModal(false)}}
      >
        <NumberInput placeholder="123456" title="Code du groupe" max={999999} min={100000} 
          onChange={(text,isValid) => {setModalForms({ ...modalForms, groupCode: text, groupCodeValid: isValid })}}
        />
        <Button text='Rejoindre' style={styles.modalButton} onClick={joinGroup}/>
      </Modal>
    </Background>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
  },
  profileButton: {
      position: 'absolute',
      top: 20,
      right: 20,
  },
  modalButton: {
      width: 125,
      alignSelf: 'center',
  }
})

export default HomeScreen