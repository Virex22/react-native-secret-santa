import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropsTypes from 'prop-types'
import Colors from '../../config/colors'

const Button = (props) => {
    let styleChoice = props.secondary ? StylesSecondary : Styles;
  return (
    <TouchableOpacity 
        onPress={props.onClick} 
        style={[styleChoice.container,StyleSheet.create(props.style)]} 
        activeOpacity={0.7}
    >
        <Text style={styleChoice.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
    text: PropsTypes.string.isRequired,
    style: PropsTypes.object,
    onClick: PropsTypes.func,
    secondary: PropsTypes.bool,
}

Button.defaultProps = {
    text: 'Ok',
    style: undefined,
    onClick: undefined,
    secondary: false,
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 7,
    },
    text: {
        color: Colors.secondaryText,
        fontSize: 15,
        textAlign: 'center',
    },
})
const StylesSecondary = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 7,
        borderColor: Colors.primary,
        borderWidth: 3,
    },
    text: {
        color: Colors.darkGray,
        fontSize: 15,
        textAlign: 'center',
    },
})



export default Button