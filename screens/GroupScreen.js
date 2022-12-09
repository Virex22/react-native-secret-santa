import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button/Button';
import GroupButton from '../components/Button/GroupButton';
import Return from '../components/Button/Return';
import Background from '../components/Template/Background';
import Colors from '../config/colors';
import UserContext from '../context/UserContext';
import {drawSecrets} from '../helper/drawHelper';
import {GetGroup, removeGroup, UpdateGroup} from '../helper/groupHelper';

const GroupScreen = ({navigation, route}) => {
  const userContext = React.useContext(UserContext);
  const [group, setGroup] = React.useState(null);
  let {groupId} = route.params;

  let code = group ? group.id : '';
  code = code.toString().padStart(6, '0');

  useEffect(() => {
    GetGroup(groupId).then(group => {
      setGroup(group);
    });
  }, []);

  function drawSecret() {
    Alert.alert(
      'Tirage au sort',
      'Êtes-vous sûr de vouloir générer le tirage au sort ?',
      [
        {text: 'Annuler'},
        {
          text: 'Générer',
          onPress: () => {
            let members = drawSecrets(JSON.parse(group.members));
            setGroup({...group, members: JSON.stringify(members), step: 2});
            UpdateGroup({...group, members: JSON.stringify(members), step: 2})
              .then(() => {
                Alert.alert('Le tirage au sort a bien été effectué');
              })
              .catch(error => {
                console.log(error);
              });
          },
        },
      ],
      {cancelable: false},
    );
  }

  function handleDeleteGroup() {
    Alert.alert(
      'Supprimer le groupe',
      'Êtes-vous sûr de vouloir supprimer ce groupe ?',
      [
        {text: 'Annuler'},
        {
          text: 'Supprimer',
          onPress: () => {
            removeGroup(groupId).then(() => {
              navigation.navigate('Home');
            });
          },
        },
      ],
      {cancelable: false},
    );
  }

  const IsOwner = group ? group.creator == userContext.profile.id : false;
  let stringMembers = '';
  let secretUser = {};
  if (group) {
    let members = JSON.parse(group.members);
    stringMembers = group ? members.map(member => member.name).join(', ') : '';

    if (group && group.step == 2) {
      let secretUserId = members.find(
        member => member.id == userContext.profile.id,
      ).secretUser;
      secretUser = {
        id: secretUserId,
        name: members.find(member => member.id == secretUserId).name,
      };
    }
  }

  return (
    <Background disableTop>
      <View style={styles.groupInfo}>
        <Image
          style={styles.infoImage}
          source={require('../assets/img/GroupIcon.png')}
        />
        <View>
          <Text style={styles.groupName}>{group ? group.name : ''}</Text>
          <Text style={styles.groupUser}>{stringMembers}</Text>
          <View style={styles.priceLabel}>
            <Text style={styles.priceText}>
              ~{group ? group.max_amount : ''}€
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupAction}>
        {group && group.step == 2 && (
          <Text style={styles.groupActionTitle}>Votre secret santa :</Text>
        )}
        {group && group.step == 1 ? (
          <GroupButton
            disable={!IsOwner}
            text={
              IsOwner
                ? 'Générer le tirage au sort'
                : 'Attendre le tirage au sort'
            }
            onClick={drawSecret}
          />
        ) : (
          <GroupButton
            text={secretUser.name}
            source={require('../assets/img/profileIcon.png')}
            onClick={() => {
              /* TODO : go to profilPage of secretUser */
            }}
          />
        )}
      </View>
      <Return
        onClick={() => {
          navigation.navigate('Home');
        }}
      />
      <Text style={styles.groupCodeText}>Code d'invitation : {code}</Text>
      {IsOwner && (
        <Button
          style={styles.deleteButton}
          text="Supprimer le groupe"
          onClick={handleDeleteGroup}
        />
      )}
    </Background>
  );
};

const styles = StyleSheet.create({
  groupInfo: {
    marginVertical: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  actionButton: {
    width: 300,
    backgroundColor: Colors.beige,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0,
    height: 50,
  },
  groupCodeText: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  infoImage: {
    width: 75,
    height: 75,
    marginRight: 20,
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  groupUser: {
    fontSize: 15,
    color: Colors.darkGray,
    width: 180,
  },
  priceLabel: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  priceText: {
    color: Colors.secondaryText,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#990000',
    alignSelf: 'center',
    borderRadius: 0,
    height: 50,
  },
  groupActionTitle: {
    width: 300,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGray,
    marginBottom: 10,
  },
});

export default GroupScreen;
