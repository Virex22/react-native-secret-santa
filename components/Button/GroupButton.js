import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../config/colors'
import propTypes from 'prop-types'

const GroupButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={props.onClick} >
        <Image style={styles.image} source={props.source} resizeMethod="resize" resizeMode="contain" />
        <Text style={styles.text} >{props.text}</Text>
    </TouchableOpacity>
  )
}

GroupButton.propTypes = {
    source: propTypes.number,
    text: propTypes.string,
    onClick: propTypes.func,
}

GroupButton.defaultProps = {
    source: require("../../assets/img/sortIcon.png"),
    text: "Clique moi !",
    onClick: undefined,
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        backgroundColor: Colors.beige,
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0,
        borderRadius: 10,
    },
    image: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 10
    },
    text: {
        color: Colors.darkGray,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default GroupButton