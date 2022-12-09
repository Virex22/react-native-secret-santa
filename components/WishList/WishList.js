import React from 'react'
import { StyleSheet, Text, TextInput,View } from 'react-native'
import Colors from '../../config/colors'
import propsTypes from 'prop-types'
import Button from '../Button/Button'
import { ScrollView } from 'react-native-gesture-handler'

const WishList = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Ma liste au père noël</Text>
        <TextInput 
        style={styles.input}
        placeholder="Ajouter un cadeau" 
        multiline={true}
        numberOfLines={5}
        editable={props.editable}
        defaultValue={props.initText}
        />
        { props.editable ? <Button style={styles.button} text='Enregistrer'/> : null}
        <Button style={styles.button} text='Retour' secondary={props.editable} onClick={props.navigation.goBack}/>
    </ScrollView>
  )
}

WishList.propTypes = {
    editable: propsTypes.bool,
    initText: propsTypes.string,
    navigation: propsTypes.object.isRequired,
}

WishList.defaultProps = {
    editable: false,
    initText: '',
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