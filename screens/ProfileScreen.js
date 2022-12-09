import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Return from '../components/Button/Return'
import Background from '../components/Template/Background'
import WishList from '../components/WishList/WishList'

const ProfileScreen = ({navigation}) => {
  return (
    <Background disableTop>
        <Image source={require('../assets/img/profileIcon.png')} style={styles.image} />
        <Text style={styles.name}>Valentin HOFFART</Text>
        <Text style={styles.lastConnexion}>Valentin HOFFART s’est connecté le 06/12/2022 à Metz</Text>
        <WishList initText={"Un super cadeau \nUn autre super cadeau"} navigation={navigation}/>
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