import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UserContext from '../../context/UserContext'
import { GetGroups } from '../../helper/groupHelper'
import Group from './Group'
import PropTypes from 'prop-types'

const GroupList = (props) => {

    let userContext = React.useContext(UserContext)

    const [groups, setGroups] = React.useState([])

    function updateGroups() {
        GetGroups(userContext.profile.id).then((groups) => {
            setGroups(groups)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        updateGroups();
        let interval = setInterval(() => {
            updateGroups();
        }, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.title}> 
            <Image style={styles.titleImage} source={require("../../assets/img/present.png")} />
            <Text  style={styles.titleText}>Mes groupes</Text>
        </View>
        {groups.map((group) => (
            <Group key={group.id} title={group.name} members={group.members} onClick={()=>{ props.navigation.navigate('Group', {groupId: group.id}) }} />
        ))}
    </ScrollView>
  )
}

GroupList.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create( {
    container: {
        padding: 30,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleImage: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
    },
})

export default GroupList