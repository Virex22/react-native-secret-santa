import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Button from '../components/Button/Button'
import GroupButton from '../components/Button/GroupButton'
import Return from '../components/Button/Return'
import Background from '../components/Template/Background'
import Colors from '../config/colors'
import UserContext from '../context/UserContext'
import { GetGroup, removeGroup } from '../helper/groupHelper'

const GroupScreen = ({navigation,route}) => {
  const userContext = React.useContext(UserContext);
  const [step , setStep] = React.useState(0);
  const [group, setGroup] = React.useState(null);
  let {groupId} = route.params;

  let code = group ? group.id : '';
  code = code.toString().padStart(6, '0');

  useEffect(() => {
    GetGroup(groupId).then((group) => {
      setGroup(group);
    })
  }, [])

  function handleDeleteGroup() {
    Alert.alert(
      "Supprimer le groupe",
      "Êtes-vous sûr de vouloir supprimer ce groupe ?",
      [
        {
          text: "Annuler"
        },
        { 
          text: "Supprimer", 
          onPress: () => {
            removeGroup(groupId).then(() => {
              navigation.navigate('Home');
            }
          )
          },
        }
      ],
      { cancelable: false }
    );
  }



  const IsOwner = group ? group.creator == userContext.profile.id : false;
  let stringMembers = '';
  if (group) {
    console.log(group)
    let members = JSON.parse(group.members);
    stringMembers = group ? members.map((member) => member.name).join(', ') : '';
  }

  return (
    <Background disableTop>
        <View style={styles.groupInfo}>
          <Image style={styles.infoImage} source={require('../assets/img/GroupIcon.png')} />
          <View>
            <Text style={styles.groupName}>{group ? group.name : ''}</Text>
            <Text style={styles.groupUser}>{stringMembers}</Text>
            <View style={styles.priceLabel}>
              <Text style={styles.priceText}>~{group ? group.max_amount : ''}€</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupAction}>
            {step == 1 && <Text style={styles.groupActionTitle}>Votre secret santa</Text>}
            <TouchableOpacity onPress={() => {}}>
            </TouchableOpacity>
            <GroupButton disable={!IsOwner} text={IsOwner ? "Générer le tirage au sort" : "Attendre le tirage au sort"} onClick={() => {}} />
        </View>
        <Return onClick={() => {navigation.navigate('Home')}} />
        <Text style={styles.groupCodeText}>Code d'invitation : {code}</Text>
        {IsOwner && <Button style={styles.deleteButton} text="Supprimer le groupe" onClick={handleDeleteGroup} /> }
    </Background>
  )
}

const styles = StyleSheet.create({
    groupInfo: {
      marginTop: 50,
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
      textAlign: 'center'
    },
    infoImage: {
      width: 75,
      height: 75,
      marginRight: 20
    },
    groupName: {
      fontSize: 20,
      fontWeight: 'bold',
      color : Colors.darkGray
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
      backgroundColor: "#990000",
      alignSelf: 'center',
      borderRadius: 0,
      height: 50,
    },
  })


export default GroupScreen