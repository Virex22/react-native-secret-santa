import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import propsTypes from 'prop-types'
import Colors from '../../config/colors'
import { Dimensions } from 'react-native'

const Modal = (props) => {


    if(!props.visible)
        return null;

  return (
    <View style={styles.container}>
        <View style={styles.modalBlock}>
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            {props.children}
            <TouchableOpacity style={styles.closeButton} onPress={props.onClose} activeOpacity={0.7}>
                <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

Modal.propTypes = {
    title: propsTypes.string,
    onClose: propsTypes.func,
}

Modal.defaultProps = {
    title: undefined,
    onClose: undefined,
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'center',
        marginBottom: 10,
    },
    modalBlock: {
        backgroundColor: Colors.white,
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    container: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 20,
        lineHeight: 20,
        color: Colors.darkGray,
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})



export default Modal