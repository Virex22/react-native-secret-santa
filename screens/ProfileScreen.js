import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Return from '../components/Button/Return'
import Background from '../components/Template/Background'
import WishList from '../components/WishList/WishList'
import UserContext from '../context/UserContext'

const ProfileScreen = ({navigation}) => {
    const userContext = React.useContext(UserContext);
  return (
    <Background disableTop>
        <Image source={require('../assets/img/profileIcon.png')} style={styles.image} />
        <Text style={styles.name}>{userContext.profile.pseudo}</Text>
        <Text style={styles.lastConnexion}>{userContext.profile.pseudo} s’est connecté il y a 2 jours à Metz</Text>
        <WishList navigation={navigation} editable/>
    </Background>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
    },
    lastConnexion: {
        fontSize: 15,
        width: "80%",
        color: "#aaa",
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
    },
})

export default ProfileScreen