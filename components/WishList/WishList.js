import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput,View } from 'react-native'
import Colors from '../../config/colors'
import propsTypes from 'prop-types'
import Button from '../Button/Button'
import { ScrollView } from 'react-native-gesture-handler'
import UserContext from '../../context/UserContext'
import { GetProfile, UpdateProfile } from '../../helper/profileHelper'

const WishList = (props) => {

    const userContext = React.useContext(UserContext);

    const [profile, setProfile] = React.useState({});
    const [wishListText, setWishListText] = React.useState(); 

    function save() {
        UpdateProfile(userContext.profile.id, undefined, wishListText).then((profile) => {
            setProfile(profile);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        GetProfile(userContext.profile.id).then((profile) => {
            setProfile(profile);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Ma liste au père noël</Text>
        <TextInput 
        style={styles.input}
        placeholder="Ajouter un cadeau" 
        multiline={true}
        numberOfLines={5}
        onChangeText={setWishListText}
        editable={props.editable}
        defaultValue={profile ? profile.wish_list : ''}
        />
        { props.editable ? <Button style={styles.button} text='Enregistrer' onClick={()=>{ save() }}/> : null}
        <Button style={styles.button} text='Retour' secondary={props.editable} onClick={props.navigation.goBack}/>
    </ScrollView>
  )
}

WishList.propTypes = {
    editable: propsTypes.bool,
    navigation: propsTypes.object.isRequired,
}

WishList.defaultProps = {
    editable: false,
    navigation: {},
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color : Colors.darkGray,
        marginTop: 20,
    },
    input: {
        height: 200,
        width: "100%",
        backgroundColor: Colors.beige,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 15,
        color : Colors.darkGray,
    },
    container: {
        width: "80%",
        alignSelf: 'center',
    },
    button: {
        marginTop: 10,
        width: "70%",
        alignSelf: 'center',
    },
})

export default WishList