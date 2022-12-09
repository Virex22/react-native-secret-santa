import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View} from 'react-native'
import Button from '../components/Button/Button'
import GroupButton from '../components/Button/GroupButton'
import Return from '../components/Button/Return'
import Background from '../components/Template/Background'
import Colors from '../config/colors'
import { GetGroup } from '../lib/groupHelper'

const GroupScreen = ({navigation,route}) => {
  const [step , setStep] = React.useState(0);
  const [group, setGroup] = React.useState(null);
  let {groupId} = route.params;

  useEffect(() => {
    GetGroup(groupId).then((group) => {
      setGroup(group)
    })
  }, [])
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
            <GroupButton />
        </View>
        <Return onClick={() => {navigation.navigate('Home')}} />
        <Text style={styles.groupCodeText}>Code : {groupId}</Text>
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
      bottom: 15,
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
  })


export default GroupScreen