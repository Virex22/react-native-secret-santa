import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SantaTimer from '../components/SantaTimer/SantaTimer';
import Background from '../components/Template/Background';
import GroupList from '../components/GroupList/GroupList';
import Button from '../components/Button/Button';
import Return from '../components/Button/Return';
import ImageButton from '../components/Button/ImageButton';
import Modal from '../components/modal/Modal';
import NumberInput from '../components/Forms/Input/NumberInput';
import UserContext from '../context/UserContext';
import {GetProfile} from '../helper/profileHelper';
import {addGroupMembers} from '../helper/groupHelper';
const HomeScreen = ({navigation}) => {
  const userContext = React.useContext(UserContext);

  const [showJoinGroupModal, setShowJoinGroupModal] = React.useState(false);
  const [modalForms, setModalForms] = React.useState({
    groupCode: '',
    groupCodeValid: false,
  });

  function joinGroup() {
    if (modalForms.groupCodeValid) {
      let numberCode = parseInt(modalForms.groupCode);
      addGroupMembers(
        numberCode,
        userContext.profile.id,
        userContext.profile.pseudo,
      )
        .then(response => {
          setShowJoinGroupModal(false);
          navigation.navigate('Group', {groupId: numberCode});
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  useEffect(() => {
    GetProfile(userContext.profile.id)
      .then(response => {
        if (response.error) {
          console.error(response.error);
        } else {
          userContext.setProfile({
            ...userContext.profile,
            id: response.id,
            pseudo: response.full_name,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Background decorateTop disableBottom>
      <SantaTimer />
      <GroupList navigation={navigation} />

      <View style={styles.buttonsContainer}>
        <Button
          secondary
          text="Rejoindre un groupe"
          onClick={() => {
            setShowJoinGroupModal(true);
          }}
        />
        <Button
          text="Créer un groupe"
          onClick={() => {
            navigation.navigate('CreateGroup');
          }}
        />
      </View>
      <Return
        onClick={() => {
          navigation.navigate('Login');
        }}
      />
      <ImageButton
        source={require('../assets/img/profileIcon.png')}
        onClick={() => {
          navigation.navigate('Profile');
        }}
        style={styles.profileButton}
        width={35}
        height={35}
      />
      <Modal
        visible={showJoinGroupModal}
        onClose={() => {
          setShowJoinGroupModal(false);
        }}>
        <NumberInput
          placeholder="123456"
          title="Code du groupe"
          max={999999}
          onChange={(text, isValid) => {
            setModalForms({
              ...modalForms,
              groupCode: text,
              groupCodeValid: isValid,
            });
          }}
        />
        <Button
          text="Rejoindre"
          style={styles.modalButton}
          onClick={joinGroup}
        />
      </Modal>
    </Background>
  );
};

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
  },
});

export default HomeScreen;
