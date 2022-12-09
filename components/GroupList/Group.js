import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../../config/colors';

const Group = (props) => {

    let stringMembers = "";
    props.members.forEach((member) => {
        stringMembers += member.name + ", ";
    });
    stringMembers = stringMembers.slice(0, -2);
  return (
    <View style={styles.container}>
        <Image  
        resizeMethod='resize'
        resizeMode='contain'
        style={styles.image} 
        source={require("../../assets/img/family.png")} />
        <View style={styles.textContainer}>
            <Text style={styles.title} >{props.title}</Text>
            <Text style={styles.users} >{stringMembers}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlue,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    users: {
        fontSize: 15,
        color: "#aaa",
    },
    image: {
        width: 50,
        height: 50,
    },
    textContainer: {
        display: 'flex',
        flex : 1,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})

export default Group